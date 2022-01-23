import { useParams } from 'react-router-dom';
import { Text, Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TEST_ITEMS } from '../DummyItems';

const DummyProduct = () => {
  const [displayItem, setDisplayItem] = useState('');
  let { productId } = useParams();

  const findItem = (id) => {
    setDisplayItem(TEST_ITEMS.find((item) => item.name === id));
  };

  useEffect(() => {
    findItem(productId);
  }, [productId]);

  return (
    <div style={{ width: '80vw' }}>
      <Box p={5} shadow="md" borderWidth="1px" maxWidth="240px">
        <Heading fontSize="xl">{displayItem.name}</Heading>
        <Text fontSize="md">Price: ${displayItem.price}</Text>
        <Text fontSize="md">Brand: {displayItem.brand}</Text>
        <Text fontSize="md">Product ID: {productId}</Text>
      </Box>
    </div>
  );
};

export default DummyProduct;
