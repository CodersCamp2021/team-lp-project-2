import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ClearButton from './ClearButton';
import BuyButton from './BuyButton';

const CartSummary = () => {
  return (
    <Box py={10} color="#000">
      <Text fontSize="3xl" mt="15%" align="center">
        Total: $951.93
      </Text>
      <Flex direction="column" align="center" justify="end">
        <ClearButton />
        <BuyButton />
      </Flex>
    </Box>
  );
};

export default CartSummary;
