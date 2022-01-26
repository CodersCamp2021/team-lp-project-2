import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('click on Store image changes url', () => {
  global.window = { location: { pathname: null } };

  render(<App />);
  const store = screen.getByText('Store');

  fireEvent.click(store);

  expect(global.window.location.pathname).toEqual('/store');
});
