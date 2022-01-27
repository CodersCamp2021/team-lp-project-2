import { render, screen, fireEvent } from '@testing-library/react';
import Logo from './Logo';

test('Renders Logo Box component corectly', () => {
  render(<Logo />);
  const img = screen.getByAltText('Logo');
  expect(img).toBeInTheDocument();
});

test('click on Logo image changes url', () => {
  global.window = { location: { pathname: null } };

  render(<Logo />);
  const logo = screen.getByAltText('Logo');

  fireEvent.click(logo);

  expect(global.window.location.pathname).toEqual('/');
});
