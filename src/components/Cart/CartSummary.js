import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ClearButton from './ClearButton';
import BuyButton from './BuyButton';
import { ProductContext } from '../../components/ProductContext';

const CartSummary = ({ products, closeCart }) => {
  const { state } = useContext(ProductContext);

  function calculatePrice() {
    let sum = 0;
    for (let index = 0; index < state.products.length; index++) {
      sum = sum + state.products[index].price * state.products[index].amount;
    }
    return parseFloat(sum).toFixed(2);
  }
  return (
    <Box mt={2} borderTop="2px solid #999">
      <Flex
        pt={5}
        align="center"
        justify="center"
        display={products.length === 0 ? 'none' : 'flex'}
      >
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
          ${calculatePrice()}
        </Text>
      </Flex>
      <Flex pt={5} direction="row" align="center" justify="center" gap={5}>
        <ClearButton products={products} />
        <BuyButton closeCart={closeCart} products={products} />
      </Flex>
    </Box>
  );
};

export default CartSummary;
