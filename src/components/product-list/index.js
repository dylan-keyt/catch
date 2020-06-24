import React, { useEffect } from 'react';
import ProductTile from '../product-tile';
import { getProducts, sortProducts } from '../../actions/product';
import { useProductState, useProductDispatch } from '../../context/product';
import { useSortState } from '../../context/sort';

const ProductList = () => {
  const dispatch = useProductDispatch();
  const { products } = useProductState();
  const { sortMethod } = useSortState();

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts({ dispatch });
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    sortProducts({ dispatch, products, sortMethod });
  }, [dispatch, products, sortMethod]);

  return (
    // TODO: grid styles
    <div className="ProductList">
      {products.map((product) => <ProductTile product={product} />)}
    </div>
  );
};

export default ProductList;
