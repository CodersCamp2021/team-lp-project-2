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
  const [productList, changeProductList] = useState([]);

  function addProductToCart(product) {
    changeProductList((prevProductNumber) => prevProductNumber.append(product));
  }

  function removeProductFromCart(id) {
    changeProductList((prevProductNumber) => {
      for (let i = 0; i < prevProductNumber.length; i++) {
        if (prevProductNumber[i].id == id) {
          prevProductNumber.splice(i, 1);
        }
      }
    });
  }

  return (
    <ProductsContex.Provider value={productList}>
      <ProductsContexUpdate.Provider
        value={[addProductToCart, removeProductFromCart]}
      >
        {children}
      </ProductsContexUpdate.Provider>
    </ProductsContex.Provider>
  );
}
