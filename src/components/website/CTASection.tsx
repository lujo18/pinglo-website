'use client'

import { YStack, XStack, Text } from 'tamagui'
import Link from 'next/link'

export default function CTASection() {
  return (
    <YStack
      width="100%"
      backgroundColor="$color1"
      paddingVertical={60}
      paddingHorizontal={20}
      alignItems="center"
      gap={24}
    >
      <YStack gap={12} alignItems="center">
        <Text fontSize={32} fontWeight="800" textAlign="center" color="$textPrimary" maxWidth={600}>
          Ready to Transform Your Relationships?
        </Text>
        <Text fontSize={16} color="$textSecondary" textAlign="center" maxWidth={500}>
          Download Pinglo today and start logging interactions that matter.
        </Text>
      </YStack>

      <XStack gap={12} alignItems="center" justifyContent="center" flexWrap="wrap">
        <button
          onClick={() => alert('Download iOS')}
          style={{
            padding: '12px 28px',
            fontSize: 14,
            fontWeight: 600,
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Download on App Store
        </button>
      </XStack>
    </YStack>
  )
}
