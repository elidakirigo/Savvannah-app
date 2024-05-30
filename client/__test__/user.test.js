import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('render the user page', () => {
	it('renders userpage unchanged', () => {
		const { container } = render(<Page />)
		expect(container).toMatchSnapshot()
	})
})
