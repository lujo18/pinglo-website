'use client'

import { YStack, XStack, Text } from 'tamagui'

export default function PrivacyPage() {
  return (
    <YStack width="100%" gap={0}>
      <PrivacyContent />
    </YStack>
  )
}

function PrivacyContent() {
  return (
    <YStack
      width="100%"
      bg="$color1"
      py={60}
      px={20}
      gap={40}
      alignItems="center"
    >
      {/* Header */}
      <YStack gap={16} alignItems="center" maxWidth={900}>
        <Text fontSize={44} fontWeight="800" textAlign="center" color="$textPrimary">
          Privacy Policy
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
          title="Overview"
          content={`This Privacy Policy describes how Pinglo ("we," "us," or "our") collects, uses, and shares information when you use the Pinglo mobile application, this website, and related services (the "Service").`}
        />

        {/* Section 2 */}
        <Section
          number="2"
          title="Data Controller"
          bullets={[
            'Pinglo',
            'Contact: hello@pinglo.app',
            'Address: San Francisco, CA 94105',
          ]}
        />

        {/* Section 3 */}
        <Section
          number="3"
          title="Information We Collect"
          bullets={[
            'Information You Provide: name, email address, profile photo, messages or feedback, and any content you submit. If you choose to join a waitlist or newsletter, we collect your email and related metadata (e.g., referral source).',
            'Authentication Data: via Firebase Authentication (e.g., Email/Password, Google, Apple). We receive your basic profile information from the provider as permitted by their policies and your settings.',
            'Contacts (Optional): If you grant permission, we may access selected contact data to enable app features. You can revoke access at any time via your device settings.',
            'Usage and Device Information: device identifiers, OS, app version, IP address, timestamps, and event logs. If enabled, analytics and crash reports (e.g., Firebase Analytics/Crashlytics).',
            'Cookies and Similar Technologies: on the website, for essential functionality, preferences, analytics, and performance.',
          ]}
        />

        {/* Section 4 */}
        <Section
          number="4"
          title="How We Use Information"
          bullets={[
            'Provide and operate the Service (authentication, core features, syncing).',
            'Communicate with you (support, updates, transactional emails).',
            'Personalize content and measure performance (with your consent where required).',
            'Improve safety and reliability (fraud prevention, debugging).',
            'Comply with legal obligations.',
          ]}
        />

        {/* Section 5 */}
        <Section
          number="5"
          title="Legal Bases (EEA/UK Users)"
          content={`We process personal data under these legal bases: performance of a contract, legitimate interests (e.g., improving and securing the Service), consent (e.g., marketing, optional analytics), and legal obligations.`}
        />

        {/* Section 6 */}
        <Section
          number="6"
          title="Sharing of Information"
          bullets={[
            'Service Providers and Subprocessors: e.g., Google Firebase (Authentication, Firestore, Cloud Functions, optional Analytics/Crashlytics; and hosting/CDN as applicable).',
            'Auth Providers: Google, Apple, and others you choose to use for sign-in.',
            'Legal, Safety, and Compliance: when required by law or to protect rights and safety.',
            'We do not sell personal information.',
          ]}
        />

        {/* Section 7 */}
        <Section
          number="7"
          title="International Transfers"
          content={`Your information may be transferred to and processed in countries other than your own. We use appropriate safeguards where required by law.`}
        />

        {/* Section 8 */}
        <Section
          number="8"
          title="Data Retention"
          content={`We retain information for as long as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion as described below.`}
        />

        {/* Section 9 */}
        <Section
          number="9"
          title="Your Rights"
          content={`Subject to applicable law, you may have rights to access, correct, delete, restrict, or port your data, and to object to certain processing. For requests, contact hello@pinglo.app. You may withdraw consent at any time where processing is based on consent.`}
        />

        {/* Section 10 */}
        <Section
          number="10"
          title="Children's Privacy"
          content={`The Service is not directed to children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children without appropriate consent.`}
        />

        {/* Section 11 */}
        <Section
          number="11"
          title="Security"
          content={`We use administrative, technical, and physical safeguards appropriate to the nature of the data and risks. No method of transmission or storage is 100% secure.`}
        />

        {/* Section 12 */}
        <Section
          number="12"
          title="Cookies and Preferences"
          content={`We use cookies and similar technologies on the website. Where required, we will present a consent banner and provide controls to manage preferences.`}
        />

        {/* Section 13 */}
        <Section
          number="13"
          title="Third-Party Links and Services"
          content={`The Service may contain links to third-party sites or services. Their privacy practices are governed by their own policies.`}
        />

        {/* Section 14 */}
        <Section
          number="14"
          title="Changes to This Policy"
          content={`We may update this Policy from time to time. Material changes will be notified by updating the Effective Date and/or providing notice within the Service.`}
        />

        {/* Section 15 */}
        <Section
          number="15"
          title="Contact"
          bullets={[
            'Questions or requests about privacy: pingloapp+privacy@gmail.com',
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
}

function Section({ number, title, content, bullets }: SectionProps) {
  return (
    <YStack gap={12}>
      <Text fontSize={18} fontWeight="700" color="$accentPrimary">
        {number}. {title}
      </Text>

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
