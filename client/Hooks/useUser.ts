'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify' 

/**
 * Fetch user data from api returning all users
 * @returns an array of all users
 */

export const useUser = () => {
	const [user, setUser] = useState([])

	useEffect(() => {
		
		const fetchUser = async () => {
			const { data: users } = await toast.promise(
				axios.get(process.env.NEXT_PUBLIC_URL + '/users'),
				{
					pending: 'loading users ',
					success: 'user loaded successfully',
					error: 'No user found ',
				},
				{
					position: 'top-center',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
					transition: Bounce,
				},
			)
			setUser(users)
		}

		fetchUser()
	}, [])

	return user
}
