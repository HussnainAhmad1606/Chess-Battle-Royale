import '@/css/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create an Account - Chess Battle Royale',
  description: 'Play Chess Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {children}
    </>

  )
}
