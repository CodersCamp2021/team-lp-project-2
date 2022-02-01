import { Box, Flex, VStack } from '@chakra-ui/react';
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

  return (
    <Flex
      bg="white.100"
      justifyContent="center"
      flexWrap={{ base: 'wrap', md: 'nowrap', lg: 'nowrap' }}
    >
      <VStack
        mt={{ base: '60px', sm: '10px', md: '50px', lg: '60px' }}
        mr={20}
        ml={3}
        spacing="3vw"
        w={{ base: '100%', md: '250px', lg: '300px' }}
      >
        <Categories category={category} />
        <Filters category={category} />
      </VStack>
      <Box w={{ base: '100%', sm: '100%', md: '600px', lg: '1000px' }}>
        <CategoryContext.Provider value={updateCategory}>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/:category"
              element={<ProductList products={products} />}
            />
            <Route path="/product/:productId" element={<ProductDisplay />} />
          </Routes>
        </CategoryContext.Provider>
      </Box>
    </Flex>
  );
};

export default Store;
