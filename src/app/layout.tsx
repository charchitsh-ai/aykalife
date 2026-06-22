import type { Metadata } from 'next'
import './globals.css'
import AnimationObserver from '@/components/AnimationObserver'
import WhatsAppFAB from '@/components/WhatsAppFAB'

import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ayka Alliance | Healthcare Franchise Excellence',
  description: 'Partner with AYKA Care and lead the future of healthcare excellence. Join 2,500+ experts and 40+ partner clinics in making expert healthcare accessible, available, and affordable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EMDR91N9DM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EMDR91N9DM');
          `}
        </Script>
        
        <AnimationObserver />
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  )
}
