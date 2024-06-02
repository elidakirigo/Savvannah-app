import '@testing-library/jest-dom'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import StoreProvider from '../components/StoreProvider'
import * as nextAuthReact from 'next-auth/react'
import '@testing-library/jest-dom'
import Homepage from '@/app/page'

import Link from 'next/link'
import { createMemoryHistory } from 'history'
import Navbar from '../components/navbar'

jest.mock('next-auth/react')

const nextAuthReactMocked = nextAuthReact

const mockSession = {
	expires: new Date(Date.now() + 2 * 86400).toISOString(),
	// user: { username: 'admin' },
}

describe('homepage render', () => {
	it('renders correctly', () => {
		const { container } = render(<Homepage />)
		expect(container).toMatchSnapshot()
	})
})

describe('Test Auth component not logged in', () => {
	beforeEach(() => {
		render(
			<StoreProvider>
				<Homepage />
			</StoreProvider>,
		)
	})

	nextAuthReactMocked.useSession.mockImplementation((_options) => {
		return { data: null, status: 'loading' }
	})

	nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 403, ok: false, url: '' }))

	it('Shows landing page without session component', async () => {
		await waitFor(() => {
			const heading = screen.getByRole('heading', { level: 1 })
			expect(heading).toBeInTheDocument()
		})
	})

	it('title is present', () => {
		const title = screen.getByText('Welcome to Savannah App')
		expect(title).toBeInTheDocument()
	})

	it('should have a description', () => {
		const description = screen.getByTestId('description')
		expect(description).toHaveTextContent(' ')
	})
	it('should show sign in button', () => {
		const signinbtn = screen.getByTestId('signinbtn')
		expect(signinbtn).toBeVisible()
	})
})

describe('Test Auth component when logged in', () => {
	beforeEach(() => {
		render(
			<StoreProvider>
				<Homepage />
			</StoreProvider>,
		)
	})

	nextAuthReactMocked.useSession.mockImplementation((_options) => {
		return { data: mockSession, status: 'authenticated' }
	})

	nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 200, ok: true, url: '' }))

	it('Shows landing page session component', async () => {
		await waitFor(() => {
			const heading = screen.getByRole('heading', { level: 1 })
			expect(heading).toBeInTheDocument()
		})
	})

	it('title is present', () => {
		const title = screen.getByText('Welcome to Savannah App')
		expect(title).toBeInTheDocument()
	})

	it('should have a description', () => {
		const description = screen.getByTestId('description')
		expect(description).toHaveTextContent(' ')
	})
	it('should show not sign in button', async () => {
		await waitFor(() => {
			const signinbtn = screen.queryByTestId('signinbtn')
			expect(signinbtn).toBeNull()
		})
	})
}) 

describe('navbar when not logged in', () => {
	const history = createMemoryHistory()

	const createRouterWrapper =
		(history) =>
		({ children }) => <Link href={history}>{children}</Link>


	nextAuthReactMocked.useSession.mockImplementation((_options) => {
		return { data: null, status: 'loading' }
	})

	nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 403, ok: false, url: '' }))

	beforeEach(() => {
		render(<Navbar />, { wrapper: createRouterWrapper(history) })
	})
	it('should render title when not logged in', () => {
		const title = screen.getByTestId('title')
		// fireEvent.click(page)
		expect(title).toHaveTextContent('Savannah App')
	})

	it('navigation to /', () => {
		fireEvent.click(screen.getByTestId('title'))
		expect(history.location.pathname).toBe('/')
	})

	it('should not render home when logged in', () => {
		const home = screen.queryByTestId('home')
		expect(home).toBeNull()
	})

	it('should not render username when logged in', () => {
		const home = screen.queryByTestId('home')
		expect(home).toBeNull()
	})

	it('should not render user image when logged in', () => {
		const userImg = screen.queryByTestId('userImg')
		expect(userImg).toBeNull()
	})

	it('should not render signout when logged in', () => {
		const signOut = screen.queryByTestId('signOut')
		expect(signOut).toBeNull()
	})
})

describe('navbar when logged in', () => {
	const history = createMemoryHistory()

	const createRouterWrapper =
		(history) =>
		({ children }) => <Link href={history}>{children}</Link>

	nextAuthReactMocked.useSession.mockImplementation((_options) => {
		return { data: mockSession, status: 'authenticated' }
	})

	nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 200, ok: true, url: '' }))

	beforeEach(() => {
		render(<Navbar />, { wrapper: createRouterWrapper(history) })
	})

	it('navigation to /home', async () => {
		await waitFor(() => {
			fireEvent.click(screen.getByTestId('home'))
			expect(history.location.pathname).toBe('/')
		})
	})

	it('should not render title when logged in', () => {
		const title = screen.queryByTestId('title')
		expect(title).toBeNull()
	})

	it('should render home when logged in', () => {
		const home = screen.queryByTestId('home')
		expect(home).toBeTruthy()
	})

	it('should render username when logged in', () => {
		const home = screen.queryByTestId('home')
		expect(home).toBeTruthy()
	})

	it('should render user image when logged in', () => {
		const userImg = screen.queryByTestId('userImg')
		expect(userImg).toBeTruthy()
	})

	it('renders signout when logged in', () => {
		const signOut = screen.getByTestId('signOut')
		expect(signOut).toHaveTextContent('signOut')
	})
})