'use client'

import { signIn, useSession } from 'next-auth/react'
import Navbar from '../../components/navbar'

function Homepage() {
	const { data: session } = useSession()
	return (
		<>
			<div className='flex top-16 p-8 relative justify-start items-center flex-col text-center '>
				<h1 className='text-[25px] md:text-[40px] pb-5 '>Welcome to Savannah App</h1>
				<p className='max-w-[500px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime esse expedita eveniet explicabo at cumque! Laudantium minus quod aliquid repellendus facilis vel cupiditate saepe itaque illum, vero, voluptas distinctio ea.</p>

				{!session && (
					<button onClick={() => signIn('google')} className='text-white font-bold text-3xl bg-purple-500 animate-pulse border-[1px] rounded-lg p-5 mt-6'>
						Sign In to use Savannah App
					</button>
				)}
			</div>
		</>
	)
}

export default Homepage
