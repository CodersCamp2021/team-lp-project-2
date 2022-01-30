import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { CloseIcon } from '@chakra-ui/icons';

const CartHeader = ({ closeCart }) => {
  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      pb="20px"
      borderBottom="1px solid black"
      position="relative"
    >
      <FaShoppingCart size="35px" />
      <Text fontSize="3xl" ml="10px">
        Cart
      </Text>

      <CloseIcon
        onClick={closeCart}
        boxSize="30px"
        position="absolute"
        right="10px"
        cursor="pointer"
      />
    </Flex>
  );
};

export default CartHeader;
