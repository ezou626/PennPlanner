'use client';
import React from 'react';
import NavigationBar from '../../components/navigation';
import Credit from '../../components/credit';
import Link from 'next/link';

export default function LoginPage() {
  return (<>
    <NavigationBar />
      <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl center'>
        <section className='text-center flex place-content-center'>
          <div className='border border-black rounded px-10 py-5 max-w-2xl'>
            <h1 className='text-4xl p-5'>Sign In</h1>
            <form className='space-y-2 py-4'>
              <input className='focus:outline-none focus:ring-0 border border-black p-2 rounded' type='text' id='username' name='username' placeholder='Username' /><br />
              <input className='focus:outline-none focus:ring-0 border border-black p-2 rounded' type='password' id='password' name='password' placeholder='Password' /><br />
              <input className='text-md rounded p-2 w-full text-white font-bold bg-blue-500 hover:bg-blue-700' type='submit' value="Log In"/>
            </form>
            <Link className='text-md p-2' href='createAccount'>Create an Account</Link>
          </div>
        </section>
      </main>
    <Credit />
  </>);
}