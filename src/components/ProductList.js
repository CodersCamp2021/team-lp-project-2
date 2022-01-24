import { Link, useParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex, Heading } from '@chakra-ui/react';
import { useState, useContext, useEffect } from 'react';
import { CategoryContext } from './DummyStore';
// import queryString from 'query-string';

const ProductList = ({ products }) => {
  let { category } = useParams();
  const updateCategory = useContext(CategoryContext);
  // const queryParams = queryString.parse(window.location.search); // list of all query params as {key: value}

  const categoryFilter = () => {
    if (category) {
      return products.filter(
        (product) => product.type.toLowerCase() === category.toLowerCase(),
      );
    } else {
      return products;
    }
  };

  useEffect(() => {
    updateCategory(category);
  }, [category]);

  return (
    <Flex mt={10} justifyContent="center">
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        maxWidth="80vw"
        gap={60}
        justifyItems="center"
        alignItems="center"
      >
        {products.length > 0
          ? categoryFilter().map((product) => (
              <Link key={product.name} to={`/store/product/${product.id}`}>
                <Box
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  width="200px"
                  height="160px"
                  textAlign="center"
                >
                  <Heading fontSize="md">{product.name}</Heading>
                  <Text fontSize="md">${product.price}</Text>
                  <Text fontSize="md">{product.details.brand}</Text>
                </Box>
              </Link>
            ))
          : 'Loading...'}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductList;
