import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { ProductsContex } from '../ProductContext';

function ClearButton() {
  function handleClearCart() {
    dispatch({ type: 'CLEAR_CART', })
  }

  const { dispatch } = useContext(ProductsContex);
  return (
    <Button width="100px" mt="25" colorScheme="teal" onClick={handleClearCart}>
      Clear cart
    </Button>
  );
}

export default ClearButton;
