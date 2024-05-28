import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import LandingPage from '../landingPage'

test('Home', () => {
    render(<LandingPage />)

    const page = screen.getByTestId('landingpage')
	// it('renders without crashing', () => {
		
	// })
})
