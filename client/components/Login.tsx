'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
	return (
		<div className=' bg-purple-500 h-screen flex flex-col items-center justify-center text-center'>
			{/* <Image src='https://links.papareact.com/2i6' alt='logo' width='300' height='300' /> */}
			<button onClick={() => signIn('google')} className='text-white font-bold text-3xl animate-pulse border-[1px] rounded-lg p-5'>
				Sign In to use Savannah App
			</button>
		</div>
	)
}

export default Login 