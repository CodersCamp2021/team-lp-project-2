import { Box, Flex, Spacer, Text, VStack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDisplay from './ProductDisplay';
import { useState, useEffect, createContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Categories from './Categories';
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
    <Flex bg="red">
      <VStack spacing="5vw">
        <Categories category={category} />
        <Filters category={category} />
      </VStack>
      <Spacer />
      <Box>
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
    // <div>
    //   <Flex gap="9%">
    //     <Categories
    //       justifyContent="left"
    //       maxW="container.sm"
    //       mt={20}
    //       category={category}
    //     />
    //     <Text>text</Text>
    //     <CategoryContext.Provider value={updateCategory}>
    //       <Routes>
    //         <Route path="/" element={<ProductList products={products} />} />
    //         <Route
    //           path="/:category"
    //           element={<ProductList products={products} />}
    //         />
    //         <Route path="/product/:productId" element={<ProductDisplay />} />
    //       </Routes>
    //     </CategoryContext.Provider>
    //   </Flex>
    // </div>
  );
};

export default Store;
