import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const ProductTile = ({ product }) => {
	const {
		id, name, salePrice, retailPrice, imageUrl, quantityAvailable,
	} = product
	return (
		<div className='ProductTile' id={id}>
			<div className='ProductTile-image-wrapper'>
				<img className='ProductTile-image' src={imageUrl} alt={name} />
				{!quantityAvailable && (
					<div className='ProductTile-sold-out'>Sold Out</div>
				)}
			</div>
			<div className='ProductTile-details'>
				<div className='ProductTile-name'>{name}</div>
				{!!retailPrice && (
					<div className='ProductTile-retail-price'>{retailPrice}</div>
				)}
				<div className='ProductTile-sale-price'>{salePrice}</div>
			</div>
		</div>
	)
}

ProductTile.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductTile
