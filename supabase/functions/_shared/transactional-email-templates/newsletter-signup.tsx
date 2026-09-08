/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  email?: string
  source?: string
  date?: string
}

const NewsletterSignup = ({ email, source, date }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New subscriber: ${email || 'unknown address'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New newsletter subscriber</Heading>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || 'Not provided'}</Text>
        <Text style={label}>Signed up from</Text>
        <Text style={value}>{source || 'Website'}</Text>
        <Text style={label}>When</Text>
        <Text style={value}>{date || new Date().toUTCString()}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewsletterSignup,
  subject: 'New newsletter subscriber',
  displayName: 'Newsletter signup notification',
  to: 'hello@talonandtide.com',
  previewData: {
    email: 'jane@example.com',
    source: 'Homepage newsletter',
    date: new Date().toUTCString(),
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Georgia, "Times New Roman", serif',
}
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { color: '#0f2a24', fontSize: '22px', margin: '0 0 24px' }
const label = {
  color: '#8a8f8c',
  fontSize: '11px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  margin: '16px 0 2px',
  fontFamily: 'Arial, sans-serif',
}
const value = { color: '#1b2a3a', fontSize: '15px', margin: '0' }
