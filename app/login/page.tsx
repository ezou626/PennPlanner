"use client";
import React from 'react';
import NavigationBar from "../../components/navigation";
import Credit from "../../components/credit";
import Button from "../../components/button";

export default function LoginPage() {
  return (<>
    <NavigationBar />
      <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl'>
        <section className="login text-center block">
          <div className='text-center block'>
            <h1 className='text-4xl p-10'>Sign In</h1>
            <Button color='green' onClick={() => {}}>
                Sign In
            </Button>
            <Button color='blue' onClick={() => {}}>
                Create an Account
            </Button>
          </div>
        </section>
      </main>
    <Credit />
  </>);
}