const config = {
  titleTemplate: '%s | Pinglo',
  defaultTitle: 'Pinglo - Stay Connected with the People Who Matter Most',
  description: 'Pinglo helps busy people stay connected, thoughtful, and organized—download to build stronger relationships.',
  canonical: 'https://pinglo.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pinglo.app',
    siteName: 'Pinglo',
    title: 'Pinglo - Stay Connected with the People Who Matter Most',
    description: 'Pinglo helps busy people stay connected, thoughtful, and organized—download to build stronger relationships.',
    images: [
      {
        url: 'https://pinglo.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pinglo - Keep the people who matter close',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@pingloapp',
    site: '@pingloapp',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#0f172a',
    },
  ],
}

export default config as any
