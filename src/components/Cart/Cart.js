import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import CartBackground from './CartBackground';
import { CloseIcon } from '@chakra-ui/icons';

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
        padding="20px"
        right="-1000px"
        transform={isCartOpen ? 'translateX(-1000px)' : ''}
        transition="transform ease-in-out .4s .3s"
      >
        <CloseIcon
          onClick={closeCart}
          boxSize="30px"
          position="absolute"
          top="30px"
          right="30px"
          cursor="pointer"
        />

        <Flex
          justify="center"
          align="center"
          pb="20px"
          borderBottom="1px solid black"
        >
          <FaShoppingCart size="35px" />
          <Text fontSize="3xl" ml="10px">
            Cart
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Cart;
