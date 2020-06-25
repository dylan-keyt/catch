import { enableFetchMocks } from 'jest-fetch-mock'
import { getProducts, sortProducts } from './'
import { FETCH_PRODUCTS, SET_METADATA, SET_PRODUCTS, FETCH_PRODUCTS_FAILED } from '../../constants/product'
import { PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW } from '../../constants/sort'

const mockResponse = {
	metadata: {
		query: 'best sellers',
		total: 102,
		page: 1,
		pages: 3
	},
	results: [
		{
			name: 'Buy Olaplex No. 3 Hair Perfector',
			salePrice: 3145,
		},
		{
			name: 'Havaianas Top Thongs - Black',
			salePrice: 1499,
		},
		{
			name:
					'4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle',
			salePrice: 5900,
		},
	]}

describe('product actions', () => {
	let dispatch
	beforeEach(() => {
		dispatch = jest.fn()
		enableFetchMocks()
		fetch.resetMocks()
	})
	describe('getProducts', () => {
		test('should fetch data and dispatch several actions', async () => {
			fetchMock.mockResponseOnce(JSON.stringify(mockResponse))
			await getProducts({ dispatch })

			expect(dispatch).toHaveBeenCalledWith({
				type: FETCH_PRODUCTS,
			})
			expect(dispatch).toHaveBeenCalledWith({
				type: SET_METADATA,
				metadata: mockResponse.metadata,
			})
			expect(dispatch).toHaveBeenCalledWith({
				type: SET_PRODUCTS,
				products: mockResponse.results,
			})
		})
		test('should dispatch FETCH_PRODUCTS_FAILED when the fetch call fails', async () => {
			fetchMock.mockRejectOnce('this is an error')
			await getProducts({ dispatch })

			expect(dispatch).toHaveBeenCalledWith({
				type: FETCH_PRODUCTS,
			})
			expect(dispatch).toHaveBeenCalledWith({
				type: FETCH_PRODUCTS_FAILED,
				error: 'this is an error',
			})
		})
	})

	describe('sortProducts', () => {
		test('should sort products based on PRICE_LOW_TO_HIGH and dispatch SET_PRODUCTS', () => {
			const sortObj = {
				dispatch,
				products: mockResponse.results,
				sortMethod: PRICE_LOW_TO_HIGH,
			}
			const expectedProducts = [
				{
					name: 'Havaianas Top Thongs - Black',
					salePrice: 1499,
				},
				{
					name: 'Buy Olaplex No. 3 Hair Perfector',
					salePrice: 3145,
				},
				{
					name:
						'4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle',
					salePrice: 5900,
				},
			]
			sortProducts(sortObj)
			expect(dispatch).toHaveBeenCalledWith({
				type: SET_PRODUCTS,
				products: expectedProducts,
			})
		})
		test('should sort products based on PRICE_HIGH_TO_LOW and dispatch SET_PRODUCTS', () => {
			const sortObj = {
				dispatch,
				products: mockResponse.results,
				sortMethod: PRICE_HIGH_TO_LOW,
			}
			const expectedProducts = [
				{
					name:
          '4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle',
					salePrice: 5900,
				},
				{
					name: 'Buy Olaplex No. 3 Hair Perfector',
					salePrice: 3145,
				},
				{
					name: 'Havaianas Top Thongs - Black',
					salePrice: 1499,
				}
			]
			sortProducts(sortObj)
			expect(dispatch).toHaveBeenCalledWith({
				type: SET_PRODUCTS,
				products: expectedProducts,
			})
		})
		test('should not sort anything if there is no sortMethod', () => {
			const sortObj = {
				dispatch,
				products: mockResponse.results,
			}
			sortProducts(sortObj)
			expect(dispatch).not.toHaveBeenCalled()
		})
	})
})
