'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Login from './Login'

function page() {
	const { data: session } = useSession()
	const router = useRouter()

	return (
	<></>
	)
}

export default page
