import Filters from './Filters';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('should change url', () => {
  global.window = { location: { pathname: null } };
  window.scrollTo = jest.fn();

  render(
    <ChakraProvider>
      <BrowserRouter>
        <Filters category={'cpu'} />
      </BrowserRouter>
    </ChakraProvider>,
  );

  const checkboxes = mockBrands['cpu'].map((brand) =>
    screen.getByLabelText(brand),
  );

  checkboxes.forEach((checkbox) => {
    userEvent.click(checkbox);
  });

  const apply = screen.getByTestId('applyButton');
  userEvent.click(apply);

  expect(global.window.location.pathname).toEqual(
    `/store/cpu?min=0&max=1500&brands=Intel%2CAMD`,
  );
});
