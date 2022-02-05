import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Spinner,
  Alert,
  AlertIcon,
  Flex,
  List,
  ListItem,
  ListIcon,
  Text,
  Button,
} from '@chakra-ui/react';
import ChooseValue from './productDetails/ChooseValue';
import { FaAngleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProductDisplay = ({ setProductName }) => {
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
      setProductName(docSnap.data().name);
      setError(null);
    } else {
      setError('Product not found');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getProduct(productId);
    return () => {
      setProductName('');
    };
    //eslint-disable-next-line
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
          <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center">
            <Flex
              className="obrazek"
              flexShrink="3"
              flexDirection="column"
              w="50%"
              justifyContent="center"
              alignItems="center"
              p={5}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                minWidth="300px"
                minHeight="300px"
                border="3px solid #f5f5f5"
                borderRadius="15px"
                boxShadow="md"
              >
                <Image
                  src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${imageURL}?alt=media`}
                  objectFit="contain"
                  p={3}
                  maxWidth="100%"
                  maxHeight="100%"
                />
              </Flex>

              <Flex w="80%" justify="center">
                {productInfo.images.map((img) => (
                  <Image
                    key={img}
                    src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${img}?alt=media`}
                    objectFit="contain"
                    w="60px"
                    m={3}
                    border={
                      img === imageURL ? '2px solid #777' : '2px solid #f1f1f1'
                    }
                    p={1}
                    borderRadius="5px"
                    onClick={() => setImageURL(img)}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex w="50%" m={5} flexDirection="column">
              <Text p="40px 0 10px 35px" fontSize="25px" fontWeight="semibold">
                Details:
              </Text>
              <List pl={10} spacing={3}>
                {Object.keys(productInfo.details)
                  .filter(
                    (key) => key !== 'description' && key !== 'showOnHomepage',
                  )
                  .map((keyName) => (
                    <ListItem key={keyName}>
                      <Flex alignItems="center">
                        <ListIcon size={5} as={FaAngleRight} />
                        <Text fontSize="20px" fontWeight="500">
                          {keyName}:
                        </Text>
                        <Text fontSize="20px" color="gray.700">
                          {productInfo.details[keyName]}
                        </Text>
                      </Flex>
                    </ListItem>
                  ))}
              </List>
              <Flex
                py="10%"
                direction="column"
                alignSelf="center"
                justifyContent="space-around"
                gap="10px"
              >
                <ChooseValue />
                <Button colorScheme="purple" py="5px" px="5px">
                  Add to cart!
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default ProductDisplay;
