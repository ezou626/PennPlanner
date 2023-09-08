'use client';
/*
Navigation bar for website
*/
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function NavigationBar() {
	const {data: session} = useSession();
	if (session != null) {
    const name: string = session.user!.name!;
		return (
			<nav className='px-10 py-7 animate-revealnav'>
        		<p className='float-left'>Logged in as {session.user!.name}</p>
				<ul className='float-right space-x-10 flex'>
					<li><Link href = '/'>Home</Link></li>
					<li><Link href = 'plan'>Plan</Link></li>
					<li><button onClick = {() => signOut({callbackUrl: '/'})}>Sign Out</button></li>
				</ul>
			</nav>
		)
	}

	return (
		<nav className='px-10 py-7 animate-revealnav'>
      <p></p>
			<ul className='float-right space-x-10 flex'>
				<li><Link href = '/'>Home</Link></li>
				<li><Link href = 'plan'>Plan</Link></li>
			</ul>
		</nav>
	)
}