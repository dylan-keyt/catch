import React from 'react'
import './styles.css'
import { useProductState } from '../../context/product'

const ProductListHeader = () => {
	const { query, total, page, pages } = useProductState().metadata

	return (
		<>
			<div className='ProductListHeader-query'>
				<div>{total} results for</div>
				<div>&nbsp;&quot;{query}&quot;</div>
			</div>
			<div>
				Page {page} of {pages}
			</div>
		</>
	)
}

export default ProductListHeader
