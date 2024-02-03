import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Hotjar from '@hotjar/browser'

const siteId = Number(process.env.HORJAR_ID)
const hotjarVersion = Number(process.env.HORJAR_V)
const hotjarDebug = Boolean(process.env.HOTJAR_D)

// Initializing with `debug` option:
Hotjar.init(siteId, hotjarVersion, {
  debug: hotjarDebug
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JellyFish Development',
  description: 'Nosso site de portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
