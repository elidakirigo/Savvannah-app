'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
	return (
		<div className='  h-screen flex flex-col items-center justify-center text-center'>
			<button onClick={() => signIn('google')} className='text-white font-bold text-3xl bg-purple-500 animate-pulse border-[1px] rounded-lg p-5'>
				Sign In to use Savannah App
			</button>
		</div>
	)
}

export default Login
