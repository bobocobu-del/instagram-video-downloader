import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Video İndirici',
  description: 'Instagram videolarını hızlıca indirin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SENIN_KODUN"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
