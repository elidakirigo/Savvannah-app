import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { usefetchuser } from '../../../../Hooks/useUser'
import { AllUsers } from '../../types/users'

interface UsersState {
	users: AllUsers[] | ''
}

const initialState: UsersState = {
	users: '',
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchusers(state, action) {
			console.log(state)
			
			state.users =action.payload
		},
	},
})

export const { fetchusers } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
