import React from 'react'
import { render } from '@testing-library/react'
import ProductListHeader from './'
import ProductProvider from '../../context/product'

describe('Header', () => {
	test('should render with children', () => {
		const { getByText } = render(
			<ProductProvider>
				<ProductListHeader />
			</ProductProvider>
		)
		expect(getByText('results for ""')).toBeInTheDocument()
		expect(getByText('Page of')).toBeInTheDocument()
	})
})
