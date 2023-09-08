import React from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/provider';

const roboto300 = Roboto({
  weight: "300", 
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto300.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}