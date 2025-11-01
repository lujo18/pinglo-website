'use client'

import type { ReactNode } from 'react'
import { TamaguiProvider, YStack, XStack, Text } from 'tamagui'
import { tamaguiConfig as config } from '@/tamagui-theme'

type TamaguiRootProps = {
  children: ReactNode
}

export default function TamaguiRoot({ children }: TamaguiRootProps) {
  return (
    <TamaguiProvider config={config as any} defaultTheme="dark">
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <SiteHeader />
        <main style={{ flex: 1 }}>{children}</main>
        <SiteFooter />
      </div>
    </TamaguiProvider>
  )
}

function SiteHeader() {
  return (
    <header style={{ 
      padding: '16px 40px', 
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      backgroundColor: '#0f172a',
      zIndex: 50,
      backdropFilter: 'blur(10px)',
    }}>
      <XStack ai="center" jc="space-between" gap={64}>
        {/* Logo */}
        <XStack ai="center" gap={12}>
          <img 
            src="/assets/icons/splash-icon-light.png" 
            alt="Pinglo Logo"
            style={{ width: 28, height: 28 }}
          />
          <Text fontSize={20} fontWeight={800} color="#a78bfa">
            Pinglo
          </Text>
        </XStack>

        {/* Navigation */}
        <XStack gap={64} ai="center" display={{ '@media (max-width: 768px)': 'none' }}>
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#how-it-works">How It Works</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/legal/privacy">Privacy</NavLink>
          <NavLink href="/legal/terms">Terms</NavLink>
        </XStack>

        {/* Removed Download button - now only in Hero and CTA sections */}
      </XStack>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontSize: 16,
        fontWeight: 500,
        color: '#cbd5e1',
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#a78bfa')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
    >
      {children}
    </a>
  )
}

function SiteFooter() {
  return (
    <footer style={{ 
      padding: '48px 40px', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundColor: '#0a0f1e',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: 40 }}>
          {/* Column 1: About */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#f1f5f9' }}>Pinglo</h3>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6 }}>
              Keep the people who matter close. A simple way to stay in touch—without the clutter.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#f1f5f9' }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, gap: 8, display: 'flex', flexDirection: 'column' }}>
              <li><FooterLink href="/#features">Features</FooterLink></li>
              <li><FooterLink href="/#how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="#">Download</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#f1f5f9' }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, gap: 8, display: 'flex', flexDirection: 'column' }}>
              <li><FooterLink href="/legal/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/legal/terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontSize: 14, color: '#94a3b8', margin: 0, marginBottom: 8 }}>
              © 2025 Pinglo. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>
              Available on iOS and Android — download and start reconnecting today.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 14, color: '#a78bfa', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ fontSize: 14, color: '#a78bfa', textDecoration: 'none' }}>GitHub</a>
            <a href="#" style={{ fontSize: 14, color: '#a78bfa', textDecoration: 'none' }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontSize: 14,
        color: '#94a3b8',
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#a78bfa')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
    >
      {children}
    </a>
  )
}
