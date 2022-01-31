import React from 'react';
import { Box } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
  return (
    <Box w="100%" h="50%" p={10} color="#000">
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
