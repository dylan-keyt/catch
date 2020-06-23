import React from 'react';

const ProductTile = ({ product }) => {
  const { id, name, salePrice, retailPrice, imageUrl, quantityAvailable } = product
  return (
    <div className="ProductTile" id={id}>
      <img src={imageUrl} alt={name}/>
      { !quantityAvailable && <div>Sold out</div> }
      <div>{name}</div>
      <div>{retailPrice}</div>
      <div>{salePrice}</div>
    </div>
  );
}

export default ProductTile;
