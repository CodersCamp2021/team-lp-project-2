import { Box, Flex, VStack, Text, Divider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDisplay from './ProductDisplay';
import { useState, useEffect, createContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Categories from './categories/Categories';
import Filters from './filters/Filters';

export const CategoryContext = createContext(undefined);

const Store = () => {
  const [category, setCategory] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');

  const getAllProducts = async () => {
    let fetchedProducts = [];
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      fetchedProducts.push({ ...data, id: doc.id });
    });
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    try {
      getAllProducts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const displayName = {
    cpu: 'CPUs',
    gpu: 'Graphics Cards',
    ram: 'Memory',
    monitor: 'Monitors',
    motherboard: 'Motherboards',
  };

  return (
    <Flex
      bg="white.100"
      justifyContent="center"
      flexWrap={{ base: 'wrap', md: 'nowrap', lg: 'nowrap' }}
    >
      <VStack
        mt={{ base: '0', md: '50px' }}
        mr={{ base: '3px', sm: '30px' }}
        ml={3}
        spacing="3vw"
        w={{ base: '100%', md: '300px', lg: '330px' }}
      >
        <Categories category={category} />
        <Filters category={category} />
      </VStack>
      <Box w={{ base: '100%', sm: '100%', md: '600px', lg: '1000px' }}>
        <Flex
          p={{ base: '20px', md: '4% 0 2% 3%' }}
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Text
            pr={5}
            fontSize={{ base: '40px', md: '40px' }}
            fontWeight="bold"
            alignSelf={{ base: 'center', md: 'flex-end' }}
          >
            {productName
              ? productName
              : displayName[category]
              ? displayName[category]
              : 'All products'}
          </Text>
          <Divider />
        </Flex>
        <CategoryContext.Provider value={updateCategory}>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/:category"
              element={<ProductList products={products} />}
            />
            <Route
              path="/product/:productId"
              element={
                <ProductDisplay
                  products={products}
                  setProductName={(productName) => setProductName(productName)}
                />
              }
            />
          </Routes>
        </CategoryContext.Provider>
      </Box>
    </Flex>
  );
};

export default Store;
