import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CartBackground from './CartBackground';
import CartHeader from './CartHeader';
import CartSummary from './CartSummary';
import Products from './Products';
import { ProductContext } from '../ProductContext';

const Cart = ({ isCartOpen, closeCart }) => {
  const { state } = useContext(ProductContext);
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
        zIndex="100"
      >
        <CartHeader closeCart={closeCart} />
        {/* dynamically display products or  info if products array is empty */}
        {state.products.length > 0 ? (
          <Products closeCart={closeCart} products={state.products} />
        ) : (
          <Flex py={7} justify="center" align="center" flexDirection="column">
            <Text fontWeight="semibold" fontSize="2xl">
              The cart is empty!
            </Text>
            <Text fontSize="2xl">Go and grab some items!</Text>
          </Flex>
        )}
        <CartSummary closeCart={closeCart} products={state.products} />
      </Box>
    </>
  );
};

export default Cart;
