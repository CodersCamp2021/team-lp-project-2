import React from 'react';
import { Button } from '@chakra-ui/react';

function ClearButton() {
  function handleClearCart() {
    console.log('click on clear cart button');
  }

  return (
    <Button width="100px" mt="25" colorScheme="teal" onClick={handleClearCart}>
      Clear cart
    </Button>
  );
}

export default ClearButton;
