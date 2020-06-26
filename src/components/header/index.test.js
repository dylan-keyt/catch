import React from 'react'
import { render } from '@testing-library/react'
import Header from './'
import ProductProvider from '../../context/product'
import SortProvider from '../../context/sort'

describe('Header', () => {
	test('should render with children', () => {
		const { getByAltText, getByText } = render(
			<SortProvider>
				<ProductProvider>
					<Header />
				</ProductProvider>
			</SortProvider>
		)
		expect(getByAltText('Catch')).toBeInTheDocument()
		expect(getByText('Sort By')).toBeInTheDocument()
	})
})
