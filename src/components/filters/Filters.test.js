import Filters from './Filters';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const mockBrands = {
  '': [],
  cpu: ['Intel', 'AMD'],
  gpu: ['Asus', 'Gigabyte', 'MSI'],
};

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
  for (const category in mockBrands) {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <Filters category={category} />
        </BrowserRouter>
      </ChakraProvider>,
    );

    let checkboxes = [];
    for (const brand of mockBrands[category]) {
      checkboxes.push(screen.getByLabelText(brand));
    }

    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
    checkboxes = [];
  }
});
