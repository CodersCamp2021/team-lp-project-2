import React from 'react';
import { Box } from '@chakra-ui/react';
import CartBackground from './CartBackground';
import CartHeader from './CartHeader';
import CartSummary from './CartSummary';
import Products from './Products';

const dummyProducts = [
  {
    id: '1ZaZ9ciAQ1r5SQjgEb7J',
    name: 'Intel Core i9-9900KF',
    price: 276.32,
  },
  {
    id: '2E77PN30gTjkA4T8QjOM',
    name: 'Corsair CMW32GX4M2E3200C16',
    price: 59.99,
  },
  {
    id: '5cc6UzJixdCcUsUPoEkF',
    name: 'SAMSUNG 23.5” CF396 Curved Computer Monitor',
    price: 169.99,
  },
  {
    id: '6G5uJAppKfO0Aprucdx2',
    name: 'AMD Ryzen 7 5800X',
    price: 329.78,
  },
];

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
          <Products products={dummyProducts} />
          <CartSummary />
        </Box>
      </Box>
    </>
  );
};

export default Cart;
