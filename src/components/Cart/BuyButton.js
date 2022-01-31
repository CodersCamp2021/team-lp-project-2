import React from 'react';
import { Button } from '@chakra-ui/react';

function BuyButton() {
  function handleBuy() {
    console.log('click on buy button');
  }

  return (
    <Button
      width="100px"
      mt="5"
      colorScheme="blue"
      bottom="0"
      onClick={handleBuy}
    >
      Buy
    </Button>
  );
}

export default BuyButton;
