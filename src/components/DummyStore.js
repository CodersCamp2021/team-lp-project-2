import { Center, Stack, Flex, Button } from '@chakra-ui/react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ProductList from './ProductList';
import DummyProductDisplay from './DummyProductDisplay';
import { useState, createContext } from 'react';

export const CategoryContext = createContext(undefined);

const DummyStore = () => {
  const [category, setCategory] = useState(undefined);

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Center bg="tomato" h="100px" color="white" fontSize="5xl">
        Dummy Store
      </Center>
      <Button>SET FILTERS</Button>
      <Flex justifyContent="space-around">
        <Stack mt={20}>
          <NavLink to=".">All products</NavLink>
          <NavLink to="./CPU">CPU</NavLink>
          <NavLink to="./GPU">GPU</NavLink>
          <NavLink to="./Monitor">Monitor</NavLink>
        </Stack>

        <CategoryContext.Provider value={updateCategory}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:category" element={<ProductList />} />
            <Route
              path="/product/:productId"
              element={<DummyProductDisplay />}
            />
          </Routes>
        </CategoryContext.Provider>
      </Flex>
    </div>
  );
};

export default DummyStore;
