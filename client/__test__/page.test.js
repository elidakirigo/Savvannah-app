import { render } from '@testing-library/react'
import Homepage from '../src/app/page'

describe('home component', () => {
	it('renders homepage unchanged', () => {
		const { container } = render(<Homepage/>)
		expect(container).toMatchSnapshot()
	})
})
