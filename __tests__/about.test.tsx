import { screen, render } from '@testing-library/react';
import About from '../pages/about';

describe('<About />', () => {
  test('renders text and demo button', () => {
    render(<About />);

    const title = screen.getByText(/What is ezMTO/i);
    const demoButton = screen.getByRole('button', { name: /watch demos/i });

    expect(title).toBeInTheDocument();
    expect(demoButton).toBeInTheDocument();
  });
});
