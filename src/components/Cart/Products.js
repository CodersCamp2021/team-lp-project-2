import React from 'react';
import { Box } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
  return (
    <Box bg="blue" w="100%" h="50%" p={10} color="white">
      {products.map((product) => {
        const { id, name, price } = product;
        return <SingleProduct key={id} id={id} name={name} price={price} />;
      })}
    </Box>
  );
};

export default Products;
