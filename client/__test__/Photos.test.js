import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('render the photos page', () => {
	it('renders photospage unchanged', () => {
		const { container } = render(<Page />)
		expect(container).toMatchSnapshot()
	})
})
