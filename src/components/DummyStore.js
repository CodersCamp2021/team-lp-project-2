import { Center, Stack, Flex, Button } from '@chakra-ui/react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDisplay from './ProductDisplay';
import { useState, useEffect, createContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../firebase';

export const CategoryContext = createContext(undefined);
const db = getFirestore(app);

const DummyStore = () => {
  const [category, setCategory] = useState(undefined);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    let fetchedProducts = [];
    const booksRef = collection(db, 'products');
    const snapshot = await getDocs(booksRef);

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
      <Button>SET FILTERS</Button>
      <Flex justifyContent="space-around">
        <Stack mt={20}>
          <NavLink to=".">All products</NavLink>
          <NavLink to="./CPU">CPU</NavLink>
          <NavLink to="./GPU">GPU</NavLink>
          <NavLink to="./RAM">RAM</NavLink>
          <NavLink to="./Monitor">Monitor</NavLink>
        </Stack>

        <CategoryContext.Provider value={updateCategory}>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/:category"
              element={<ProductList products={products} />}
            />
            <Route
              path="/product/:productId"
              element={<ProductDisplay products={products} />}
            />
          </Routes>
        </CategoryContext.Provider>
      </Flex>
    </div>
  );
};

export default DummyStore;
