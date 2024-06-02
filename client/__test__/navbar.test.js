import Navbar from '../components/navbar'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('next-auth/react')

describe('Navbar render', () => {
	it('renders correctly', () => {
		const { container } = render(<Navbar />)
		expect(container).toMatchSnapshot()
	})
})
