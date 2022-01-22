import { Link, useParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex } from '@chakra-ui/react';
import { TEST_ITEMS } from '../DummyItems';
import { useEffect, useState } from 'react';

const DummyProductList = () => {
  const [products, setProducts] = useState(TEST_ITEMS);
  let { category } = useParams();

  useEffect(() => {
    if (category) {
      setProducts(
        products.filter(
          (product) => product.type.toLowerCase() === category.toLowerCase(),
        ),
      );
    }
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
        {products.map((product) => (
          <Link key={product.name} to={`/store/product/${product.name}`}>
            <Box bg="teal.300" width="200px" height="160px" textAlign="center">
              <Text>{product.name}</Text>
              <Text>${product.price}</Text>
              <Text>{product.brand}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default DummyProductList;
