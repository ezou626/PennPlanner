import React from "react";
import { Metadata } from 'next';
import Credit from '../../components/credit';
import NavigationBar from '../../components/navigation';
import Dashboard from '../../components/dashboard';

export const metadata: Metadata = {
  title: 'Penn Planner',
}

export default async function PlanPage() {
  return (
    <>
      <NavigationBar />
      <main className='px-10 overflow-y-clip py-10'>
        <Dashboard></Dashboard>
      </main>
      <Credit />
    </>
  )
}