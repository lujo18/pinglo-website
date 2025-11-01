'use client'

import { YStack, XStack, Text, Input, View } from 'tamagui'
import { useState } from 'react'
import ButtonA from '../ui/ButtonA'

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
    <YStack
      width="100%"
      backgroundColor="$background"
      paddingVertical={80}
      paddingHorizontal={20}
      alignItems="center"
      gap={32}
    >
      <YStack gap={16} alignItems="center" maxWidth={720}>
        <Text fontSize={14} fontWeight="600" color="$accentPrimary" textTransform="uppercase">
          Early Access
        </Text>
        <Text fontSize={44} fontWeight="800" textAlign="center" color="$textPrimary">
          Join the Waitlist
        </Text>
        <Text fontSize={18} textAlign="center" color="$textSecondary" lineHeight={28}>
          Be the first to know when Pinglo launches. Get instant access to download the app when it's ready.
        </Text>
      </YStack>

      <YStack
        width="100%"
        maxWidth={500}
        gap={16}
        padding={32}
        backgroundColor="$color2"
        borderRadius={16}
        borderWidth={2}
        borderColor="$accentSecondary"
      >
        {submitted ? (
          <YStack gap={12} alignItems="center" padding={20}>
            <Text fontSize={28} color="$successPrimary">
              ✓
            </Text>
            <Text fontSize={20} fontWeight="700" textAlign="center" color="$textPrimary">
              Thanks for signing up!
            </Text>
            <Text fontSize={14} textAlign="center" color="$textSecondary">
              Check your email for updates and exclusive perks.
            </Text>
          </YStack>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <YStack gap={16}>
              <XStack
                gap={8}
                alignItems="center"
                borderWidth={2}
                borderColor="$accentSecondary"
                borderRadius={12}
                paddingHorizontal={12}
                paddingVertical={4}
                backgroundColor="$background"
                focusWithinStyle={{
                  borderColor: '$accentPrimary',
                }}
              >
                <Text fontSize={16}>📧</Text>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    color: '#0f172a',
                    fontSize: 16,
                    fontFamily: 'inherit',
                    padding: '12px 0',
                  }}
                  disabled={loading}
                />
              </XStack>

              {error && (
                <Text fontSize={14} color="$errorPrimary">
                  ✗ {error}
                </Text>
              )}

              <button
                type="submit"
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
            </YStack>
          </form>
        )}
      </YStack>

      <Text fontSize={13} color="$textSecondary" textAlign="center" maxWidth={500}>
        We respect your privacy. No spam, ever. Unsubscribe at any time.
      </Text>
    </YStack>
  )
}
