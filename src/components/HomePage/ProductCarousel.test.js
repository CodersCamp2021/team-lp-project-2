import ProductCarousel from './ProductCarousel';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test("Render ProductCarousel component corectly", () => {
    render(
        <BrowserRouter>
          <ProductCarousel />
        </BrowserRouter>,
      );
      const carousel = screen.getByTestId("ProductCarousel")
      expect(carousel).toBeInTheDocument();
});