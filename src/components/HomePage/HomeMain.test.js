import HomeMain from './HomeMain';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test("Render HomeMain component corectly", () => {
    render(
        <BrowserRouter>
          <HomeMain />
        </BrowserRouter>,
      );
      const homeMain = screen.getByTestId("HomeMain")
      expect(homeMain).toBeInTheDocument();
});