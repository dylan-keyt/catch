import { formatPriceToAUD } from '.'

describe('price utils', () => {
	describe('formatPriceToAUD', () => {
		test('should format a price value in cents to AUD', () => {
			expect(formatPriceToAUD(2493)).toEqual('A$24.93')
		})
		test('should format a price value which is negative', () => {
			expect(formatPriceToAUD(-2493)).toEqual('-A$24.93')
		})
		test('should format a price value which is zero', () => {
			expect(formatPriceToAUD(0)).toEqual('A$0.00')
		})
	})
})
