'use client'

import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import Login from '../landingPage/Login'
import axios from 'axios'

const page = () => {
	const { data: session } = useSession()

	useEffect(() => {
		axios.get(process.env.NEXT_PUBLIC_URL + '/photos').then((response) => console.log(response))
	}, [])

	if (!session) return <Login />

	return <>home</>
}

export default page
