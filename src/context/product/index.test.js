import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ProductProvider, { productReducer, useProductState, useProductDispatch } from '.'
import {
	FETCH_PRODUCTS,
	SET_PRODUCTS,
	FETCH_PRODUCTS_FAILED,
} from '../../constants/product'

describe('product context', () => {
	describe('ProductProvider', () => {
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
			products: [],
		}
		test('should return the appropriate state for FETCH_PRODUCTS', () => {
			const action = { type: FETCH_PRODUCTS }
			expect(productReducer(state, action)).toEqual({
				status: 'fetching',
				products: [],
			})
		})
		test('should return the appropriate state for SET_PRODUCTS', () => {
			const action = {
				type: SET_PRODUCTS,
				products: [{ name: 'product1' }, { name: 'product2' }],
			}
			expect(productReducer(state, action)).toEqual({
				status: 'success',
				products: [{ name: 'product1' }, { name: 'product2' }],
			})
		})
		test('should return the appropriate state for FETCH_PRODUCTS_FAILED', () => {
			const action = {
				type: FETCH_PRODUCTS_FAILED,
				error: '🤷',
			}
			expect(productReducer(state, action)).toEqual({
				status: 'failed',
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
