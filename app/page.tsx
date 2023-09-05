import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Penn Planner',
}

export default function HomePage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl'>
      <h1 className='text-6xl font-bold '><span className='text-sky-950'>Penn</span> <span className='text-red-900'>Planner</span></h1>
      <h2 className='text-4xl'>Academic Plan Assistant for Penn Students</h2>
    </main>
  )
}