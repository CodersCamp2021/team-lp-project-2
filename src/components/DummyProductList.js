import { Link } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex } from '@chakra-ui/react';
import { TEST_ITEMS } from '../DummyItems';

const DummyProductList = () => {
  return (
    <Flex mt={10} justifyContent="center">
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        maxWidth="80vw"
        gap={60}
        justifyItems="center"
        alignItems="center"
      >
        {TEST_ITEMS.map((product) => (
          <Link key={product.name} to={product.name}>
            <Box
              bg="aquamarine"
              width="200px"
              height="160px"
              textAlign={['left', 'center']}
            >
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
