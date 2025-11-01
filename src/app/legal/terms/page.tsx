'use client'

import { YStack, XStack, Text } from 'tamagui'

export default function TermsPage() {
  return (
    <YStack width="100%" gap={0}>
      <TermsContent />
    </YStack>
  )
}

function TermsContent() {
  return (
    <YStack
      width="100%"
      backgroundColor="$color1"
      paddingVertical={60}
      paddingHorizontal={20}
      gap={40}
      alignItems="center"
    >
      {/* Header */}
      <YStack gap={16} alignItems="center" maxWidth={900}>
        <Text fontSize={44} fontWeight="800" textAlign="center" color="$textPrimary">
          Terms of Service
        </Text>
        <Text fontSize={16} color="$textSecondary" textAlign="center">
          Effective Date: October 31, 2025
        </Text>
      </YStack>

      {/* Content */}
      <YStack width="100%" maxWidth={900} gap={32}>
        {/* Section 1 */}
        <Section
          number="1"
          title="Acceptance of Terms"
          content={`By accessing or using the Pinglo mobile application, website located at this domain, and any related services (collectively, the "Service"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the Service.`}
        />

        {/* Section 2 */}
        <Section
          number="2"
          title="Eligibility"
          content={`You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the Service. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.`}
        />

        {/* Section 3 */}
        <Section
          number="3"
          title="Accounts and Security"
          bullets={[
            'You are responsible for maintaining the confidentiality of your account and for all activities that occur under it.',
            'Authentication may be provided through Firebase Authentication (e.g., Email/Password, Google, Apple).',
            'Promptly notify us of any unauthorized use of your account.',
          ]}
        />

        {/* Section 4 */}
        <Section
          number="4"
          title="Subscriptions and Payments (If Applicable)"
          bullets={[
            'Some features may be free; others may require a paid subscription or in-app purchase. Pricing and terms will be presented at the point of purchase.',
            'Taxes may apply. Except as required by law, payments are non-refundable.',
          ]}
        />

        {/* Section 5 */}
        <Section
          number="5"
          title="Acceptable Use"
          bullets={[
            'Violate any applicable law or regulation.',
            'Infringe intellectual property or privacy rights.',
            'Upload or transmit malicious code or attempt to bypass security.',
            'Use the Service to harass, spam, or abuse others.',
            'Access or use the Service to build a competing product.',
          ]}
          intro="You agree not to:"
        />

        {/* Section 6 */}
        <Section
          number="6"
          title="User Content"
          bullets={[
            'You retain ownership of content you submit to the Service ("User Content").',
            'You grant Pinglo a non-exclusive, worldwide, royalty-free license to host, store, process, display, and transmit your User Content solely to operate and improve the Service.',
            'You represent that you have the necessary rights to your User Content.',
          ]}
        />

        {/* Section 7 */}
        <Section
          number="7"
          title="Contacts and Personal Data"
          content={`Certain features may request access to your contacts or personal data. Access is permission-based and optional. Data is processed in accordance with our Privacy Policy.`}
        />

        {/* Section 8 */}
        <Section
          number="8"
          title="Intellectual Property"
          bullets={[
            'The Service, including software, design, and trademarks, is owned by Pinglo or its licensors and is protected by law.',
            'No rights are granted except as expressly set out in these Terms.',
          ]}
        />

        {/* Section 9 */}
        <Section
          number="9"
          title="Third-Party Services"
          content={`The Service may rely on third-party services (e.g., Firebase, Apple, Google). We are not responsible for third-party content or services.`}
        />

        {/* Section 10 */}
        <Section
          number="10"
          title="Disclaimers"
          bullets={[
            'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
            'We do not warrant that the Service will be uninterrupted, secure, or error-free.',
          ]}
        />

        {/* Section 11 */}
        <Section
          number="11"
          title="Limitation of Liability"
          bullets={[
            'TO THE MAXIMUM EXTENT PERMITTED BY LAW, PINGLO WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR REVENUE, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE.',
            'OUR AGGREGATE LIABILITY WILL NOT EXCEED THE AMOUNTS YOU PAID (IF ANY) TO USE THE SERVICE IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY.',
          ]}
        />

        {/* Section 12 */}
        <Section
          number="12"
          title="Indemnification"
          content={`You agree to indemnify and hold Pinglo harmless from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising from your use of the Service or violation of these Terms.`}
        />

        {/* Section 13 */}
        <Section
          number="13"
          title="Termination"
          content={`We may suspend or terminate access to the Service at any time, with or without notice, for any reason. You may stop using the Service at any time. Upon termination, sections that by their nature should survive (e.g., IP, disclaimers, limitations, indemnity) will survive.`}
        />

        {/* Section 14 */}
        <Section
          number="14"
          title="Changes to the Service and Terms"
          content={`We may modify the Service or these Terms at any time. Material changes will be notified by updating the Effective Date and/or providing notice within the Service. Continued use after changes constitutes acceptance.`}
        />

        {/* Section 15 */}
        <Section
          number="15"
          title="Governing Law; Dispute Resolution"
          content={`These Terms are governed by the laws of the United States, without regard to conflict of law principles. Courts located in that jurisdiction will have exclusive jurisdiction, unless otherwise required by applicable law.`}
        />

        {/* Section 16 */}
        <Section
          number="16"
          title="Contact"
          bullets={[
            'Questions about these Terms: pingloapp+terms@gmail.com',
          ]}
        />
      </YStack>
    </YStack>
  )
}

interface SectionProps {
  number: string
  title: string
  content?: string
  bullets?: string[]
  intro?: string
}

function Section({ number, title, content, bullets, intro }: SectionProps) {
  return (
    <YStack gap={12}>
      <Text fontSize={18} fontWeight="700" color="$accentPrimary">
        {number}. {title}
      </Text>

      {intro && <Text fontSize={14} color="$textSecondary" fontWeight="500">{intro}</Text>}

      {content && (
        <Text fontSize={14} color="$textSecondary" lineHeight={24}>
          {content}
        </Text>
      )}

      {bullets && (
        <YStack gap={8} paddingLeft={20}>
          {bullets.map((bullet, i) => (
            <XStack key={i} gap={12} alignItems="flex-start">
              <Text fontSize={14} color="$accentPrimary" fontWeight="600" flexShrink={0}>
                •
              </Text>
              <Text fontSize={14} color="$textSecondary" lineHeight={22} flex={1}>
                {bullet}
              </Text>
            </XStack>
          ))}
        </YStack>
      )}
    </YStack>
  )
}
