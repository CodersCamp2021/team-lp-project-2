import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const CartAmount = () => {
  return (
    <Flex
      justify="center"
      align="center"
      position="absolute"
      right="0"
      bottom="0"
      transform="translate(60%, 60%)"
      width="30px"
      height="30px"
      zIndex="1000"
      bg="purple.500"
      color="whiteAlpha.900"
      borderRadius="50%"
    >
      <Text>5</Text>
    </Flex>
  );
};

export default CartAmount;
