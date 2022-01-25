import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Filters from './filters/Filters';

function App() {
  const [boolean, setBoolean] = useState(true);

  return (
    <>
      <Text>Hello world</Text>
      <Button onClick={() => setBoolean(!boolean)}>Change category!</Button>
      <Filters category={boolean ? 'cpu' : 'gpu'} products={[]} />
    </>
  );
}

export default App;
