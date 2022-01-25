import { render, screen, fireEvent } from '@testing-library/react';
import MenuLinks from './MenuLinks';
import { BrowserRouter } from 'react-router-dom';

test('Render Home MenuLinks component corectly', () => {
  render(
    <BrowserRouter>
      <MenuLinks />
    </BrowserRouter>,
  );
  const home = screen.getByText('Home');
  expect(home).toBeInTheDocument();
});

test('Render Store MenuLinks component corectly', () => {
  render(
    <BrowserRouter>
      <MenuLinks />
    </BrowserRouter>,
  );
  const store = screen.getByText('Store');
  expect(store).toBeInTheDocument();
});

test('store Link changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <MenuLinks />
    </BrowserRouter>,
  );
  const store = screen.getByText('Store');

  fireEvent.click(store);

  expect(global.window.location.pathname).toEqual('/store');
});

test('home Link changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <MenuLinks />
    </BrowserRouter>,
  );
  const home = screen.getByText('Home');

  fireEvent.click(home);

  expect(global.window.location.pathname).toEqual('/');
});