import type { ReactNode } from 'react'
import './globals.css'
import TamaguiRoot from '../components/providers/TamaguiRoot'

export const metadata = {
  title: 'Pinglo - Stay Connected with the People Who Matter Most',
  description: 'Pinglo helps busy people stay connected, thoughtful, and organized—download to build stronger relationships.',
  icons: {
    icon: '/assets/icons/splash-icon-light.png',
    apple: '/assets/icons/splash-icon-light.png',
  },
  openGraph: {
    title: 'Pinglo - Stay Connected with the People Who Matter Most',
    description: 'Keep the people who matter close. A simple way to stay in touch—without the clutter.',
    url: 'https://pinglo.app',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pinglo',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinglo - Stay Connected with the People Who Matter Most',
    description: 'Keep the people who matter close. A simple way to stay in touch—without the clutter.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pinglo.app" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <TamaguiRoot>{children}</TamaguiRoot>
      </body>
    </html>
  )
}
