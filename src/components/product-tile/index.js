import React from 'react'
import PropTypes from 'prop-types'

const ProductTile = ({ product }) => {
	const {
		id, name, salePrice, retailPrice, imageUrl, quantityAvailable,
	} = product
	return (
		<div className="ProductTile" id={id}>
			<img src={imageUrl} alt={name} />
			{ !quantityAvailable && <div>Sold Out</div> }
			<div>{name}</div>
			{ !!retailPrice && <div>{retailPrice}</div> }
			<div>{salePrice}</div>
		</div>
	)
}

ProductTile.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductTile
