import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Spinner,
  Alert,
  AlertIcon,
  Flex,
  ListItem,
  Text,
  Button,
  useToast,
  UnorderedList,
} from '@chakra-ui/react';
import ChooseValue from './productDetails/ChooseValue';
import { FaShoppingCart } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useEffect, useState, useContext } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { ProductContext } from './ProductContext';
import { AllProductsContext } from './App';
import { delayLoading } from './utils';

const deepFreeze = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop]))
      deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};

const DetailsDictionary = deepFreeze({
  brand: 'Brand',
  model: 'Model',
  cpuSpeed: { name: 'CPU Speed', unit: '' },
  cpuSocket: 'CPU Socket',
  wattage: { name: 'Wattage', unit: 'W' },
  cacheSize: { name: 'Cache Size', unit: 'MB' },
  processorCount: 'Processor Count',
  ramType: 'Graphics RAM Type',
  ramSize: { name: 'Graphics RAM Size', unit: 'GB' },
  memoryClockSpeed: { name: 'Memory Clock Speed', unit: 'MHz' },
  gpuClockSpeed: { name: 'GPU Clock Speed', unit: 'MHz' },
  ramMemoryTechnology: 'RAM Memory Technology',
  memorySize: { name: 'Memory Size', unit: 'GB' },
  memorySpeed: { name: 'Memory Speed', unit: 'MHz' },
  chipsetType: 'Chipset Type',
  series: 'Series',
  displayMaximumResolution: 'Maximum Display Resolution',
  resolutionStandard: 'Resolution Standard',
  displaySize: { name: 'Display Size', unit: "''" },
  refreshRate: { name: 'Refresh Rate', unit: 'Hz' },
});

const ProductDisplay = ({ setProductName }) => {
  let { productId } = useParams();
  const products = useContext(AllProductsContext);
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [noOfProducts, setNoOfProducts] = useState(1);
  const { dispatch } = useContext(ProductContext);
  const toast = useToast();

  const showToast = () => {
    toast({
      duration: 3000,
      position: 'bottom-left',
      render: () => (
        <Box color="white" p={4} bg="purple.500" borderRadius="5px">
          <Flex alignItems="center" gap="10px">
            <BsCheckCircleFill />
            <Text fontWeight="bold">Products added to cart!</Text>
          </Flex>
          <Text fontSize={{ base: '20px', md: '15px' }}>
            Check if they have not escaped from there.
          </Text>
        </Box>
      ),
    });
  };

  //getting productInfo object from firebase
  const getProduct = async (productId) => {
    const docRef = doc(db, 'products', productId);
    setError(null);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProductInfo(docSnap.data());
      setImageURL(docSnap.data().images[0]);
      setProductName(docSnap.data().name);
      setError(null);
    } else {
      setError('Product not found');
    }
  };

  function handleAddManyProducts() {
    const manyIndex = products.findIndex((product) => product.id === productId);
    dispatch({
      type: 'ADD_MANY_PROD',
      payload: { product: products[manyIndex], count: parseInt(noOfProducts) },
    });
    showToast();
  }

  useEffect(() => {
    getProduct(productId);
    return () => {
      setProductName('');
    };
    //eslint-disable-next-line
  }, [productId]);

  useEffect(() => {
    const timer = delayLoading(setIsLoading, productInfo);
    return () => clearTimeout(timer);
  }, [productInfo]);

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
      {!isLoading ? (
        <Flex flexDirection="column" flexWrap="wrap">
          <Flex
            direction={{ base: 'column', '2xl': 'row' }}
            alignItems="center"
          >
            <Flex
              flexShrink="3"
              flexDirection="column"
              w="40%"
              justifyContent="center"
              alignItems="center"
              p={5}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                border="3px solid #f5f5f5"
                borderRadius="15px"
                boxShadow="md"
                w={{ base: '300px', md: '350px', lg: '400px' }}
                h={{ base: '300px', md: '350px', lg: '400px' }}
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
                    _hover={{ cursor: 'pointer' }}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex m={5} flexDirection="column" minW="=400px">
              <Text
                as="div"
                p="45px 0 10px 35px"
                fontSize="25px"
                fontWeight="normal"
                display="flex"
              >
                <Text fontWeight="semibold">Price:</Text>
                {`\u2002$${productInfo.price.toFixed(2)}`}
              </Text>
              <Text p="20px 0 10px 35px" fontSize="25px" fontWeight="semibold">
                Details:
              </Text>
              <UnorderedList pl={10} spacing={3}>
                {Object.keys(productInfo.details)
                  .filter(
                    (key) => key !== 'description' && key !== 'showOnHomepage',
                  )
                  .map((keyName) => (
                    <ListItem key={keyName}>
                      <Flex alignItems="center">
                        <Text fontSize="20px" fontWeight="500">
                          {(DetailsDictionary[keyName]?.name ||
                            DetailsDictionary[keyName]) + ':\u2002'}
                        </Text>
                        <Text fontSize="20px" color="gray.700">
                          {productInfo.details[keyName] +
                            (DetailsDictionary[keyName]?.unit || '')}
                        </Text>
                      </Flex>
                    </ListItem>
                  ))}
              </UnorderedList>
              <Flex
                py="10%"
                alignSelf="center"
                justifyContent="center"
                gap="20px"
                w={{ base: '300px', lg: '400px' }}
              >
                <ChooseValue setNoOfProducts={(val) => setNoOfProducts(val)} />
                <Button
                  variant="solid"
                  colorScheme="purple"
                  rightIcon={<FaShoppingCart />}
                  size="lg"
                  borderRadius="15px"
                  onClick={handleAddManyProducts}
                >
                  Add to cart
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex w="100%" justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="purple.500"
            size="xl"
          />
        </Flex>
      )}
    </Box>
  );
};

export default ProductDisplay;
