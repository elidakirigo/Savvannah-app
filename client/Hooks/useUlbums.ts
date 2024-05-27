'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useUser } from './useUser'

export const useAlbums = () => {
	const [album, setAlbum] = useState([])

	useEffect(() => {
		const fetchAlbums = async () => {
			const { data: albums } = await axios.get(process.env.NEXT_PUBLIC_URL + '/albums')
			setAlbum(albums)
		}

		fetchAlbums()
	}, [])

	return album
}

export const useUserAlbum = () => {
	const albums = useAlbums()
	const user = useUser()

	const userIndex = user.map((user: { id: number }) => user.id)

	const UserAlbums = userIndex.map((data) => {
		return albums.filter((a: { userId: number }) => {
			if (data == a.userId) {
				return { data: { ...a } }
			}
		})
	})

	const allUserdata = user.map((data: { id: number; email: string; name: string }) => {
		const noOfAlbums = UserAlbums[data.id - 1]?.length
		const currentAlbums = UserAlbums[data.id - 1]
		return { ...data, noOfAlbums, currentAlbums }
	})

	return { UserAlbums, allUserdata }
}
