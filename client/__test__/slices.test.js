import usefetchuser from '../Hooks/useUser'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useAppSelector } from '@/app/store/hooks'

describe('userSlice fn', () => {
	it('should check if users where stored in redux', () => {
	const UserData = useAppSelector((state) => state.users)

		expect(UserData).toHaveLength(3)
	})
})
