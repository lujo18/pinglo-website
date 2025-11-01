'use client'

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
    icon: <Phone size={44} color=\"#a78bfa\" />,
  },
  {
    number: 2,
    title: 'Rate the Sentiment',
    description: 'Log how the interaction wentGood, Neutral, or Bad. Instant visual feedback.',
    icon: <Smile size={44} color=\"#a78bfa\" />,
  },
  {
    number: 3,
    title: 'Get Scored & See Insights',
    description: 'Your contact gets a health score. Reconnect with people before relationships fade.',
    icon: <BarChart3 size={44} color=\"#a78bfa\" />,
  },
]

export default function HowItWorks() {
  return (
    <div style={{ width: '100%', backgroundColor: '#0f172a', paddingTop: 80, paddingBottom: 80, paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', maxWidth: 720 }}>
        <span style={{ fontSize: 14, fontWeight: '600', color: '#a78bfa', textTransform: 'uppercase' }}>
          How It Works
        </span>
        <h2 style={{ fontSize: 44, fontWeight: '800', textAlign: 'center', color: '#f1f5f9', margin: 0 }}>
          Three Steps to Better Relationships
        </h2>
      </div>

      <div style={{ width: '100%', maxWidth: 1000, display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'stretch' }}>
        {steps.map((step, index, arr) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', width: '100%' }}>
              {/* Step Number Circle */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: '#a78bfa',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 28, fontWeight: '700', color: '#fff' }}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center' }}>
                <h3 style={{ fontSize: 24, fontWeight: '700', color: '#f1f5f9', margin: 0 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 16, color: '#cbd5e1', lineHeight: '24px', maxWidth: 500, margin: 0 }}>
                  {step.description}
                </p>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  backgroundColor: '#1e293b',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>
            </div>

            {/* Connector Line (not on last) */}
            {index < arr.length - 1 && (
              <div
                style={{
                  width: 2,
                  height: 60,
                  backgroundColor: '#6d28d9',
                  marginLeft: 30,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
