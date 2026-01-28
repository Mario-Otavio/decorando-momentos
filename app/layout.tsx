import React from "react"
import type { Metadata, Viewport } from 'next'
import { Nunito, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito'
});

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: '--font-fredoka'
});

export const metadata: Metadata = {
  title: 'Decorando Momentos | Decoração de Festas Infantis',
  description: 'Transforme a festa do seu filho em um momento mágico! Aluguel de decorações temáticas para festas infantis e aniversários. Homem-Aranha, Mundo Bita, Carros e muito mais.',
  keywords: 'decoração festa infantil, aluguel decoração aniversário, festa temática, decoração Homem-Aranha, decoração Mundo Bita, festa infantil',
}

export const viewport: Viewport = {
  themeColor: '#ee52b1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${fredoka.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
