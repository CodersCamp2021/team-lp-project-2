import { Route, Routes } from 'react-router-dom';
import HomeMain from './homepage/HomeMain';
import Store from './Store';
import Navbar from './navigation/Navbar';
import Cart from './cart/Cart';
import { useState, useEffect, createContext } from 'react';
import Footer from './homepage/Footer';
import { Grid } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ProductProvider } from './ProductContext';

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
    document.body.style.overflow = 'hidden';
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    document.body.style.overflow = 'auto';
    setIsCartOpen(false);
  };

  return (
    <AllProductsContext.Provider value={allProducts}>
      <ProductProvider>
        <Grid minHeight="100vh" gridTemplateRows="auto 1fr auto">
          <Navbar openCart={handleOpenCart} />
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/store/*" element={<Store />} />
          </Routes>
          <Cart isCartOpen={isCartOpen} closeCart={handleCloseCart} />
          <Footer />
        </Grid>
      </ProductProvider>
    </AllProductsContext.Provider>
  );
}

export default App;
