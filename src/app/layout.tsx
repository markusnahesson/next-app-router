"use client";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar></Navbar> */}
        {/* <div>Layout {state}</div> */}
        {/* <button onClick={() => setState(state + 1)}>Klik</button> */}
        {children}
      </body>
    </html>
  )
}
