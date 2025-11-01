'use client'

import React from 'react'
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
    <div style={{ width: '100%', backgroundColor: '#0f172a', paddingTop: 80, paddingBottom: 80, paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', maxWidth: 720 }}>
        <span style={{ fontSize: 14, fontWeight: '600', color: '#a78bfa', textTransform: 'uppercase' }}>
          Benefits
        </span>
        <h2 style={{ fontSize: 44, fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>
          A cleaner way to stay in touch
        </h2>
        <p style={{ fontSize: 18, textAlign: 'center', color: '#cbd5e1', margin: 0 }}>
          Designed for busy lives.
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: 1200, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <div
      style={{
        backgroundColor: isHovered ? '#334155' : '#1e293b',
        borderRadius: 16,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: `2px solid ${isHovered ? '#a78bfa' : '#6d28d9'}`,
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ fontSize: 40 }}>{feature.icon}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{ fontSize: 20, fontWeight: '700', color: '#f1f5f9', margin: 0 }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: 16, color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
          {feature.description}
        </p>
        {feature.highlight && (
          <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#a78bfa' }} />
            <span style={{ fontSize: 12, fontWeight: '600', color: '#a78bfa', textTransform: 'uppercase' }}>
              {feature.highlight}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
