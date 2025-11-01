'use client'

export default function Hero() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#0f172a',
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', maxWidth: 720 }}>
        <h1
          style={{
            fontSize: 56,
            fontWeight: '800',
            textAlign: 'center',
            lineHeight: '64px',
            color: '#f1f5f9',
            margin: 0,
          }}
        >
          Keep the people who matter close.
        </h1>
        <p
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#cbd5e1',
            lineHeight: '28px',
            margin: 0,
          }}
        >
          A simple way to stay in touchwithout the clutter.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => alert('Download iOS')}
          style={{
            padding: '12px 32px',
            fontSize: 16,
            fontWeight: 600,
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Download on App Store
        </button>
      </div>

      <div
        style={{
          marginTop: 40,
          width: '100%',
          maxWidth: 600,
          height: 400,
          backgroundColor: '#1e293b',
          borderRadius: 20,
          opacity: 0.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: 18, color: '#cbd5e1', textAlign: 'center', margin: 0 }}>
          [App Preview Image]
        </p>
      </div>
    </div>
  )
}
