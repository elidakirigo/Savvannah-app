import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import LandingPage from '../landingPage'
import { SessionProvider } from '../../../components/SessionProvider'
import { authOptions } from '../api/auth/[...nextauth]/route'

test('Home', async() => {
		const session = await getServerSession(authOptions)
	render(
		<SessionProvider session={session}>
			<LandingPage />
		</SessionProvider>,
	)

	const page = screen.getByTestId('signinbtn')

	fireEvent.click(page)
	// it('renders without crashing', () => {

	// })
})
