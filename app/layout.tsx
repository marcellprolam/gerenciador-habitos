import type { Metadata } from 'next'
import { Dosis, Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Meta diária - Gerenciador de hábitos',
  description: 'Gerencia seus hábitos na palma de sua mão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${dosis.variable} ${inter.variable} 
          flex items-center flex-col mt-10 bg-neutral-900
        `}
      >
        <Image
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="Logo habitos"
        />
        <Link href="https://souzamarcell.github.io/Portfolio">
          @MarcellSouza
        </Link>
        {children}
      </body>
    </html>
  )
}
