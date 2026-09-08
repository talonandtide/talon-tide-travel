/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  firstName?: string
  lastName?: string
  email?: string
  organization?: string
  subject?: string
  message?: string
}

const ContactInquiry = ({
  firstName,
  lastName,
  email,
  organization,
  subject,
  message,
}: Props) => {
  const name = [firstName, lastName].filter(Boolean).join(' ') || 'Someone'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{`${name}: ${subject || 'General Inquiry'}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New message from talonandtide.com</Heading>
          <Section>
            <Text style={label}>Subject</Text>
            <Text style={value}>{subject || 'General Inquiry'}</Text>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email || 'Not provided'}</Text>
            <Text style={label}>Organization</Text>
            <Text style={value}>{organization || 'Not provided'}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message || 'No message provided.'}</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactInquiry,
  subject: (data: Record<string, any>) =>
    `Contact form: ${data?.subject || 'General Inquiry'}`,
  displayName: 'Contact form inquiry',
  to: 'hello@talonandtide.com',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    organization: 'Wild Coast Expeditions',
    subject: 'Operator Partnership',
    message: 'We would love to be considered for vetting.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Georgia, "Times New Roman", serif',
}
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = {
  color: '#0f2a24',
  fontSize: '22px',
  margin: '0 0 24px',
}
const label = {
  color: '#8a8f8c',
  fontSize: '11px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  margin: '16px 0 2px',
  fontFamily: 'Arial, sans-serif',
}
const value = {
  color: '#1b2a3a',
  fontSize: '15px',
  margin: '0',
}
const messageStyle = {
  color: '#1b2a3a',
  fontSize: '15px',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap' as const,
  margin: '0',
}
const hr = { borderColor: '#e6e2d8', margin: '28px 0 8px' }
