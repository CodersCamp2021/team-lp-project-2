import Categories from './Categories';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("render component", () => {
const {getByText}  = render(<Categories />)
expect(getByText('Products')).toBeInTheDocument();
expect(getByText('Memory')).toBeInTheDocument();
})