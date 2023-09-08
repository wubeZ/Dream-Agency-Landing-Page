import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dream Agency',
  description: 'landing page for agencies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-dark-background dark:text-dark-textColor-100 transition-colors ease-linear`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
