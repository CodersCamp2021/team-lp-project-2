import Categories from './Categories';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("render component", () => {
const view  = render(<Categories />);
expect(view('Products')).toBeInTheDocument();
expect(view('Memory')).toBeInTheDocument();
})

