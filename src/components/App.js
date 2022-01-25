import { Route, Routes } from 'react-router-dom';
import DummyHome from './DummyHome';
import Store from './Store';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from '@chakra-ui/react';

function App() {
  return (
    <>
      <Center>
        <Breadcrumb separator={false} fontSize="40px" color="gray.500">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/store">
              Store
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/store/*" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
