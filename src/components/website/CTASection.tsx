'use client'

export default function CTASection() {
  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', paddingTop: 60, paddingBottom: 60, paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: 'center', color: '#f1f5f9', maxWidth: 600, margin: 0 }}>
          Ready to Transform Your Relationships?
        </h2>
        <p style={{ fontSize: 16, color: '#cbd5e1', textAlign: 'center', maxWidth: 500, margin: 0 }}>
          Download Pinglo today and start logging interactions that matter.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => alert('Download iOS')} style={{ padding: '12px 28px', fontSize: 14, fontWeight: 600, backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
          Download on App Store
        </button>
      </div>
    </div>
  )
}
