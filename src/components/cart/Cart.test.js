import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Cart from './Cart';
import { ChakraProvider } from '@chakra-ui/react';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('check if Cart is hidden by default', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );

  const cart = screen.getByTestId('cart');

  expect(cart).toHaveClass('hidden');
});

test('check if Cart gets visible after clicking cart icon', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );

  const cartIcon = screen.getByTestId('cartIcon');
  const cart = screen.getByTestId('cart');

  userEvent.click(cartIcon);

  expect(cart).toHaveClass('visible');
});

test('check if Cart gets closed after clicking on clone button', () => {
  render(<Cart />);

  const closeCartIcon = screen.getByTestId('closeCartIcon');
  const cart = screen.getByTestId('cart');

  userEvent.click(closeCartIcon);

  expect(cart).toHaveClass('hidden');
});
