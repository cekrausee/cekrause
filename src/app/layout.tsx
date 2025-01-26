import { StandardAnimation } from '@/components/ui/animation/standard'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import { ReactNode } from 'react'
import './index.css'

export const metadata: Metadata = {
  title: 'cekrause',
  description: 'A simple portfolio for a simple person'
}

type LayoutProps = { children: ReactNode }

const f = Source_Code_Pro({ subsets: ['latin'] })

const Layout = ({ children }: LayoutProps) => (
  <html lang='en'>
    <body className={f.className}>
      {/* <body className={GeistMono.className}> */}
      <StandardAnimation>{children}</StandardAnimation>
      <Analytics />
    </body>
  </html>
)

export default Layout
