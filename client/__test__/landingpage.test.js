import LandingPage from '@/app/landingPage'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StoreProvider from '../components/StoreProvider'

describe('landing page', () => {
	render(
		// <SessionProvider>
		<StoreProvider>
			<LandingPage />
		</StoreProvider>,
		// </SessionProvider>,
	)
	it('renders a heading', () => {
		const heading = screen.getByRole('heading', { level: 1 })
		expect(heading).toBeInTheDocument()
	})
	it('title is present', () => {
		const title = screen.getByText(/Savannah App/i)
		expect(title).toBeInTheDocument()
	})
})