import { Link, useParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex } from '@chakra-ui/react';
import { TEST_ITEMS } from '../DummyItems';

const DummyProductList = () => {
  let { category } = useParams();

  const categoryFilter = (cat) => {
    if (cat) {
      return TEST_ITEMS.filter(
        (product) => product.type.toLowerCase() === cat.toLowerCase(),
      );
    } else {
      return TEST_ITEMS;
    }
  };

  return (
    <Flex mt={10} justifyContent="center">
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        maxWidth="80vw"
        gap={60}
        justifyItems="center"
        alignItems="center"
      >
        {categoryFilter(category).map((product) => (
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
