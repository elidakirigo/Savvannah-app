import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import Navbar from '../../../components/navbar'
import { SessionProvider } from '../../../components/SessionProvider'
import LandingPage from '../landingPage'
import StoreProvider from '../../../components/StoreProvider'
import userEvent from '@testing-library/user-event'

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
