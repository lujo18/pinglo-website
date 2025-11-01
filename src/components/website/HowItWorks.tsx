'use client'

import { YStack, XStack, Text, View } from 'tamagui'
import { Phone, Smile, BarChart3 } from 'lucide-react'

interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Pick an Interaction Type',
    description: 'Was it a message, call, or in-person meeting? Choose the type that matches your connection.',
    icon: <Phone size={44} color="#a78bfa" />,
  },
  {
    number: 2,
    title: 'Rate the Sentiment',
    description: 'Log how the interaction went—Good, Neutral, or Bad. Instant visual feedback.',
    icon: <Smile size={44} color="#a78bfa" />,
  },
  {
    number: 3,
    title: 'Get Scored & See Insights',
    description: 'Your contact gets a health score. Reconnect with people before relationships fade.',
    icon: <BarChart3 size={44} color="#a78bfa" />,
  },
]

export default function HowItWorks() {
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
          How It Works
        </Text>
        <Text fontSize={44} fontWeight="800" textAlign="center" color="$textPrimary">
          Three Steps to Better Relationships
        </Text>
      </YStack>

      <YStack
        width="100%"
        maxWidth={1000}
        gap={48}
        alignItems="stretch"
      >
        {steps.map((step, index, arr) => (
          <YStack key={index} gap={24}>
            <XStack gap={32} alignItems="flex-start" width="100%">
              {/* Step Number Circle */}
              <View
                width={60}
                height={60}
                borderRadius={30}
                backgroundColor="$accentPrimary"
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
              >
                <Text fontSize={28} fontWeight="700" color="$white">
                  {step.number}
                </Text>
              </View>

              {/* Content */}
              <YStack gap={12} flex={1} justifyContent="center">
                <Text fontSize={24} fontWeight="700" color="$textPrimary">
                  {step.title}
                </Text>
                <Text fontSize={16} color="$textSecondary" lineHeight={24} maxWidth={500}>
                  {step.description}
                </Text>
              </YStack>

              {/* Icon */}
              <View
                width={80}
                height={80}
                borderRadius={20}
                backgroundColor="$color2"
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
              >
                {step.icon}
              </View>
            </XStack>

            {/* Connector Line (not on last) */}
            {index < arr.length - 1 && (
              <View
                width={2}
                height={60}
                backgroundColor="$accentSecondary"
                marginLeft={30}
              />
            )}
          </YStack>
        ))}
      </YStack>
    </YStack>
  )
}