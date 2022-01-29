import { Route, Routes } from 'react-router-dom';
import DummyHome from './DummyHome';
import Store from './Store';
import Navbar from './Navigation/Navbar';
import Footer from './HomePage/Footer';
import { Grid } from '@chakra-ui/react';

function App() {
  return (
    <Grid minHeight="100vh" gridTemplateRows="auto 1fr auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/store/*" element={<Store />} />
      </Routes>
      <Footer />
    </Grid>
  );
}

export default App;
