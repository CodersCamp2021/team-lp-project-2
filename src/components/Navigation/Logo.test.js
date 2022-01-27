import { render, screen, fireEvent } from '@testing-library/react';
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';

test('Renders Logo Box component corectly', () => {
  render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>,
  );
  const img = screen.getByAltText('Logo');
  expect(img).toBeInTheDocument();
});

test('click on Logo image changes url', () => {
  global.window = { location: { pathname: null } };

  render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>,
  );
  const logo = screen.getByAltText('Logo');

  fireEvent.click(logo);

  expect(global.window.location.pathname).toEqual('/');
});
