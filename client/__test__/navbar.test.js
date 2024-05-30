import { render } from '@testing-library/react'
import Navbar from '../components/navbar'

describe('navbar', () => {
	it('renders without crashing', () => {
		render(
			// <SessionProvider>
			<StoreProvider>
				<Navbar />
			</StoreProvider>,
			// </SessionProvider>,
		)

		const title = screen.getByTestId('title')

		// fireEvent.click(page)
		expect(title).toHaveTextContent('Savannah App')
	})
})
describe('behavioral checks', () => {
	it('should redirect to /', async () => {
		render(<Navbar />)

		const title = screen.getByRole('Link')
		await userEvent.click(title)

		expect('something').toHaveBeenCalled()
	})
	it('should call the home page', async () => {
		render(<Navbar />)

		const homeBtn = screen.getByRole('Link')
		await userEvent.click(homeBtn)

		expect('something').toHaveBeenCalled()
	})

	it('should call the signout button', async () => {
		render(<Navbar />)

		const signOutBtn = screen.getByRole('Link')
		await userEvent.click(signOutBtn)
		expect('something').toHaveBeenCalled()
	})
})
