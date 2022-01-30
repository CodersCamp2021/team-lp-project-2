import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ClearButton from './ClearButton';
import BuyButton from './BuyButton';

const CartSummary = () => {
  return (
    <Box bg="green" w="100%" h="50%" py={10} color="white">
      <Text fontSize="3xl" mt="15%" align="center">
        Total: $951.93
      </Text>
      <Flex  direction="column" align="center" justify="end">
        <ClearButton/>
        <BuyButton/>    
      </Flex>
    </Box>
  );
};

export default CartSummary;
