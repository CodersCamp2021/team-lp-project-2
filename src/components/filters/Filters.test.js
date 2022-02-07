import Filters from './Filters';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const mockBrands = {
  '': [],
  cpu: ['Intel', 'AMD'],
  gpu: ['Asus', 'Gigabyte', 'MSI'],
};

test('should render component correctly', () => {
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

test('should render submit button correctly', () => {
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

test('should render unchecked checkboxes after changing category', () => {
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

  expect(global.window.location.pathname).toEqual(`/store/cpu`);
  expect(global.window.location.search).toEqual(
    `?min=0&max=1500&brands=Intel%2CAMD`,
  );
});
