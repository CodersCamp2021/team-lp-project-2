import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DummyHome from './components/DummyHome';
import DummyStore from './components/DummyStore';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from '@chakra-ui/react';

function App() {
  return (
    <Router>
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
        <Route path="/store/*" element={<DummyStore />} />
      </Routes>
    </Router>
  );
}

export default App;
