import React, { useEffect } from 'react'
import './styles.css'
import ProductTile from '../product-tile'
import { getProducts, sortProducts } from '../../actions/product'
import { useProductState, useProductDispatch } from '../../context/product'
import { useSortState } from '../../context/sort'
import ProductListHeader from '../product-list-header'

const ProductList = () => {
	const dispatch = useProductDispatch()
	const { products } = useProductState()
	const { sortMethod } = useSortState()

	useEffect(() => {
		const fetchProducts = async () => {
			await getProducts({ dispatch })
		}
		fetchProducts()
	}, [dispatch])

	useEffect(() => {
		sortProducts({ dispatch, products, sortMethod })
	}, [dispatch, products, sortMethod])

	return (
		<>
			<ProductListHeader />
			<div className='ProductList-container'>
				{products.map((product) => (
					<ProductTile
						product={product}
						key={product.id}
					/>
				))}
			</div>
		</>
	)
}

export default ProductList
