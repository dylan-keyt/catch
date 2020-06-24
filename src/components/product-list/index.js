import React, {useState, useEffect} from 'react';
import ProductTile from '../product-tile'
import { getProducts } from '../../api/product'
import { PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW } from '../../constants/sort';
import { sortPriceLowToHigh, sortPriceHighToLow } from '../../utils/product';
import { useSortState } from '../../context/sort';

const ProductList = () => {
  const { sortMethod } = useSortState()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts()
      setProducts(products
        .sort(sortMethod === PRICE_LOW_TO_HIGH
        ? sortPriceLowToHigh
        : sortMethod === PRICE_HIGH_TO_LOW
          ? sortPriceHighToLow
          : null
      ))
    }
    fetchData();
  }, [sortMethod])

  return (
    // TODO: grid styles
    <div className="ProductList">
      {products.map(product => <ProductTile product={product} />)}
    </div>
  );
}

export default ProductList;
