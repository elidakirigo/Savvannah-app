'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAlbums } from './useUlbums'
import { useAppSelector } from '@/app/store/hooks'

/**
 * Fetches the photos from the api
 * @returns an array of all photos
 */

export const useFetchPhotos = () => {
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

/**
 * fetches data from redux store and sends to home
 * @returns  photos that were fetched from redux
 */

export const usePhotos = () => {
	const photoData = useAppSelector((state) => state.photos)
	const photo = useFetchPhotos()

	if (photoData.photos) return photoData.photos

	return photo
}
/**
 * Organizes the photos according to same albums
 * @returns an array of organized objects with photos that share the same album
 */
export const useAlbumPhotos = () => {
	const album = useAlbums()
	const photos = usePhotos()
	const AlbumIndex = album.map((album: { id: number }) => album.id)

	const Albums = AlbumIndex.map((data) => {
		return photos.filter((albumdata: { albumId: number }) => {
			if (data == albumdata.albumId) {
				return { data: { ...albumdata } }
			}
		})
	})

	return Albums
}
