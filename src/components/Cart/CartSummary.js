import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ClearButton from './ClearButton';
import BuyButton from './BuyButton';
import { ProductsContex } from '../../components/ProductContex';

const CartSummary = () => {
  const { state } = useContext(ProductsContex);

  function calculatePrice() {
    let sum = 0;
    for (let index = 0; index < state.products.length; index++) {
      sum = sum + state.products[index].price * state.products[index].amount;
    }
    return sum;
  }
  return (
    <Box py={10} color="#000">
      <Text fontSize="3xl" align="center">
        Total: {calculatePrice()}$
      </Text>
      <Flex direction="column" align="center" justify="end">
        <ClearButton />
        <BuyButton />
      </Flex>
    </Box>
  );
};

export default CartSummary;
