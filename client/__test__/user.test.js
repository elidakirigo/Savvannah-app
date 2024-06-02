import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../src/app/user/[id]/page'
import Navbar from '../components/navbar'
import '@testing-library/jest-dom'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import StoreProvider from '../components/StoreProvider'
import * as nextAuthReact from 'next-auth/react'
import '@testing-library/jest-dom'

jest.mock('next-auth/react')

global.fetch = jest.fn()

describe('render the user page', () => {
	it('renders userpage unchanged', () => {
		const { container } = render(<Page />)
		expect(container).toMatchSnapshot()
	})

	it('expect api call to change ptag', async () => {
		const fakeUserResponse = { data: 'response' }
		var { getByTestId } = render(<Page />)
		var apiFunc = jest.spyOn(global, 'usefetchuser').mockImplementationOnce(() => {
			console.log('the response ' + JSON.stringify(response))
			return Promise.resolve({
				json: () => Promise.resolve(fakeUserResponse),
			})
		})

		fireEvent.click(getByTestId('apiCall'))
		const text = await getByTestId('ptag')
		expect(text).toHaveTextContent(fakeUserResponse['data'])
	})
})
