import { useParams } from 'react-router-dom';
import {
  Text,
  Box,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProductDisplay = () => {
  let { productId } = useParams();

  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //getting productInfo object from firebase
  const getProduct = async (productId) => {
    const docRef = doc(db, 'products', productId);

    setIsLoading(true);
    setError(null);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      setProductInfo(docSnap.data());
      setError(null);
    } else {
      setError('Product not found');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  if (isLoading) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      {productInfo && (
        <>
          <Heading fontSize="xl">{productInfo.name}</Heading>
          <Text fontSize="md">Price: ${productInfo.price}</Text>
          <Text fontSize="md">Brand: {productInfo.details.brand}</Text>
          <Text fontSize="md">Product ID: {productId}</Text>
        </>
      )}
    </Box>
  );
};

export default ProductDisplay;
