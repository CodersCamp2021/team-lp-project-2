import { Center } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import DummyProductList from './DummyProductList';
import DummyProductDisplay from './DummyProductDisplay';

const DummyStore = () => {
  return (
    <div>
      <Center bg="tomato" h="100px" color="white" fontSize="5xl">
        Dummy Store
      </Center>

      <Routes>
        <Route path="/" element={<DummyProductList />} />
        <Route path="/:category" element={<DummyProductList />} />
        <Route path="/product/:productId" element={<DummyProductDisplay />} />
      </Routes>
    </div>
  );
};

export default DummyStore;
