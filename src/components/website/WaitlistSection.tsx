'use client'

import { useState } from 'react'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!email) {
      setError('Please enter your email')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }

    setLoading(true)

    try {
      // Here we'd call addToWaitlist from Firebase
      // For now, just show success
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', paddingTop: 80, paddingBottom: 80, paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', maxWidth: 720 }}>
        <span style={{ fontSize: 14, fontWeight: '600', color: '#a78bfa', textTransform: 'uppercase' }}>
          Early Access
        </span>
        <h2 style={{ fontSize: 44, fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>
          Join the Waitlist
        </h2>
        <p style={{ fontSize: 18, textAlign: 'center', color: '#cbd5e1', lineHeight: '28px', margin: 0 }}>
          Be the first to know when Pinglo launches. Get instant access to download the app when it's ready.
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 16, padding: 32, backgroundColor: '#1e293b', borderRadius: 16, border: '2px solid #6d28d9' }}>
        {submitted ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', padding: 20 }}>
            <span style={{ fontSize: 28, color: '#4ade80' }}></span>
            <h3 style={{ fontSize: 20, fontWeight: '700', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>
              Thanks for signing up!
            </h3>
            <p style={{ fontSize: 14, textAlign: 'center', color: '#cbd5e1', margin: 0 }}>
              Check your email for updates and exclusive perks.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', border: '2px solid #6d28d9', borderRadius: 12, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, backgroundColor: '#0f172a' }}>
                <span style={{ fontSize: 16 }}></span>
                <input
                  type=\"email\"
                  placeholder=\"Enter your email\"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    color: '#f1f5f9',
                    fontSize: 16,
                    fontFamily: 'inherit',
                    padding: '12px 0',
                  }}
                  disabled={loading}
                />
              </div>

              {error && (
                <p style={{ fontSize: 14, color: '#ff6b6b', margin: 0 }}>
                   {error}
                </p>
              )}

              <button
                type=\"submit\"
                disabled={loading}
                onClick={() => handleSubmit({ preventDefault: () => {} } as any)}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  fontSize: 16,
                  fontWeight: 700,
                  backgroundColor: '#a78bfa',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 12,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = '#8b5cf6'
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = '#a78bfa'
                }}
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        )}
      </div>

      <p style={{ fontSize: 13, color: '#cbd5e1', textAlign: 'center', maxWidth: 500, margin: 0 }}>
        We respect your privacy. No spam, ever. Unsubscribe at any time.
      </p>
    </div>
  )
}
