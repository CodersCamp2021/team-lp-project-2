import { useParams } from 'react-router-dom';
import {
  Text,
  Box,
  Image,
  Spinner,
  Alert,
  AlertIcon,
  Flex,
  List,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProductDisplay = ({ updateCategory }) => {
  let { productId } = useParams();

  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState('');

  //getting productInfo object from firebase
  const getProduct = async (productId) => {
    const docRef = doc(db, 'products', productId);

    setIsLoading(true);
    setError(null);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      setProductInfo(docSnap.data());
      setImageURL(docSnap.data().images[0]);
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
      <Flex w="100%" justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Flex>
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
        <Flex flexDirection="column">
          <Text fontWeight="semibold" fontSize="35px" p="1%" pb="3%">
            {productInfo.name}
          </Text>
          <Flex>
            <Flex
              flexDirection="column"
              w="50%"
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                w="500px"
                h="500px"
                border="5px solid #f1f1f1"
                borderRadius="15px"
              >
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${imageURL}?alt=media`}
                  objectFit="contain"
                  p={3}
                  maxWidth="100%"
                  maxHeight="100%"
                />
              </Flex>

              <Flex w="80%">
                {productInfo.images.map((img) => (
                  <Image
                    key={img}
                    src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${img}?alt=media`}
                    objectFit="contain"
                    w="20%"
                    m={3}
                    border={
                      img === imageURL ? '3px solid #777' : '3px solid #f1f1f1'
                    }
                    p={1}
                    borderRadius="5px"
                    onClick={() => setImageURL(img)}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex></Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default ProductDisplay;
