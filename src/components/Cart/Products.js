import React from 'react';
import { Box } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';

const dummyProducts = [
  {
    id: '1ZaZ9ciAQ1r5SQjgEb7J',
    name: 'Intel Core i9-9900KF',
    price: 276.32,
    amount: 1,
  },
  {
    id: '2E77PN30gTjkA4T8QjOM',
    name: 'Corsair CMW32GX4M2E3200C16',
    price: 59.99,
    amount: 4,
  },
  {
    id: '5cc6UzJixdCcUsUPoEkF',
    name: 'SAMSUNG 23.5” CF396 Curved Computer Monitor',
    price: 169.99,
    amount: 1,
  },
  {
    id: '6G5uJAppKfO0Aprucdx2',
    name: 'AMD Ryzen 7 5800X',
    price: 329.78,
    amount: 6,
  },
];

const Products = () => {
  return (
    <Box bg="blue" w="100%" h="50%" p={10} color="white">
      {dummyProducts.map((product) => {
        const { id, name, price } = product;
        return <SingleProduct key={id} id={id} name={name} price={price} />;
      })}
    </Box>
  );
};

export default Products;
