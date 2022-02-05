import React, { useContext, useState } from 'react';

const ProductsContex = React.createContext();
const ProductsContexUpdate = React.createContext();

export function useProduct() {
  return useContext(ProductsContex);
}

export function useProductUpdate() {
  return useContext(ProductsContexUpdate);
}

export function ProductProvider({ children }) {
  const [productList, changeProductList] = useState(0);

  function changeProdDetails() {
    changeProductList((prevProductNumber) => prevProductNumber + 1);
  }

  return (
    <ProductsContex.Provider value={productList}>
      <ProductsContexUpdate.Provider value={changeProdDetails}>
        {children}
      </ProductsContexUpdate.Provider>
    </ProductsContex.Provider>
  );
}
