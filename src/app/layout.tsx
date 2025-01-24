import { StandardAnimation } from '@/components/ui/animation/standard'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = {
  title: 'cekrause',
  description: 'A simple portfolio for a simple person'
}

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <html lang='en'>
    <body className={GeistMono.className}>
      <StandardAnimation>{children}</StandardAnimation>
      <Analytics />
    </body>
  </html>
)

export default Layout
