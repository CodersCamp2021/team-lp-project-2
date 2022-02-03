import { Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const ProductPreview = ({ product }) => {
  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <Link key={product.name} to={`/store/product/${product.id}`}>
      <Flex
        p={5}
        flexDirection="column"
        justifyContent="center"
        shadow="md"
        borderWidth="1px"
        width="200px"
        height="160px"
        textAlign="center"
      >
        <Heading fontSize="md">{product.name}</Heading>
        <Text fontSize="md">${product.price}</Text>
        <Text fontSize="md">{product.details.brand}</Text>
      </Flex>
    </Link>
  );
};

export default ProductPreview;
