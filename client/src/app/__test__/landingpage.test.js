import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import Navbar from '../../../components/navbar'
import { SessionProvider } from '../../../components/SessionProvider'
import LandingPage from '../landingPage'
import StoreProvider from '../../../components/StoreProvider'

// describe('landing page', () => {
// 	it('check whether the landing page loads', () => {
// 		// const session = await getServerSession(authOptions)
// 		// render(
// 		// 	<SessionProvider session={session}>
// 		// 		<Jest />
// 		// 	</SessionProvider>,
// 		// )

// 		render(
// 			<SessionProvider session={null}>
// 				<Navbar />
// 			</SessionProvider>,
// 		)

// 		// const page = screen.getByTestId('signinbtn')

// 		// fireEvent.click(page)
// 		// expect(page).toHaveTextContent('Sign in')
// 		// it('renders without crashing', () => {

// 		// })
// 	})
// })

describe('Home', () => {
	it('renders without crashing', () => {
		render(
			// <SessionProvider>
				<StoreProvider>
					<LandingPage />
				</StoreProvider>
			// </SessionProvider>,
		)
	})
})
