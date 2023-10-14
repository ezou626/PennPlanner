'use client';
/*
Navigation bar for website
*/
import Link from 'next/link';

export default function NavigationBar() {
		// return (
		// 	<nav className='px-10 py-7 animate-revealnav'>
        // 		<p className='float-left'>Logged in as {null}</p>
		// 		<ul className='float-right space-x-10 flex'>
		// 			<li><Link href = '/'>Home</Link></li>
		// 			<li><Link href = 'plan'>Plan</Link></li>
		// 			<li><button onClick = {() => {}}>Sign Out</button></li>
		// 		</ul>
		// 	</nav>
		// )

	return <nav className='px-10 py-7 animate-revealnav'>
			<ul className='float-right space-x-10 flex'>
				<li><Link href = '/'>Home</Link></li>
				<li><Link href = 'plan'>Plan</Link></li>
				<li><Link href = 'login'>Login</Link></li>
			</ul>
		</nav>;
}