import { useParams } from 'react-router-dom';
import { Text, Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ProductDisplay = ({ products }) => {
  const [displayItem, setDisplayItem] = useState('');
  let { productId } = useParams();

  const findItem = () => {
    setDisplayItem(products.find((product) => product.id === productId));
  };

  useEffect(() => {
    findItem();
  }, [productId]);

  return (
    <div style={{ width: '80vw' }}>
      {displayItem && (
        <Box mt={20} p={5} shadow="md" borderWidth="1px" maxWidth="240px">
          <Heading fontSize="xl">{displayItem.name}</Heading>
          <Text fontSize="md">Price: ${displayItem.price}</Text>
          <Text fontSize="md">Brand: {displayItem.details.brand}</Text>
          <Text fontSize="md">Product ID: {productId}</Text>
        </Box>
      )}
    </div>
  );
};

export default ProductDisplay;
