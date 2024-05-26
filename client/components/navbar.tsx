'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	const { data: session } = useSession() 

	return (
		<div className=' w-full bg-purple-600 text-white p-3  flex items-center justify-start'>
			{!session ? (
				<div>
					<Link href={'/'} className=' text-white p-3 mx-auto'>
						Savannah App
					</Link>
					<Link href={'/login'} className=' text-white p-3 mx-auto'>
						signIn
					</Link>
				</div>
			) : (
				<>
					<h1>{session.user?.name} </h1>
					<Image alt='user' src={session.user?.image!} width={30} height={30} unoptimized={true} className='rounded-full ml-1' />
					<div>
						<Link href={'/home'} className=' text-white p-3 mx-auto'>
							Home
						</Link>
						<Link href={'/home'} className=' text-white p-3 mx-auto'>
							User
						</Link>
						<Link href={'/home'} className=' text-white p-3 mx-auto'>
							Album
						</Link>
						<Link href={'/home'} className=' text-white p-3 mx-auto'>
							Photos
						</Link>
						<button onClick={() => signOut()}>signOut</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Navbar
