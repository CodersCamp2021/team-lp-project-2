import Categories from './Categories';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const nameArray = [
  'All products',
  'CPUs',
  'Memory',
  'Monitors',
  'Graphic Cards',
  'Motherboards',
];

const nameUrlArray = ['', '/cpu', '/ram', '/monitor', '/gpu', '/motherboard'];

test('render categories correctly', () => {
  render(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>,
  );

  nameArray.forEach((name) => {
    const category = screen.getByText(name);
    expect(category).toBeInTheDocument();
  });
});

test('product Link changes url', () => {
  global.window = { location: { pathname: null } };
  render(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>,
  );

  nameArray.forEach((name, index) => {
    const category = screen.getByText(name);
    fireEvent.click(category);
    expect(global.window.location.pathname).toEqual(
      `/store${nameUrlArray[index]}`,
    );
  });
});
