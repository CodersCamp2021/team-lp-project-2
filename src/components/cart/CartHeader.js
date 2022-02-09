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
      borderBottom="2px solid #999"
      position="relative"
      mb={2}
    >
      <FaShoppingCart size="35px" />
      <Text fontWeight="bold" fontSize="3xl" ml="15px">
        Cart
      </Text>

      <CloseIcon
        data-testid="closeCartIcon"
        onClick={closeCart}
        boxSize="25px"
        position="absolute"
        right="10px"
        cursor="pointer"
      />
    </Flex>
  );
};

export default CartHeader;
