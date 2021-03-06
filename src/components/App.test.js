import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
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

test('click on CPU category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const cpu = screen.getByText('CPUs');
  fireEvent.click(cpu);

  expect(global.window.location.pathname).toEqual('/store/cpu');
});

test('click on GPU category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const gpu = screen.getByText('Graphic Cards');
  fireEvent.click(gpu);

  expect(global.window.location.pathname).toEqual('/store/gpu');
});

test('click on RAM category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const ram = screen.getByText('Memory');
  fireEvent.click(ram);

  expect(global.window.location.pathname).toEqual('/store/ram');
});

test('click on Monitor category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const monitor = screen.getByText('Monitors');
  fireEvent.click(monitor);

  expect(global.window.location.pathname).toEqual('/store/monitor');
});
