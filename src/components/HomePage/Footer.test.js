import Footer from './Footer';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test("Render Footer component corectly", () => {
    render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );
      const footer = screen.getByText("Free shipping")
      expect(footer).toBeInTheDocument();
});