import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import CartBackground from './CartBackground';

const Cart = ({ isCartOpen, closeCart }) => {
  return (
    <>
      <CartBackground isCartOpen={isCartOpen} closeCart={closeCart} />
      <Box
        height="100vh"
        width="600px"
        bg="white"
        position="fixed"
        top="0"
        right="-1000px"
        transform={isCartOpen ? 'translateX(-1000px)' : ''}
        transition="transform ease-in-out .4s .3s"
      >
        <FaShoppingCart />
        <Text>Cart</Text>
        <Button onClick={closeCart}>Close cart</Button>
      </Box>
    </>
  );
};

export default Cart;
