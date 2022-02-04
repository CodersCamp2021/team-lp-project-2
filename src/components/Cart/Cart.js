import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CartBackground from './CartBackground';
import CartHeader from './CartHeader';
import CartSummary from './CartSummary';
import Products from './Products';

const dummyProducts = [
  {
    id: '1ZaZ9ciAQ1r5SQjgEb7J',
    name: 'Intel Core i9-9900KF',
    price: 276.32,
    amount: 1,
  },
  {
    id: '2E77PN30gTjkA4T8QjOM',
    name: 'Corsair CMW32GX4M2E3200C16',
    price: 59.99,
    amount: 4,
  },
  {
    id: '5cc6UzJixdCcUsUPoEkF',
    name: 'SAMSUNG 23.5” CF396 Curved Computer Monitor',
    price: 169.99,
    amount: 1,
  },
  {
    id: '6G5uJAppKfO0Aprucdx2',
    name: 'AMD Ryzen 7 5800X',
    price: 329.78,
    amount: 6,
  },
];

const Cart = ({ isCartOpen, closeCart }) => {
  return (
    <>
      <CartBackground isCartOpen={isCartOpen} closeCart={closeCart} />
      <Box
        data-testid="cart"
        className={isCartOpen ? 'visible' : 'hidden'}
        as="aside"
        height="100vh"
        width={{ base: '100vw', md: '600px' }}
        bg="white"
        position="fixed"
        top="0"
        padding="20px"
        right="-1000px"
        transform={isCartOpen ? 'translateX(-1000px)' : ''}
        transition="transform ease-in-out .4s .3s"
        zIndex="10"
      >
        <CartHeader closeCart={closeCart} />

        {/* dynamically display products or  info if products array is empty */}
        {dummyProducts.length ? (
          <Products products={dummyProducts} />
        ) : (
          <Flex justify="center">
            <Text fontSize="3xl">The cart is empty</Text>
          </Flex>
        )}
        <CartSummary />
      </Box>
    </>
  );
};

export default Cart;
