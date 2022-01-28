import { Center, Stack, Flex } from '@chakra-ui/react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDisplay from './ProductDisplay';
import { useState, useEffect, createContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Filters from './filters/Filters';

export const CategoryContext = createContext(undefined);

const Store = () => {
  // eslint-disable-next-line
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
    <div>
      <Center bg="tomato" h="100px" color="white" fontSize="5xl">
        Dummy Store
      </Center>
      <Flex justifyContent="space-around">
        <Stack mt={20}>
          <NavLink to=".">All products</NavLink>
          <NavLink to="./cpu">CPU</NavLink>
          <NavLink to="./gpu">GPU</NavLink>
          <NavLink to="./ram">RAM</NavLink>
          <NavLink to="./monitor">Monitor</NavLink>
        </Stack>

        <Filters category={category} />

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
      </Flex>
    </div>
  );
};

export default Store;
