import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../src/app/user/[id]/page'

describe('render the user page', () => {
	it('renders userpage unchanged', () => {
		const { container } = render(<Page />)
		expect(container).toMatchSnapshot()
	})
})
