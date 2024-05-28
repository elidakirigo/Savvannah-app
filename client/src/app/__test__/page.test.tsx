import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LandingPage from '../landingPage'


describe('Home', () => {
    it('renders without crashing', () => {
        render(
               <LandingPage/>
        )
    })
})
