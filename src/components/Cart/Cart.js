import React from 'react';
import { Box } from '@chakra-ui/react';
import CartBackground from './CartBackground';
import CartHeader from './CartHeader';
import CartSummary from './CartSummary';
import Products from './Products';

const Cart = ({ isCartOpen, closeCart }) => {
  return (
    <>
      <CartBackground isCartOpen={isCartOpen} closeCart={closeCart} />
      <Box
        as="aside"
        height="100vh"
        width="600px"
        bg="white"
        position="fixed"
        top="0"
        padding="20px"
        right="-1000px"
        transform={isCartOpen ? 'translateX(-1000px)' : ''}
        transition="transform ease-in-out .4s .3s"
      >
        <CartHeader closeCart={closeCart} />

        <Box bg="tomato" w="100%" h="90%" p={10} color="white">
          <Products />
          <CartSummary />
        </Box>
      </Box>
    </>
  );
};

export default Cart;
