import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import * as nextAuthReact from 'next-auth/react'
import Link from 'next/link'
import User from '../src/app/user/[id]/user'
import StoreProvider from '../components/StoreProvider'
// import { expect, jest, test } from '@jest/globals'
import mockFetch from '../mocks/mockUsers'

jest.mock('next-auth/react')

const nextAuthReactMocked = nextAuthReact

const mockSession = {
	expires: new Date(Date.now() + 2 * 86400).toISOString(),
	// user: { username: 'admin' },
}

global.fetch = jest.fn()

jest.mock('../Hooks/useUser')

jest.mock('next/navigation', () => {
	return {
		__esModule: true,
		usePathname: () => ({
			pathname: '',
		}),
		useRouter: () => ({
			push: jest.fn(),
			replace: jest.fn(),
			prefetch: jest.fn(),
		}),
		useSearchParams: () => ({
			get: () => {},
		}),
	}
})

describe('renders the user page', () => {
	const history = createMemoryHistory()

	const createRouterWrapper =
		(history) =>
		({ children }) => <Link href={history}>{children}</Link>

	let windowFetchSpy
	console.log(nextAuthReactMocked)

	beforeEach(() => {
		// nextAuthReactMocked.useSession.mockImplementation((_options) => {
		// 	return { data: mockSession, status: 'authenticated' }
		// })

		// nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 200, ok: true, url: '' }))

		windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
		render(
			<StoreProvider>
				<User currentId='2' />
			</StoreProvider>,
			{ wrapper: createRouterWrapper(history) },
		)
	})

	// afterEach(() => {
	// 	jest.restoreAllMocks()
	// })

	// it('should render userpage unchanged', () => {
	// 	const { container } = render(<User currentId='2' />)
	// 	expect(container).toMatchSnapshot()
	// })

	// it('should expect api call to have accurate data', async () => {
	// 	// fireEvent.click(getByTestId('apiCall'))
	// 	const usernames = await getByTestId('username')
	// 	expect(findAll(usernames)).toHaveLength(10)
	// })

	// it('should navigation from /home', async () => {
	// 	await waitFor(() => {
	// 		fireEvent.click(screen.getByTestId('username'))
	// 		expect(history.location.pathname).toBe('/home')
	// 	})
	// })
})
