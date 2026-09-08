import { supabase } from '@/integrations/supabase/client';

type ContactPayload = {
  kind: 'contact';
  firstName: string;
  lastName?: string;
  email: string;
  organization?: string;
  subject?: string;
  message: string;
};

type NewsletterPayload = {
  kind: 'newsletter';
  email: string;
  source: string;
};

export type SiteEmailPayload = ContactPayload | NewsletterPayload;

/** Sends a site form submission to the Talon & Tide inbox. Throws on failure. */
export async function sendSiteEmail(payload: SiteEmailPayload): Promise<void> {
  const { data, error } = await supabase.functions.invoke('send-site-email', {
    body: payload,
  });

  if (error) throw error;
  if (!data?.ok) throw new Error(data?.error || 'Failed to send message');
}
