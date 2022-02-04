import { Route, Routes } from 'react-router-dom';
import HomeMain from './HomePage/HomeMain';
import Store from './Store';
import Navbar from './Navigation/Navbar';
import Cart from './Cart/Cart';
import { useState, useEffect, createContext } from 'react';
import Footer from './HomePage/Footer';
import { Grid } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const AllProductsContext = createContext([]);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    let fetchedProducts = [];
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      fetchedProducts.push({ ...data, id: doc.id });
    });
    setAllProducts(fetchedProducts);
  };

  useEffect(() => {
    try {
      getAllProducts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <Grid minHeight="100vh" gridTemplateRows="auto 1fr auto">
      <AllProductsContext.Provider value={allProducts}>
        <Navbar openCart={handleOpenCart} />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/store/*" element={<Store />} />
        </Routes>
        <Cart isCartOpen={isCartOpen} closeCart={handleCloseCart} />
      </AllProductsContext.Provider>
      <Footer />
    </Grid>
  );
}

export default App;
