import React from 'react'
import { render } from '@testing-library/react'
import ProductList from '.'
import ProductProvider from '../../context/product'
import { enableFetchMocks } from 'jest-fetch-mock'

const mockProducts = [
	{
		id: 'ffc4211a-fb81-45e3-b1d8-2d399a92aa89',
		name: 'Buy Olaplex No. 3 Hair Perfector',
		salePrice: 3145,
		retailPrice: 5000,
		imageUrl:
      'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg',
		quantityAvailable: 65,
	}, {
		id: 'f56cb6f2-a926-4ff4-80be-4518b0d1997d',
		name: 'Havaianas Top Thongs - Black',
		salePrice: 1499,
		retailPrice: 2500,
		imageUrl:
      'https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg',
		quantityAvailable: 71,
	}
]

describe('ProductList', () => {
	beforeEach(() => {
		enableFetchMocks()
		fetchMock.mockResponseOnce(mockProducts)
	})
	test('should render standard product attributes', () => {
		const { getByAltText, queryByText, getByText } = render(
			<ProductProvider>
				<ProductList />
			</ProductProvider>
		)
		const image = getByAltText(product.name)
		const soldOut = queryByText('Sold Out')
		const name = getByText(product.name)
		const retailPrice = getByText('5000')
		const salePrice = getByText('3145')

		expect(image).toBeInTheDocument()
		expect(soldOut).not.toBeInTheDocument()
		expect(name).toBeInTheDocument()
		expect(retailPrice).toBeInTheDocument()
		expect(salePrice).toBeInTheDocument()
	})
})
