/*
Navigation bar for website
*/
import Link from 'next/link';

export default function NavigationBar() {
	return (
		<nav className='px-10 py-7 animate-revealnav'>
			<ul className='float-right space-x-10 flex'>
				<li><Link href = '/'>Home</Link></li>
				<li><Link href = 'plan'>Plan</Link></li>
			</ul>
		</nav>
	)
}