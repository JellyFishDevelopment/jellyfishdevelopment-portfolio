
import '@radix-ui/themes/styles.css';
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "JellyFish dev Portfolio",
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {/* Componente de Estilização do shadcn */}
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
          >
              {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
