import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../src/app/album/[id]/page'

describe('render the album page', () => {
	it('renders albumpage unchanged', () => {
		const { container } = render(<Page />)
		expect(container).toMatchSnapshot()
	})
})
