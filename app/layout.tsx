import './globals.css'
import type { Metadata } from 'next'

import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Car Store',
  description: 'Descubra os melhores carros para você',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
