import { usefetchuser, useUser } from '../Hooks/useUser'
import { useFetchAlbums, useAlbums, useUserAlbum } from '../Hooks/useUlbums'
import { useAlbumPhotos, usePhotos, useFetchPhotos } from '../Hooks/usePhotos'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// describe('user hook fn', () => {
// 	it('should check if the fn returns an array of users', () => {
// 		expect(usefetchuser()).toHaveLength(3)
// 	})

// 	it('should check if the fn returns an array of users', () => {
// 		expect(useUser()).toHaveLength(3)
// 	})
// })
// describe('album hook fn', () => {
// 	it('should check if the fn returns an array of users', () => {
// 		expect(useFetchPhotos()).toHaveLength(3)
// 	})

// 	it('should check if the fn returns an array of users', () => {
// 		expect(usePhotos()).toHaveLength(3)
// 	})
// 	it('should check if the fn returns an array of users', () => {
// 		expect(useAlbumPhotos()).toHaveLength(3)
// 	})
// })
// describe('photo hook fn', () => {
// 	it('should check if the fn returns an array of users', () => {
// 		expect(useFetchAlbums()).toHaveLength(3)
// 	})

// 	it('should check if the fn returns an array of users', () => {
// 		expect(useAlbums()).toHaveLength(3)
// 	})
// 	it('should check if the fn returns an array of users', () => {
// 		expect(useUserAlbum()).toHaveLength(3)
// 	})
// })
