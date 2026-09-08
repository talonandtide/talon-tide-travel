import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const BREVO_NEWSLETTER_LIST_ID = 7

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/brevo'
const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
const BREVO_CONNECTION_KEY = Deno.env.get('BREVO_API_KEY')

async function addBrevoNewsletterSubscriber(email: string, firstName = ''): Promise<void> {
  if (!LOVABLE_API_KEY || !BREVO_CONNECTION_KEY) {
    console.warn('Brevo credentials missing; skipping newsletter list sync')
    return
  }

  const response = await fetch(`${GATEWAY_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': BREVO_CONNECTION_KEY,
    },
    body: JSON.stringify({
      email,
      listIds: [BREVO_NEWSLETTER_LIST_ID],
      updateEnabled: true,
      ...(firstName ? { attributes: { FIRSTNAME: firstName } } : {}),
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Brevo contact sync failed [${response.status}]: ${body}`)
  }
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

// Simple per-IP rate limit (best effort, per instance)
const hits = new Map<string, number[]>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254

const str = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.trim().slice(0, max) : ''

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('cf-connecting-ip') ||
    'unknown'
  if (rateLimited(ip)) {
    return json({ error: 'Too many submissions. Please try again later.' }, 429)
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid request body' }, 400)
  }

  const kind = body.kind
  const email = body.email
  if (!isEmail(email)) return json({ error: 'A valid email address is required' }, 400)

  try {
    if (kind === 'contact') {
      const message = str(body.message, 5000)
      const firstName = str(body.firstName, 100)
      if (!firstName) return json({ error: 'Name is required' }, 400)
      if (!message) return json({ error: 'Message is required' }, 400)

      const submissionId = crypto.randomUUID()
      const result = await sendTemplateEmail('contact-inquiry', 'hello@talonandtide.com', {
        templateData: {
          firstName,
          lastName: str(body.lastName, 100),
          email,
          organization: str(body.organization, 200),
          subject: str(body.subject, 200) || 'General Inquiry',
          message,
        },
        idempotencyKey: `contact-inquiry-${submissionId}`,
        replyTo: email,
      })

      let brevoSynced = false
      try {
        await addBrevoNewsletterSubscriber(email, firstName)
        brevoSynced = true
      } catch (error) {
        console.error('Brevo contact sync failed:', error)
      }

      return json({ ok: true, sent: result.sent, brevoSynced })
    }

    if (kind === 'newsletter') {
      let brevoSynced = false
      try {
        await addBrevoNewsletterSubscriber(email)
        brevoSynced = true
      } catch (error) {
        console.error('Brevo newsletter sync failed:', error)
      }

      const result = await sendTemplateEmail('newsletter-signup', 'hello@talonandtide.com', {
        templateData: {
          email,
          source: str(body.source, 100) || 'Website',
          date: new Date().toUTCString(),
        },
        idempotencyKey: `newsletter-signup-${email.toLowerCase()}-${new Date()
          .toISOString()
          .slice(0, 10)}`,
        replyTo: email,
      })
      return json({ ok: true, sent: result.sent, brevoSynced })
    }

    return json({ error: 'Unknown request type' }, 400)
  } catch (error) {
    console.error('send-site-email failed:', error)
    return json({ error: 'Failed to send message' }, 500)
  }
})
