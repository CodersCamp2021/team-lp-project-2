import React, { useContext, useReducer } from 'react';

export const ProductsContex = React.createContext();

function productListReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.wartosc;
    case 'ODD':
      return state - 1;
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [productList, dispatch] = useReducer(productListReducer, 0);

  // function addProductToCart(product) {
  //   changeProductList((prevProductNumber) => prevProductNumber.append(product));
  // }

  // function removeProductFromCart(id) {
  //   changeProductList((prevProductNumber) => {
  //     for (let i = 0; i < prevProductNumber.length; i++) {
  //       if (prevProductNumber[i].id == id) {
  //         prevProductNumber.splice(i, 1);
  //       }
  //     }
  //   });
  // }

  return (
    <ProductsContex.Provider value={(productList, dispatch)}>
      {children}
    </ProductsContex.Provider>
  );
}
