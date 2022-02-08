import React from 'react';
import { Box } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';

const Products = ({ products, closeCart }) => {
  return (
    <Box px={10} color="#000" maxHeight="60%" overflowY="scroll">
      {products.map((product, index) => {
        const { id, name, price, amount, images } = product;
        return (
          <SingleProduct
            closeCart={closeCart}
            key={id}
            name={name}
            price={price}
            amount={amount}
            id={id}
            images={images}
            borderBottom={products.length - 1 === index ? '' : '1px solid #ccc'}
          />
        );
      })}
    </Box>
  );
};

export default Products;
