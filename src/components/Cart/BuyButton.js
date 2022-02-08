import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

function BuyButton({ products }) {
  function handleBuy() {
    console.log('click on buy button');
  }

  return (
    <Button
      width="120px"
      colorScheme="purple"
      onClick={handleBuy}
      rightIcon={<FaShoppingCart />}
      size="lg"
      disabled={products.length === 0 ? true : false}
    >
      Buy
    </Button>
  );
}

export default BuyButton;
