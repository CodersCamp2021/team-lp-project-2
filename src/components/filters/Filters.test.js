import {Filters, Button} from './Filters';
import {render} from '@testing-library/react';

test("Render submit button correctly", () => {
    const { screen } = render(
    <Filters>
        <Button />
    </Filters>)
    const applyButton = screen.getByRole('button')
    expect(applyButton).toBeInTheDocument();
});