import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('click on CPU category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const cpu = screen.getByText('CPU');
  fireEvent.click(cpu);

  expect(global.window.location.pathname).toEqual('/store/CPU');
});

test('click on GPU category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const gpu = screen.getByText('GPU');
  fireEvent.click(gpu);

  expect(global.window.location.pathname).toEqual('/store/GPU');
});

test('click on RAM category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const ram = screen.getByText('RAM');
  fireEvent.click(ram);

  expect(global.window.location.pathname).toEqual('/store/RAM');
});

test('click on Monitor category changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const store = screen.getByText('Store');
  fireEvent.click(store);
  const monitor = screen.getByText('Monitor');
  fireEvent.click(monitor);

  expect(global.window.location.pathname).toEqual('/store/Monitor');
});
