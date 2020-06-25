import React from 'react'
import { render, wait } from '@testing-library/react'
import ProductList from '.'
import ProductProvider from '../../context/product'
import SortProvider from '../../context/sort'
import { act } from 'react-dom/test-utils'
import { getProducts, sortProducts } from '../../actions/product'
import { PRICE_HIGH_TO_LOW } from '../../constants/sort'

jest.mock('../../actions/product')

describe('ProductList', () => {
	test('should call getProducts and sortProducts on render', async () => {
		await act(async () => {
			render(
				<SortProvider>
					<ProductProvider>
						<ProductList />
					</ProductProvider>
				</SortProvider>
			)

			await wait(() =>
				expect(getProducts).toHaveBeenCalledWith(
					expect.objectContaining({
						dispatch: expect.any(Function),
					})
				)
			)
			await expect(sortProducts).toHaveBeenCalledWith(
				expect.objectContaining({
					dispatch: expect.any(Function),
					products: [],
					sortMethod: PRICE_HIGH_TO_LOW
				})
			)
		})
	})
})
