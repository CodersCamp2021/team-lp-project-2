import Filters from './Filters';
import { getByTestId, render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

test('Component renders correctly', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <Filters />
      </BrowserRouter>
    </ChakraProvider>,
  );

  const filters = screen.getByTestId('filters');
  expect(filters).toBeInTheDocument();
});

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

test('Checkboxes are unchecked after changing category', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <Filters category={'cpu'} />
      </BrowserRouter>
    </ChakraProvider>,
  );

  const checkboxes = screen.getAllByRole('checkbox');
  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });
});
