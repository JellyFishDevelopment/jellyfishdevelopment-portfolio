import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const siteId = Number(process.env.HORJAR_ID)
const hotjarVersion = Number(process.env.HORJAR_V)

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${siteId},hjsv:${hotjarVersion}};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}}
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
