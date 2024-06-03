import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import * as nextAuthReact from 'next-auth/react'
import Link from 'next/link'
import Album from '../src/app/album/[id]/Album'
import StoreProvider from '../components/StoreProvider'
import { mockSession, AlbumPhotos } from './mocks/data'
import { useAlbumPhotos } from '../Hooks/usePhotos'

jest.mock('next-auth/react')

jest.mock('../Hooks/usePhotos')

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

const nextAuthReactMocked = nextAuthReact

describe('renders the album page', () => {
	const history = createMemoryHistory()

	const createRouterWrapper =
		(history) =>
		({ children }) => <Link href={history}>{children}</Link>

	beforeEach(() => {
		nextAuthReactMocked.useSession.mockImplementation((_options) => {
			return { data: mockSession, status: 'authenticated' }
		})

		nextAuthReactMocked.signIn.mockImplementation(() => Promise.resolve({ error: '', status: 200, ok: true, url: '' }))

		useAlbumPhotos.mockReturnValue(AlbumPhotos)

		render(
			<StoreProvider>
				<Album currentId='1' />
			</StoreProvider>,
		)
	})

	// afterEach(() => {
	// 	jest.restoreAllMocks()
	// })

	it('should render Albumpage successfully', async () => {
		await waitFor(() => {
			const { container } = render(
				<StoreProvider>
					<Album currentId='1' />
				</StoreProvider>,
			)
			expect(container).toMatchSnapshot()
		})
	})

	it('should have header ', async () => {
		await waitFor(() => {
			const heading = screen.getByRole('heading', { level: 1 })
			expect(heading).toBeInTheDocument()
		})
	})

	it('should have AlbumID ', async () => {
		await waitFor(() => {
			const header = screen.getByTestId('albumId-header')
			expect(header).toHaveTextContent('1')
		})
	})

	it('should have image title row', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('imgtittle-header')[0]).toBeTruthy()
		})
	})

	it('should have image id', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('imgid-header')[0]).toBeTruthy()
		})
	})

	it('should have image row', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('image-header')[0]).toBeTruthy()
		})
	})

	it('should have albumId', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('albumId-head')[0]).toBeTruthy()
		})
	})

	it('should have image title', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('albumtitle')[0]).toHaveTextContent('accusamus')
		})
	})

	it('should have image id row content', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('imageId')[0]).toHaveTextContent('1')
		})
	})

	it('should have image', async () => {
		await waitFor(() => {
			const testImage = document.querySelector('img')
			expect(testImage.src).toContain('https://')
		})
	})

	it('should have album id row content', async () => {
		await waitFor(() => {
			expect(screen.getAllByTestId('albumId')[0]).toHaveTextContent('1')
		})
	})
})
