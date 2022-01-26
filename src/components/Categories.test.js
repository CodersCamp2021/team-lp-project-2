import Categories from './Categories';
import { render } from '@testing-library/react';

test("render component correctly", () => {
const { screen }  = render(<Categories />);
const renderText = screen.getByRole('link');
expect(renderText).toBeInTheDocument();
})

