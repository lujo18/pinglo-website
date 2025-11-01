'use client'

import { YStack, XStack, Text, View } from 'tamagui'
import { Target, Clock, Heart, Sparkles } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: string
}

const features: Feature[] = [
  {
    icon: <Target size={40} color="#a78bfa" />,
    title: 'Stay intentional',
    description: 'Make relationships a priority with small, consistent efforts that actually stick.',
    highlight: 'Consistency matters',
  },
  {
    icon: <Clock size={40} color="#a78bfa" />,
    title: 'Save time',
    description: 'Cut busywork and spend more meaningful time with the people who matter.',
    highlight: 'More meaningful time',
  },
  {
    icon: <Heart size={40} color="#a78bfa" />,
    title: 'Feel confident',
    description: 'A calm, focused experience helps you reach out with clarity and warmth.',
    highlight: 'No overwhelm',
  },
  {
    icon: <Sparkles size={40} color="#a78bfa" />,
    title: 'Designed for people',
    description: 'Built to support genuine connection instead of noise and distractions.',
    highlight: 'Human-centered',
  },
]

export default function FeaturesShowcase() {
  return (
    <YStack
      width="100%"
      backgroundColor="$color1"
      paddingVertical={80}
      paddingHorizontal={20}
      gap={60}
      alignItems="center"
    >
      <YStack gap={16} alignItems="center" maxWidth={720}>
        <Text fontSize={14} fontWeight="600" color="$accentPrimary" textTransform="uppercase">
          Benefits
        </Text>
        <Text fontSize={44} fontWeight="800" textAlign="center" color="$textPrimary">
          A cleaner way to stay in touch
        </Text>
        <Text fontSize={18} textAlign="center" color="$textSecondary">
          Designed for busy lives.
        </Text>
      </YStack>

      <YStack
        width="100%"
        maxWidth={1200}
        gap={24}
        display="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </YStack>
    </YStack>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <YStack
      backgroundColor="$color2"
      borderRadius={16}
      padding={32}
      gap={16}
      borderWidth={2}
      borderColor="$accentSecondary"
      hoverStyle={{
        borderColor: '$accentPrimary',
        backgroundColor: '$color3',
      }}
      cursor="pointer"
      transition="all 0.3s"
    >
      <Text fontSize={40}>{feature.icon}</Text>
      <YStack gap={8}>
        <Text fontSize={20} fontWeight="700" color="$textPrimary">
          {feature.title}
        </Text>
        <Text fontSize={16} color="$textSecondary" lineHeight={24}>
          {feature.description}
        </Text>
        {feature.highlight && (
          <XStack marginTop={12} gap={8} alignItems="center">
            <View width={6} height={6} borderRadius={3} backgroundColor="$accentPrimary" />
            <Text fontSize={12} fontWeight="600" color="$accentPrimary" textTransform="uppercase">
              {feature.highlight}
            </Text>
          </XStack>
        )}
      </YStack>
    </YStack>
  )
}
