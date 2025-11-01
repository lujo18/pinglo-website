'use client'

export default function TermsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '44px', fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: '16px', color: '#cbd5e1', textAlign: 'center', margin: 0 }}>
          Effective Date: October 31, 2025
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <SectionComponent number="1" title="Acceptance of Terms" content="By accessing and using the Pinglo mobile application and website, you accept and agree to be bound by these Terms of Service." />
        <SectionComponent number="2" title="Changes to Terms" content="We may update these Terms from time to time. Continued use of the Service constitutes acceptance of modified Terms." />
        <SectionComponent number="3" title="License and Access" content="We grant you a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes." />
        <SectionComponent number="4" title="User Conduct" bullets={['Do not use the Service for illegal or harmful purposes.', 'Do not attempt to gain unauthorized access to the Service.', 'Do not reverse-engineer, decompile, or disassemble the Service.', 'Do not violate intellectual property rights.', 'Do not interfere with the operation of the Service.']} />
        <SectionComponent number="5" title="Intellectual Property" content="All content, features, and functionality of the Service are owned by Pinglo and are protected by intellectual property laws." />
        <SectionComponent number="6" title="User-Generated Content" content="You retain ownership of content you submit, but grant us a worldwide license to use it to provide and improve the Service." />
        <SectionComponent number="7" title="Disclaimers" content="THE SERVICE IS PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED." />
        <SectionComponent number="8" title="Limitation of Liability" content="TO THE MAXIMUM EXTENT PERMITTED BY LAW, PINGLO SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES." />
        <SectionComponent number="9" title="Indemnification" content="You agree to indemnify and hold harmless Pinglo from any claims arising from your use of the Service or violation of these Terms." />
        <SectionComponent number="10" title="Third-Party Services" content="The Service may integrate with third-party services. Your use of such services is governed by their terms and policies." />
        <SectionComponent number="11" title="Termination" content="We may terminate or suspend your access to the Service at any time for violations of these Terms or other unlawful conduct." />
        <SectionComponent number="12" title="Governing Law" content="These Terms are governed by the laws of the State of California, without regard to its conflict of law principles." />
        <SectionComponent number="13" title="Dispute Resolution" content="Any disputes shall be resolved through binding arbitration in San Francisco, California." />
        <SectionComponent number="14" title="Severability" content="If any provision of these Terms is found to be invalid, the remaining provisions shall continue in effect." />
        <SectionComponent number="15" title="Entire Agreement" content="These Terms, along with our Privacy Policy, constitute the entire agreement between you and Pinglo." />
        <SectionComponent number="16" title="Contact" bullets={['For questions: hello@pinglo.app']} />
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
