import './globals.css'
import type { Metadata } from 'next'
import ParticlesBackground from '@/components/ParticlesBackground'

export const metadata: Metadata = {
  title: 'Shihao Wang',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth gradient-bg">
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  )
}
