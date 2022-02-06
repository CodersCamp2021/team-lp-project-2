import React, { useEffect, useReducer } from 'react';

export const ProductsContex = React.createContext();

function productListReducer(state, action) {
  switch (action.type) {
    case 'ADD_PROD':
      const index = state.products.findIndex(
        (product) => product.id === action.payload.product.id,
      );
      if (index >= 0) {
        const copyProducts = [...state.products];
        copyProducts[index].amount = copyProducts[index].amount + 1;
        return {
          products: copyProducts,
        };
      } else {
        return {
          products: [
            ...state.products,
            { ...action.payload.product, amount: 1 },
          ],
        };
      }
    case 'INCREASE_PROD_AMOUNT':
      const ind = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      const copyProducts = [...state.products];
      copyProducts[ind].amount = copyProducts[ind].amount + 1;
      return {
        products: copyProducts,
      };
    case 'DECREASE_PROD_AMOUNT':
      const decIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      const copyProductsList = [...state.products];
      if (copyProductsList[decIndex].amount > 1){
        copyProductsList[decIndex].amount = copyProductsList[decIndex].amount - 1;
        return {
          products: copyProductsList,
        };
      }
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productListReducer, { products: [] });
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <ProductsContex.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContex.Provider>
  );
}
