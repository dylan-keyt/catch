import { fetchWithCORS } from '../../utils/proxy'
import { PRODUCTS_URL } from '../../constants/url'
import { FETCH_PRODUCTS, SET_PRODUCTS, FETCH_PRODUCTS_FAILED, SET_METADATA } from '../../constants/product'
import { PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW } from '../../constants/sort'
import { sortPriceLowToHigh, sortPriceHighToLow } from '../../utils/sort'

export const getProducts = async ({ dispatch }) => {
	dispatch({ type: FETCH_PRODUCTS })
	try {
		const res = await fetchWithCORS(PRODUCTS_URL)
		const data = await res.json()
		dispatchProductData({ dispatch, data })
	} catch (error) {
		dispatch({ type: FETCH_PRODUCTS_FAILED, error })
	}
}

const dispatchProductData = ({ dispatch, data }) => {
	const { metadata, results } = data
	dispatch({ type: SET_METADATA, metadata	})
	dispatch({ type: SET_PRODUCTS, products: results })
}

export const sortProducts = ({ dispatch, products, sortMethod }) => {
	if (!sortMethod) return
	dispatch({
		type: SET_PRODUCTS,
		products: products.sort(
			sortMethod === PRICE_LOW_TO_HIGH
				? sortPriceLowToHigh
				: sortMethod === PRICE_HIGH_TO_LOW
					? sortPriceHighToLow
					: undefined
		),
	})
}
