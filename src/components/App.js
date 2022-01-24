import { Text } from '@chakra-ui/react';
import Filters from './filters/Filters';

function App() {
  return (
    <>
      <Text>Hello world</Text>
      <Filters category={'cpu'} products={[]} />
    </>
  );
}

export default App;
