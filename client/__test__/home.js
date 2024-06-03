import '@testing-library/jest-dom'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import * as nextAuthReact from 'next-auth/react'
import Link from 'next/link'
import Page from '../src/app/home/page'
import StoreProvider from '../components/StoreProvider'
import userEvent from '@testing-library/user-event'

jest.mock('axios')

jest.mock('next-auth/react')

const nextAuthReactMocked = nextAuthReact



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

describe('home component', () => {
	beforeEach(() => {
		nextAuthReactMocked.useSession.mockImplementation((_options) => {
			return { data: mockSession, status: 'authenticated' }
		})

		nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 200, ok: true, url: '' }))

		render(
			<StoreProvider>
				<Page />
			</StoreProvider>,
		)
	})
	it('renders home route', async () => {
		await waitFor(() => {
			const { container } = render(
				<StoreProvider>
					<Page />
				</StoreProvider>,
			)
			expect(container).toMatchSnapshot()
		})
	})
	// it('render api successfully', async () => {
	// 	axios.get.mockResolvedValue({ data: mockUsers })

	// 	render(<Page />)

	// 	const users = await waitFor(() => screen.getAllByTestId('user-data'))

	// 	expect(users).toHaveLength(1)
	// })
	// it('should check if the table is empty', async () => {
	// 	const firstItem = screen.getAllByTestId('table')[0]
	// 	const data = await screen.findByText('album')
	// 	expect(firstItem).toHaveTextContent('loaded')
	// 	expect(data).toHaveTextContent('loaded')
	// })
})
