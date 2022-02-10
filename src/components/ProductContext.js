import React, { useReducer } from 'react';
import LocalStorage from './LocalStorage';

export const ProductContext = React.createContext();

function productListReducer(state, action) {
  let result = {};
  switch (action.type) {
    case 'ADD_PROD':
      const index = state.products.findIndex(
        (product) => product.id === action.payload.product.id,
      );
      if (index >= 0) {
        const copyProducts = [...state.products];
        copyProducts[index].amount = copyProducts[index].amount + 1;
        result = {
          products: copyProducts,
        };
        LocalStorage.set('cart', result);
        return result;
      } else {
        result = {
          products: [
            ...state.products,
            { ...action.payload.product, amount: 1 },
          ],
        };
        LocalStorage.set('cart', result);
        return result;
      }
    case 'ADD_MANY_PROD':
      const manyIndex = state.products.findIndex(
        (product) => product.id === action.payload.product.id,
      );
      if (manyIndex >= 0) {
        const copyManyProducts = [...state.products];
        copyManyProducts[manyIndex].amount =
          copyManyProducts[manyIndex].amount + parseInt(action.payload.count);
        result = {
          products: copyManyProducts,
        };
        LocalStorage.set('cart', result);
        return result;
      } else {
        result = {
          products: [
            ...state.products,
            { ...action.payload.product, amount: action.payload.count },
          ],
        };
        LocalStorage.set('cart', result);
        return result;
      }
    case 'INCREASE_PROD_AMOUNT':
      const ind = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      const copyProducts = [...state.products];
      copyProducts[ind].amount = copyProducts[ind].amount + 1;
      result = {
        products: copyProducts,
      };
      LocalStorage.set('cart', result);
      return result;
    case 'DECREASE_PROD_AMOUNT':
      const decIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      const copyProductsList = [...state.products];
      if (copyProductsList[decIndex].amount > 1) {
        copyProductsList[decIndex].amount =
          copyProductsList[decIndex].amount - 1;
        result = {
          products: copyProductsList,
        };
        LocalStorage.set('cart', result);
        return result;
      } else {
        result = { products: copyProductsList };
        LocalStorage.set('cart', result);
        return result;
      }
    case 'DELETE_PROD':
      const delIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      const delProductList = [...state.products];
      delProductList.splice(delIndex, 1);
      result = {
        products: delProductList,
      };
      LocalStorage.set('cart', result);
      return result;
    case 'CLEAR_CART':
      result = {
        products: [],
      };
      LocalStorage.set('cart', result);
      return result;
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(
    productListReducer,
    LocalStorage.get('cart')
      ? LocalStorage.get('cart')
      : {
          products: [],
        },
  );

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
