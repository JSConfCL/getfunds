import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JavaScript Chile',
  description: 'Un proyecto usando el template de JavaScript Chile',
}

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
