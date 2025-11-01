'use client'

import { YStack, XStack, Text } from 'tamagui'

export default function Hero() {
  return (
    <YStack
      width="100%"
      backgroundColor="$color1"
      paddingVertical={80}
      paddingHorizontal={20}
      alignItems="center"
      gap={32}
      minHeight="100vh"
      justifyContent="center"
    >
      <YStack gap={20} alignItems="center" maxWidth={720}>
        <Text
          fontSize={56}
          fontWeight="800"
          textAlign="center"
          lineHeight={64}
          color="$textPrimary"
        >
          Keep the people who matter close.
        </Text>
        <Text
          fontSize={20}
          textAlign="center"
          color="$textSecondary"
          lineHeight={28}
        >
          A simple way to stay in touch—without the clutter.
        </Text>
      </YStack>

      <XStack gap={12} alignItems="center" flexWrap="wrap" justifyContent="center">
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
      </XStack>

      <YStack
        marginTop={40}
        width="100%"
        maxWidth={600}
        height={400}
        backgroundColor="$color2"
        borderRadius={20}
        opacity={0.5}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={18} color="$textSecondary" textAlign="center">
          [App Preview Image]
        </Text>
      </YStack>
    </YStack>
  )
}
