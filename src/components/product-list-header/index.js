import React from 'react'
import { useProductState } from '../../context/product'

const ProductListHeader = () => {
	const { query, total, page, pages } = useProductState().metadata

	return (
		<div>
			<div>
				<div>{total} results for</div>
				<div>{query}</div>
			</div>
			<div>
				Page {page} of {pages}
			</div>
		</div>
	)
}

export default ProductListHeader
