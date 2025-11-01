'use client'

export default function PrivacyPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '44px', fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '16px', color: '#cbd5e1', textAlign: 'center', margin: 0 }}>
          Effective Date: October 31, 2025
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <SectionComponent number="1" title="Overview" content="This Privacy Policy describes how Pinglo ("we," "us," or "our") collects, uses, and shares information when you use the Pinglo mobile application, this website, and related services (the 'Service')." />
        <SectionComponent number="2" title="Data Controller" bullets={['Pinglo', 'Contact: hello@pinglo.app', 'Address: San Francisco, CA 94105']} />
        <SectionComponent number="3" title="Information We Collect" bullets={['Information You Provide: name, email address, profile photo, messages or feedback, and any content you submit.', 'Authentication Data: via Firebase Authentication.', 'Contacts (Optional): If you grant permission, we may access selected contact data.', 'Usage and Device Information: device identifiers, OS, app version, IP address, timestamps, and event logs.', 'Cookies and Similar Technologies: on the website, for essential functionality, preferences, analytics, and performance.']} />
        <SectionComponent number="4" title="How We Use Information" bullets={['Provide and operate the Service (authentication, core features, syncing).', 'Communicate with you (support, updates, transactional emails).', 'Personalize content and measure performance.', 'Improve safety and reliability (fraud prevention, debugging).', 'Comply with legal obligations.']} />
        <SectionComponent number="5" title="Legal Bases (EEA/UK Users)" content="We process personal data under these legal bases: performance of a contract, legitimate interests, consent, and legal obligations." />
        <SectionComponent number="6" title="Sharing of Information" bullets={['Service Providers and Subprocessors: e.g., Google Firebase', 'Auth Providers: Google, Apple, and others you choose to use for sign-in.', 'Legal, Safety, and Compliance: when required by law.', 'We do not sell personal information.']} />
        <SectionComponent number="7" title="International Transfers" content="Your information may be transferred to and processed in countries other than your own." />
        <SectionComponent number="8" title="Data Retention" content="We retain information for as long as needed to provide the Service and comply with legal obligations." />
        <SectionComponent number="9" title="Your Rights" content="Subject to applicable law, you may have rights to access, correct, delete, restrict, or port your data." />
        <SectionComponent number="10" title="Children's Privacy" content="The Service is not directed to children under 13." />
        <SectionComponent number="11" title="Security" content="We use administrative, technical, and physical safeguards appropriate to the nature of the data and risks." />
        <SectionComponent number="12" title="Cookies and Preferences" content="We use cookies and similar technologies on the website." />
        <SectionComponent number="13" title="Third-Party Links and Services" content="The Service may contain links to third-party sites or services." />
        <SectionComponent number="14" title="Changes to This Policy" content="We may update this Policy from time to time." />
        <SectionComponent number="15" title="Contact" bullets={['Questions or requests about privacy: pingloapp+privacy@gmail.com']} />
      </div>
    </div>
  )
}

function SectionComponent({ number, title, content, bullets }: any) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontSize: '18px', fontWeight: '700', color: '#a78bfa', margin: 0 }}>
        {number}. {title}
      </p>
      {content && <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '24px', margin: 0 }}>{content}</p>}
      {bullets && bullets.map((bullet: string, i: number) => (
        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', color: '#a78bfa', fontWeight: '600' }}></span>
          <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '22px', margin: 0 }}>{bullet}</p>
        </div>
      ))}
    </div>
  )
}
