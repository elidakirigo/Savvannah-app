import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockUsers = {
	user: '',
}

const mocksetUsers = jest.fn()

// describe('photo component', () => {
// 		it('renders photopage unchanged', () => {
// 			const { container } = render(<Page />)
// 			expect(container).toMatchSnapshot()
// 		})
// 	// it('should check if the update button is visible', async () => {
// 	// 	const data = await screen.findByText('update')
// 	// 	expect(data).toBeFalsy()
// 	// })
// })
