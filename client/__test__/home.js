import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Page from '../src/app/home/page'
import axios from 'axios'
jest.mock('axios')

const mockUsers = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		address: {
			street: 'Kulas Light',
			suite: 'Apt. 556',
			city: 'Gwenborough',
			zipcode: '92998-3874',
			geo: {
				lat: '-37.3159',
				lng: '81.1496',
			},
		},
		phone: '1-770-736-8031 x56442',
		website: 'hildegard.org',
		company: {
			name: 'Romaguera-Crona',
			catchPhrase: 'Multi-layered client-server neural-net',
			bs: 'harness real-time e-markets',
		},
	},
]

const mocksetUsers = jest.fn()

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

	it('renders homepage unchanged', () => {
		const { container } = render(<Page />)
		expect(container).toMatchSnapshot()
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
