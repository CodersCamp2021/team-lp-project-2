import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ClearButton from './ClearButton';
import BuyButton from './BuyButton';
import { ProductContext } from '../../components/ProductContext';

const CartSummary = () => {
  const { state } = useContext(ProductContext);

  function calculatePrice() {
    let sum = 0;
    for (let index = 0; index < state.products.length; index++) {
      sum = sum + state.products[index].price * state.products[index].amount;
    }
    return parseFloat(sum).toFixed(2);
  }
  return (
    <Box py={10} mt={2} borderTop="2px solid #999">
      <Flex align="center" justify="center">
        <Text
          pr={3}
          fontWeight="semibold"
          fontSize="3xl"
          align="center"
          color="#111"
        >
          Total:
        </Text>
        <Text color="#777" fontSize="3xl" align="center">
          {calculatePrice()}$
        </Text>
      </Flex>
      <Flex pt={5} direction="row" align="center" justify="center" gap={5}>
        <ClearButton />
        <BuyButton />
      </Flex>
    </Box>
  );
};

export default CartSummary;
