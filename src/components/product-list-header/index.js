import React from 'react'
import './styles.css'
import { useProductState } from '../../context/product'

const ProductListHeader = () => {
	const { query, total, page, pages } = useProductState().metadata

	return (
		<div className='ProductListHeader'>
			<div className='ProductListHeader-query'>
				{total} results for &quot;{query}&quot;
			</div>
			<div className='ProductListHeader-pages'>
				Page {page} of {pages}
			</div>
		</div>
	)
}

export default ProductListHeader
