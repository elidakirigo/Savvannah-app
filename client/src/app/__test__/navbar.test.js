import { render } from "@testing-library/react"
import Navbar from "../../../components/navbar"
import StoreProvider from '../../../components/StoreProvider';

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