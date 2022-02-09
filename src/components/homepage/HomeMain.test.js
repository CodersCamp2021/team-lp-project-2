import HomeMain from './HomeMain';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

test('Render HomeMain component corectly', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <HomeMain />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const homeMain = screen.getByTestId('HomeMain');
  expect(homeMain).toBeInTheDocument();
});
