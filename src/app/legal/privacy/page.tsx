'use client'

export default function PrivacyPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '44px', fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>Privacy Policy</h1>
        <p style={{ fontSize: '16px', color: '#cbd5e1', textAlign: 'center', margin: 0 }}>Effective Date: October 31, 2025</p>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Sec n="1" t="Overview" c="This Privacy Policy describes how Pinglo collects, uses, and shares information." />
        <Sec n="2" t="Data Controller" b={['Pinglo', 'Contact: hello@pinglo.app', 'Address: San Francisco, CA 94105']} />
        <Sec n="3" t="Information We Collect" b={['Information You Provide: name, email address, profile photo, and content', 'Authentication Data: via Firebase', 'Device Information: device identifiers, OS, IP address', 'Cookies: for functionality and analytics']} />
        <Sec n="4" t="How We Use Information" b={['Provide the Service', 'Communicate with you', 'Personalize content', 'Improve safety', 'Comply with legal obligations']} />
        <Sec n="5" t="Legal Bases (EEA/UK Users)" c="We process data under contract, legitimate interests, consent, and legal obligations." />
        <Sec n="6" t="Sharing of Information" b={['Service Providers: Google Firebase', 'Auth Providers: Google, Apple', 'Legal and safety when required', 'We do not sell personal information']} />
        <Sec n="7" t="International Transfers" c="Information may be transferred to other countries with appropriate safeguards." />
        <Sec n="8" t="Data Retention" c="We retain data as long as needed to provide the Service." />
        <Sec n="9" t="Your Rights" c="You may have rights to access, correct, delete, or port your data." />
        <Sec n="10" t="Children's Privacy" c="The Service is not directed to children under 13." />
        <Sec n="11" t="Security" c="We use safeguards appropriate to protect your data." />
        <Sec n="12" t="Cookies and Preferences" c="We use cookies for functionality and analytics." />
        <Sec n="13" t="Third-Party Links" c="Links to third-party sites are governed by their policies." />
        <Sec n="14" t="Changes to This Policy" c="We may update this Policy with notice." />
        <Sec n="15" t="Contact" b={['Questions: pingloapp+privacy@gmail.com']} />
      </div>
    </div>
  )
}

function Sec({n, t, c, b}: {n: string, t: string, c?: string, b?: string[]}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontSize: '18px', fontWeight: '700', color: '#a78bfa', margin: 0 }}>{n}. {t}</p>
      {c && <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '24px', margin: 0 }}>{c}</p>}
      {b && b.map((bullet, i) => (
        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', color: '#a78bfa', fontWeight: '600' }}></span>
          <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '22px', margin: 0 }}>{bullet}</p>
        </div>
      ))}
    </div>
  )
}
