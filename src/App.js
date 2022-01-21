import { Text } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DummyHome from './components/DummyHome';
import DummyStore from './components/DummyStore';

function App() {
  return (
    <Router>
      <Text>Hello world</Text>
      <DummyHome />
      <DummyStore />
    </Router>
  );
}

export default App;
