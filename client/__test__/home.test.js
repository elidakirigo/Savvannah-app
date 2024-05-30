import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Fetch from './fetch'

const mockUsers = {
	user: '',
}

const mocksetUsers = jest.fn()

describe('home component', () => {
	it('loads and displays greeting', async () => {
		// ARRANGE
		render(<Fetch url='/greeting' />)

		// ACT
		await userEvent.click(screen.getByText('Load Greeting'))
		await screen.findByRole('heading')

		// ASSERT
		expect(screen.getByRole('heading')).toHaveTextContent('hello there')
		expect(screen.getByRole('button')).toBeDisabled()
	})

	describe('should render', () => {})


})
