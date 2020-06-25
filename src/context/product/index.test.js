import React from 'react'
import PropTypes from 'prop-types'
import { render, fireEvent } from '@testing-library/react'
import ProductProvider, { productReducer, useProductState, useProductDispatch } from '.'
import {
	FETCH_PRODUCTS,
	SET_PRODUCTS,
	FETCH_PRODUCTS_FAILED,
	SET_METADATA,
} from '../../constants/product'

const TestConsumerComponent = ({ action }) => {
	const { status, products } = useProductState()
	const dispatch = useProductDispatch()

	return (
		<>
			{products.map((product) => (
				<div key={product.id}>{product.name}</div>
			))}
			<button onClick={() => dispatch(action)}>{status}</button>
		</>
	)
}

TestConsumerComponent.propTypes = {
	action: PropTypes.object
}

describe('product context', () => {
	describe('ProductProvider', () => {
		test('should allow the dispatching of actions', () => {
			const action = {
				type: SET_PRODUCTS,
				products: [{ name: 'hello' }, { name: 'goodbye' }],
			}
			const { getByRole, getByText } = render(
				<ProductProvider>
					<TestConsumerComponent action={action} />
				</ProductProvider>,
			)

			fireEvent(
				getByRole('button'),
				new MouseEvent('click', {
					bubbles: true,
					cancelable: true,
				}),
			)
			expect(getByText('hello')).toBeInTheDocument()
			expect(getByText('goodbye')).toBeInTheDocument()
			expect(getByRole('button')).toHaveTextContent('success')
		})

		test('should throw an error when invalid action is dispatched', () => {
			const action = {
				type: 'NOT_VALID',
			}
			const { getByRole } = render(
				<ProductProvider>
					<TestConsumerComponent action={action} />
				</ProductProvider>,
			)

			try {
				fireEvent(
					getByRole('button'),
					new MouseEvent('click', {
						bubbles: true,
						cancelable: true,
					}),
				)
			} catch (err) {
				expect(err.message).toEqual('Unhandled action type: NOT_VALID')
			}
		})
	})

	describe('productReducer', () => {
		const state = {
			status: null,
			metadata: {},
			products: [],
			error: null,
		}
		test('should return the appropriate state for FETCH_PRODUCTS', () => {
			const action = { type: FETCH_PRODUCTS }
			expect(productReducer(state, action)).toEqual({
				status: 'fetching',
				metadata: {},
				products: [],
				error: null,
			})
		})
		test('should return the appropriate state for SET_METADATA', () => {
			const action = {
				type: SET_METADATA,
				metadata: {
					query: 'best sellers',
					total: 102,
					page: 1,
					pages: 3,
				},
			}
			expect(productReducer(state, action)).toEqual({
				status: null,
				metadata: action.metadata,
				products: [],
				error: null,
			})
		})
		test('should return the appropriate state for SET_PRODUCTS', () => {
			const action = {
				type: SET_PRODUCTS,
				products: [{ name: 'product1' }, { name: 'product2' }],
			}
			expect(productReducer(state, action)).toEqual({
				status: 'success',
				metadata: {},
				products: action.products,
				error: null,
			})
		})
		test('should return the appropriate state for FETCH_PRODUCTS_FAILED', () => {
			const action = {
				type: FETCH_PRODUCTS_FAILED,
				error: '🤷',
			}
			expect(productReducer(state, action)).toEqual({
				status: 'failed',
				metadata: {},
				products: [],
				error: '🤷',
			})
		})
	})

	describe('useProductState', () => {
		const TestComponent = () => {
			const { products } = useProductState()
			return <div>{products}</div>
		}
		test('should throw an error if component is not rendered inside ProductProvider', () => {
			try {
				render(<TestComponent />)
			} catch (err) {
				expect(err.message).toEqual(
					'useProductState must be used within a ProductProvider',
				)
			}
		})
	})

	describe('useProductDispatch', () => {
		const TestComponent = () => {
			const dispatch = useProductDispatch()
			return <button onClick={() => dispatch()}>Hello</button>
		}
		test('should throw an error if component is not rendered inside ProductProvider', () => {
			try {
				render(<TestComponent />)
			} catch (err) {
				expect(err.message).toEqual(
					'useProductDispatch must be used within a ProductProvider',
				)
			}
		})
	})
})
