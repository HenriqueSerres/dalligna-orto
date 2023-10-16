import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Dall'Igna Ortodontia",
  description: 'Ortodontia Sílvia e Carine Dall Igna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-blue-200'>{children}</body>
    </html>
  )
}
