import { Box, Flex, VStack, Text, Divider } from '@chakra-ui/react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDisplay from './ProductDisplay';
import { useState, createContext } from 'react';
import Categories from './categories/Categories';
import Filters from './filters/Filters';

export const CategoryContext = createContext(undefined);

const Store = () => {
  const [category, setCategory] = useState(undefined);
  const [productName, setProductName] = useState('');

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  let [searchParams] = useSearchParams();

  const handleSearch = () => {
    return searchParams.get('name');
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
      <Box w={{ base: '100%', sm: '100%', md: '60%' }}>
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
            isTruncated
            width="100%"
            textAlign="right"
            whiteSpace="nornal"
          >
            {productName
              ? productName
              : handleSearch()
              ? `Search results for: "${handleSearch()}"`
              : displayName[category]
              ? displayName[category]
              : 'All products'}
          </Text>
          <Divider zIndex="-1" />
        </Flex>
        <CategoryContext.Provider value={updateCategory}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:category" element={<ProductList />} />
            <Route
              path="/product/:productId"
              element={
                <ProductDisplay
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
