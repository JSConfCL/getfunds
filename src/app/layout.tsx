import './globals.css'
import { Inter } from 'next/font/google'

import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
