import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Profit Academy | Sultan Visual',
  description: 'Learn AI Skills and Monetization with Abiodun Sultan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#08050D] text-white antialiased">{children}</body>
    </html>
  )
}
