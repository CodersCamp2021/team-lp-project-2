import React, { useReducer } from 'react';

export const ProductsContex = React.createContext();

function productListReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'ODD':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productListReducer, { count: 0 });

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
    <ProductsContex.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContex.Provider>
  );
}
