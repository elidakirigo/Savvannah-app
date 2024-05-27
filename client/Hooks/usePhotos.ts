'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useUser } from './useUser'
import { useAlbums, useUserAlbum } from './useUlbums'

export const usePhotos = () => {
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		const fetchphotos = async () => {
			const { data: photos } = await axios.get(process.env.NEXT_PUBLIC_URL + '/photos')
			setPhotos(photos)
		}

		fetchphotos()
	}, [])

	return photos
}

export const useAlbumPhotos = () => {
	const album = useAlbums()
	const photos = usePhotos()
	const AlbumIndex = album.map((album: { id: number }) => album.id)

	const Albums = AlbumIndex.map((data) => {
		return photos.filter((a: { albumId: number }) => {
			if (data == a.albumId) {
				return { data: { ...a } }
			}
		})
	})

	return Albums
}
