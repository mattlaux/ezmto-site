import { screen, render } from '@testing-library/react';
import Contact from '../pages/contact';

describe('<Contact />', () => {
  test('Renders appropriate text and form', () => {
    render(<Contact />);

    const header = screen.getByText(/contact us/i);
    const fourthInput = screen.getByRole('textbox', {
      name: /please enter phone number/i,
    });
    const submitButton = screen.getByRole('button', { name: /submit info/i });

    expect(header).toBeInTheDocument();
    expect(fourthInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
