import React from 'react';
import { Box } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
  return (
    <Box bg="blue" w="100%" h="50%" p={10} color="white">
      {products.map((product) => {
        const { id, name, price, amount } = product;
        return (
          <SingleProduct key={id} name={name} price={price} amount={amount} />
        );
      })}
    </Box>
  );
};

export default Products;
