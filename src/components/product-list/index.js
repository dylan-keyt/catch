import React from 'react';
import ProductTile from '../product-tile'

const ProductList = ({ sortMethod }) => {
  return (
    // TODO: grid styles
    <div className="ProductList">
      {sortMethod}
      <ProductTile product={{}} />
    </div>
  );
}

export default ProductList;
