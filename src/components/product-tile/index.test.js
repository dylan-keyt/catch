import React from 'react'
import { render } from '@testing-library/react'
import ProductTile from '.'

describe('ProductTile', () => {
	test('should render standard product attributes', () => {
		const product = {
			id: 'ffc4211a-fb81-45e3-b1d8-2d399a92aa89',
			name: 'Buy Olaplex No. 3 Hair Perfector',
			salePrice: 3145,
			retailPrice: 5000,
			imageUrl: 'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg',
			quantityAvailable: 65,
		}

		const { getByAltText, queryByText, getByText } = render(<ProductTile product={product} />)
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

	test('should render "Sold Out" if quantityAvailable is falsy', () => {
		const product = {
			id: 'ffc4211a-fb81-45e3-b1d8-2d399a92aa89',
			name: 'Buy Olaplex No. 3 Hair Perfector',
			salePrice: 3145,
			retailPrice: 5000,
			imageUrl: 'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg',
			quantityAvailable: 0,
		}

		const { queryByText } = render(<ProductTile product={product} />)
		const soldOut = queryByText('Sold Out')

		expect(soldOut).toBeInTheDocument()
	})

	test('should NOT render a retail price if retailPrice is falsy', () => {
		const product = {
			id: 'ffc4211a-fb81-45e3-b1d8-2d399a92aa89',
			name: 'Buy Olaplex No. 3 Hair Perfector',
			salePrice: 3145,
			retailPrice: 0,
			imageUrl: 'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg',
			quantityAvailable: 65,
		}

		const { queryByText } = render(<ProductTile product={product} />)
		const retailPrice = queryByText('0')

		expect(retailPrice).not.toBeInTheDocument()
	})
})
