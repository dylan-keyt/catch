import { sortPriceHighToLow, sortPriceLowToHigh } from '.'

describe('sort utils', () => {
	const cheapProduct = {
		name: 'Havaianas Top Thongs - Black',
		salePrice: 1499,
	}

	const expensiveProduct = {
		name: 'Buy Olaplex No. 3 Hair Perfector',
		salePrice: 3145,
	}

	describe('sortPriceHighToLow', () => {
		test('should return 1 if expensiveProduct.salePrice > cheapProduct.salePrice', () => {
			expect(sortPriceHighToLow(cheapProduct, expensiveProduct)).toBe(1)
		})
		test('should return -1 if cheapProduct.salePrice > expensiveProduct.salePrice', () => {
			expect(sortPriceHighToLow(expensiveProduct, cheapProduct)).toBe(-1)
		})
	})

	describe('sortPriceLowToHigh', () => {
		test('should return 1 if cheapProduct.salePrice > expensiveProduct.salePrice', () => {
			expect(sortPriceLowToHigh(expensiveProduct, cheapProduct)).toBe(1)
		})
		test('should return -1 if expensiveProduct.salePrice > cheapProduct.salePrice', () => {
			expect(sortPriceLowToHigh(cheapProduct, expensiveProduct)).toBe(-1)
		})
	})
})
