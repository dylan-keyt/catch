import { fetchWithCORS } from '../../utils/proxy'
import { PRODUCTS_URL } from '../../constants/url'
import { FETCH_PRODUCTS, SET_PRODUCTS, FETCH_PRODUCTS_FAILED, SET_METADATA } from '../../constants/product'
import { PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW } from '../../constants/sort'
import { sortPriceLowToHigh, sortPriceHighToLow } from '../../utils/sort'

export const getProducts = async ({ dispatch }) => {
	dispatch({ type: FETCH_PRODUCTS })
	try {
		const res = await fetchWithCORS(PRODUCTS_URL)
		const { metadata, results } = await res.json()
		dispatch({
			type: SET_METADATA,
			metadata,
		})
		dispatch({
			type: SET_PRODUCTS,
			products: results,
		})
	} catch (error) {
		dispatch({ type: FETCH_PRODUCTS_FAILED, error })
	}
}

export const sortProducts = ({ dispatch, products, sortMethod }) => {
	const sortedProducts = products
		.sort(sortMethod === PRICE_LOW_TO_HIGH
			? sortPriceLowToHigh
			: sortMethod === PRICE_HIGH_TO_LOW
				? sortPriceHighToLow
				: null)
	dispatch({ type: SET_PRODUCTS, products: sortedProducts })
}
