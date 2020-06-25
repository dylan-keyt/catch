import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('app', () => {
	test('renders the root app component and its children', () => {
		const { getByAltText} = render(<App />)
		const headerLogo = getByAltText('Catch')
		expect(headerLogo).toBeInTheDocument()
	})
})
