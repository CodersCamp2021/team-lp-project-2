import { Route, Routes } from 'react-router-dom';
import DummyHome from './DummyHome';
import Store from './Store';
import Navbar from './Navigation/Navbar';
import Cart from './Cart/Cart';
import { useState } from 'react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Navbar openCart={handleOpenCart} />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/store/*" element={<Store />} />
      </Routes>
      <Cart isCartOpen={isCartOpen} closeCart={handleCloseCart} />
    </>
  );
}

export default App;
