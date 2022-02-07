import { Route, Routes } from 'react-router-dom';
import HomeMain from './HomePage/HomeMain';
import Store from './Store';
import Navbar from './Navigation/Navbar';
import Cart from './Cart/Cart';
import { useState } from 'react';
import Footer from './HomePage/Footer';
import { Grid } from '@chakra-ui/react';
import { ProductProvider } from './ProductContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    document.body.style.overflow = 'hidden';
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    document.body.style.overflow = 'auto';
    setIsCartOpen(false);
  };

  return (
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
  );
}

export default App;
