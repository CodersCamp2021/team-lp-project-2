import React from 'react';
import { Box } from '@chakra-ui/react';

const CartBackground = ({ isCartOpen, closeCart }) => {
  return (
    <Box
      onClick={closeCart}
      width="100vw"
      height="100vh"
      position="fixed"
      top="0"
      left="-3000px"
      transform={isCartOpen ? 'translateX(3000px)' : ''}
      transition="transform ease-in-out .4s"
      bg="blackAlpha.700"
      zIndex="99"
    ></Box>
  );
};

export default CartBackground;
