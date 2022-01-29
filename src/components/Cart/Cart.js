import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Cart = ({ isCartOpen, closeCart }) => {
  return (
    <Box
      height="100vh"
      width="600px"
      bg="white"
      position="fixed"
      top="0"
      right="-1000px"
      transform={isCartOpen ? 'translateX(-1000px)' : ''}
      transition="transform ease-in-out .2s"
    >
      <Button onClick={closeCart}>Close cart</Button>
    </Box>
  );
};

export default Cart;
