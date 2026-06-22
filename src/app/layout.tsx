import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
