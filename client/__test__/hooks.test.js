import { usefetchuser, useUser } from '../Hooks/useUser'
import { useFetchAlbums, useAlbums, useUserAlbum } from '../Hooks/useUlbums'
import { useAlbumPhotos, usePhotos, useFetchPhotos } from '../Hooks/usePhotos'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useAppSelector } from '../src/app/store/hooks'
import { useState } from 'react'
import UserData from './mocks/data'

// jest.mock('../src/app/store/hooks')
// jest.mock('react')

describe('user hook fn', () => {
	// useAppSelector.mockReturnValue(UserData)

	it('should check if the fn returns an array of users', () => {
		expect(UserData.UserData).toHaveLength(1)
	})

	it('should check if the fn returns an array of users', () => {
		expect(UserData.user).toHaveLength(1)
	})
})
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
