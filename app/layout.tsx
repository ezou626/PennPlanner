import React from 'react';
import { Roboto } from 'next/font/google';

const roboto300 = Roboto( {weight: "300"} );

export default function RootLayout( { children }: { children: React.ReactNode } ) {
  return (
    <html lang="en" className={roboto300.className}>
      <body>
        {children}
      </body>
    </html>
  )
}