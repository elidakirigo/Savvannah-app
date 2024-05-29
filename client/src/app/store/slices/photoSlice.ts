import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { usefetchphoto } from '../../../../Hooks/usephoto'
import { Allphotos } from '../../types/users'

interface photosState {
	photos: Allphotos[] | ''
}

const initialState: photosState = {
	photos: '',
}

export const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {
		fetchphotos(state, action) {
			console.log(state)
			
			state.photos =action.payload
		},
	},
})

export const { fetchphotos } = photosSlice.actions

export const selectphotos = (state: RootState) => state.photos

export default photosSlice.reducer
