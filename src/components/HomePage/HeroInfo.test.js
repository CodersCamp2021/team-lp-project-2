import HeroInfo from './HeroInfo';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//test("Render HeroInfo component corectly", () => {
//    render(
//        <BrowserRouter>
//          <HeroInfo />
//        </BrowserRouter>,
//      );
//      const heroInfo = screen.getByTestId("HeroInfo")
//      expect(heroInfo).toBeInTheDocument();
//});