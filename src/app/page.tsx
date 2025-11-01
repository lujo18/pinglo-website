'use client'

import React from 'react'
import { YStack } from 'tamagui'
import Hero from '../components/website/Hero'
import FeaturesShowcase from '../components/website/FeaturesShowcase'
import HowItWorks from '../components/website/HowItWorks'
import WaitlistSection from '../components/website/WaitlistSection'
import CTASection from '../components/website/CTASection'

export default function HomePage() {
  return (
    <YStack width="100%" gap={0}>
      <Hero />
      <FeaturesShowcase />
      <HowItWorks />
      {/* <WaitlistSection /> */}
      <CTASection />
    </YStack>
  )
}
