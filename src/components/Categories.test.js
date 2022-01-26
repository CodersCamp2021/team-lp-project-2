import { Categories, Link } from './Categories';
import { render, fireEvent } from '@testing-library/react';


test('render component correctly', () => {
  const { screen } = render(
    <Categories>
      <Link />
    </Categories>,
  );
  const renderText = screen.getByRole('link');
  expect(renderText).toBeInTheDocument();
});

test('product Link changes url', () => {
  global.window = { location: { pathname: null } };
  const { screen } = render(
    <Categories>
      <Link />
    </Categories>,
  );
  const cpus = screen.getByText('CPUs');

  fireEvent.click(cpus);

  expect(global.window.location.pathname).toEqual('/store/cpu');
});
