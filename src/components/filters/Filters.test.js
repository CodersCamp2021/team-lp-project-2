import Filters from './Filters';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

test('Render submit button correctly', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <Filters />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const applyButton = screen.getByRole('button');
  expect(applyButton).toBeInTheDocument();
});
