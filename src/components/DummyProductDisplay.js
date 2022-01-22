import { useParams, Outlet } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
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
    <div>
      <Text fontSize="lg">Product Name:{displayItem.name}</Text>
      <Text fontSize="lg">Price: ${displayItem.price}</Text>
      <Text fontSize="lg">Brand: {displayItem.brand}</Text>
      <Text fontSize="lg">Product ID: {productId}</Text>
      <Outlet />
    </div>
  );
};

export default DummyProduct;
