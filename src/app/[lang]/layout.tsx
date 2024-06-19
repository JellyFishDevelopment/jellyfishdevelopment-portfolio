import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/footer";
import Nav from "@/components/nav";
import { i18n, Locale } from "@/config/i18n.config";

const siteId = Number(process.env.HORJAR_ID);
const hotjarVersion = Number(process.env.HORJAR_V);
const google_tag = process.env.GOOGLE_TAG;

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  const language = i18n.locales.map((lang) => ({ lang }));
  return language;
}

export const metadata: Metadata = {
  title: "JellyFish Development",
  description: "Nosso site de portfólio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${siteId},hjsv:${hotjarVersion}};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${google_tag}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${google_tag}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Nav params={{ lang: params.lang as Locale }} />
        {children}
        <Analytics />
        <div className="bg-black">
          <Footer params={{ lang: params.lang as Locale }} />
        </div>
      </body>
    </html>
  );
}
