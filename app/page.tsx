import React from "react";
import { Metadata } from 'next';
import Credit from '../components/credit';
import Login from '../components/navigation'

export const metadata: Metadata = {
  title: 'Penn Planner',
}

export default async function HomePage() {
  return (
    <>
      <Login />
      <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl'>
        <h1 className='text-6xl font-bold '><span className='text-sky-950'>Penn</span> <span className='text-red-900'>Planner</span></h1>
        <h2 className='text-4xl'>An (Unofficial) Academic Planner for Penn Students</h2>
      </main>
      <Credit />
    </>
  )
}