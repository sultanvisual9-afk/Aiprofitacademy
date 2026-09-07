import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Profit Academy | Abiodun Sultan',
  description: 'Learn AI Skills and Monetization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#08050D]">{children}</body>
    </html>
  )
}
