'use client'

export default function TermsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '44px', fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>Terms of Service</h1>
        <p style={{ fontSize: '16px', color: '#cbd5e1', textAlign: 'center', margin: 0 }}>Effective Date: October 31, 2025</p>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Sec n="1" t="Acceptance of Terms" c="By accessing Pinglo, you accept and agree to be bound by these Terms." />
        <Sec n="2" t="Changes to Terms" c="We may update these Terms anytime. Continued use means acceptance." />
        <Sec n="3" t="License and Access" c="We grant you a limited, non-exclusive license for personal, non-commercial use." />
        <Sec n="4" t="User Conduct" b={['Do not use for illegal purposes', 'Do not attempt unauthorized access', 'Do not reverse-engineer the Service', 'Do not violate intellectual property rights', 'Do not interfere with Service operation']} />
        <Sec n="5" t="Intellectual Property" c="All content is owned by Pinglo and protected by intellectual property laws." />
        <Sec n="6" t="User-Generated Content" c="You retain ownership of your content but grant us a license to use it." />
        <Sec n="7" t="Disclaimers" c="THE SERVICE IS PROVIDED AS IS WITHOUT WARRANTIES." />
        <Sec n="8" t="Limitation of Liability" c="PINGLO IS NOT LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES." />
        <Sec n="9" t="Indemnification" c="You agree to indemnify Pinglo from claims arising from your use." />
        <Sec n="10" t="Third-Party Services" c="Third-party service use is governed by their terms and policies." />
        <Sec n="11" t="Termination" c="We may terminate access for violations or unlawful conduct." />
        <Sec n="12" t="Governing Law" c="These Terms are governed by California law." />
        <Sec n="13" t="Dispute Resolution" c="Disputes shall be resolved through binding arbitration in California." />
        <Sec n="14" t="Severability" c="If any provision is invalid, others remain in effect." />
        <Sec n="15" t="Entire Agreement" c="These Terms and Privacy Policy constitute the entire agreement." />
        <Sec n="16" t="Contact" b={['For questions: hello@pinglo.app']} />
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
