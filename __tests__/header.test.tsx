import { screen, render } from '@testing-library/react';
import Header from '../components/header/header';

describe('<Header />', () => {

  test('has ezMTO logo and home, about, contact, and login menu links', () => {
    render(<Header />);

    const logo = screen.getByText('ezMTO');
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    const loginLink = screen.getByRole('link', { name: /login/i });

    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();

  });

});