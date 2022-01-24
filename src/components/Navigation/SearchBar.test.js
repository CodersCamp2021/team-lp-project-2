import {render, fireEvent} from '@testing-library/react'
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';

test("Render SearchBar component corectly", () => {
    const { container } = render(
    <BrowserRouter>
        <SearchBar />
    </BrowserRouter>)
    const searchBar = container.querySelector('input')
    expect(searchBar).toBeInTheDocument();
});

test("Render SearchButton component corectly", () => {
    const { container } = render(
    <BrowserRouter>
        <SearchBar />
    </BrowserRouter>)
    const searchIcon = container.querySelector('button')
    expect(searchIcon).toBeInTheDocument();
});

test("Click on the search icon opens the correct tab", () => {
    
});

