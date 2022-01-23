import {render, screen, fireEvent} from '@testing-library/react'
import MenuLinks from './MenuLinks';
import { BrowserRouter } from 'react-router-dom';

test("Render Home MenuLinks component corectly", () => {
    render(
        <BrowserRouter>
            <MenuLinks />
        </BrowserRouter>)
    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();
});

test("Render Store MenuLinks component corectly", () => {
    render(
        <BrowserRouter>
            <MenuLinks />
        </BrowserRouter>)
    const store = screen.getByText('Store');
    expect(store).toBeInTheDocument();
});

test("Home and Store Links are clickable", () => {
    render(
        <BrowserRouter>
            <MenuLinks />
        </BrowserRouter>);
    const home = screen.getByText('Store');
    const store = screen.getByText('Store');
    expect(fireEvent.click(home));
    expect(fireEvent.click(store));
});
