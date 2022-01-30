import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import CartBackground from './CartBackground';
import { CloseIcon } from '@chakra-ui/icons';
import SingleProduct from './SingleProduct';

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
        <CloseIcon
          onClick={closeCart}
          boxSize="30px"
          position="absolute"
          top="30px"
          right="30px"
          cursor="pointer"
        />

        <Flex
          as="header"
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

        <Box bg="tomato" w="100%" h="90%" p={10} color="white">
          <Box bg="blue" w="100%" h="50%" p={10} color="white">
            <SingleProduct />
          </Box>
          <Box bg="green" w="100%" h="50%" p={10} color="white">
            <Text fontSize="3xl" ml="10px" align="center">
              Total: $951.93
            </Text>
            <Flex direction="column" align="center" justify="end">
              <Button w="20%" mt="25" colorScheme="teal">
                Button
              </Button>
              <Button w="20%" mt="5" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
