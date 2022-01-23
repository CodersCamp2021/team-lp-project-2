import { Center, Stack, Flex } from '@chakra-ui/react';
import { Routes, Route, NavLink } from 'react-router-dom';
import DummyProductList from './DummyProductList';
import DummyProductDisplay from './DummyProductDisplay';

const DummyStore = () => {
  return (
    <div>
      <Center bg="tomato" h="100px" color="white" fontSize="5xl">
        Dummy Store
      </Center>
      <Flex>
        <Stack>
          <NavLink to=".">All products</NavLink>
          <NavLink to="./CPU">CPU</NavLink>
          <NavLink to="./GPU">GPU</NavLink>
          <NavLink to="./Monitor">Monitor</NavLink>
        </Stack>
      </Flex>

      <Routes>
        <Route path="/" element={<DummyProductList />} />
        <Route path="/:category" element={<DummyProductList />} />
        <Route path="/product/:productId" element={<DummyProductDisplay />} />
      </Routes>
    </div>
  );
};

export default DummyStore;
