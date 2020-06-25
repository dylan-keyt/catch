import React, { useReducer } from 'react'
import {
	FETCH_PRODUCTS,
	SET_METADATA,
	SET_PRODUCTS,
	FETCH_PRODUCTS_FAILED,
} from '../../constants/product'

const ProductStateContext = React.createContext()
const ProductDispatchContext = React.createContext()

const productReducer = (state, action) => {
	switch (action.type) {
	case FETCH_PRODUCTS:
		return { ...state, status: 'fetching' }
	case SET_METADATA: {
		return { ...state, metadata: action.metadata }
	}
	case SET_PRODUCTS: {
		return { ...state, status: 'success', products: action.products }
	}
	case FETCH_PRODUCTS_FAILED: {
		return { ...state, status: 'failed', error: action.error }
	}
	default: {
		throw new Error(`Unhandled action type: ${action.type}`)
	}
	}
}

const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, {
		status: null,
		metadata: {},
		products: [],
		error: null
	})
	return (
		<ProductStateContext.Provider value={state}>
			<ProductDispatchContext.Provider value={dispatch}>
				{children}
			</ProductDispatchContext.Provider>
		</ProductStateContext.Provider>
	)
}

const useProductState = () => {
	const context = React.useContext(ProductStateContext)
	if (context === undefined) {
		throw new Error('useProductState must be used within a ProductProvider')
	}
	return context
}

const useProductDispatch = () => {
	const context = React.useContext(ProductDispatchContext)
	if (context === undefined) {
		throw new Error('useProductDispatch must be used within a ProductProvider')
	}
	return context
}

export { productReducer, useProductState, useProductDispatch }
export default ProductProvider
