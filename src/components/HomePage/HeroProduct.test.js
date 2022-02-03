import HeroProduct from './HeroProduct';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test("Render HeroProduct component corectly", () => {
    render(
        <BrowserRouter>
          <HeroProduct />
        </BrowserRouter>,
      );
      const heroProduct = screen.getByTestId("HeroProduct")
      expect(heroProduct).toBeInTheDocument();
});

test("Render CarouselButton component corectly", () => {
    render(
        <BrowserRouter>
          <HeroProduct />
        </BrowserRouter>,
        );
        const applyButton = screen.getByRole('button')
        expect(applyButton).toBeInTheDocument();
});