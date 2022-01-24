import {render, screen, fireEvent} from '@testing-library/react';
import Logo from './Logo';

test("Renders Logo Box component corectly", () => {
    render(<Logo />);
    const img = screen.getByAltText('Logo');
    expect(img).toBeInTheDocument();
});

test("Check if Logo element is clikable", () => {
    render(<Logo />);
    const img = screen.getByAltText('Logo');
    expect(fireEvent.click(img));
});
