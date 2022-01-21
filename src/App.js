import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DummyHome from './components/DummyHome';
import DummyStore from './components/DummyStore';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Breadcrumb separator={false}>
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
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/store" element={<DummyStore />} />
      </Routes>
    </Router>
  );
}

export default App;
