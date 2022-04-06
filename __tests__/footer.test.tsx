import { screen, render } from '@testing-library/react';
import Footer from '../components/footer/footer';

describe('<Footer />', () => {

  test('has call-to-action with button', () => {
    render(<Footer />);

    const cTAMessage = screen.getByText(/enroll in a free trial today!/i);
    const cTAButton = screen.getByRole('button', { name: /click here/i });

    expect(cTAMessage).toBeInTheDocument();
    expect(cTAButton).toBeInTheDocument();

  });

  test('has menu with home, about, contact, privacy policy, and login links', () => {
    render(<Footer />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    const privacyPolicyLink = screen.getByRole('link', { name: /privacy policy/i });
    const logInLink = screen.getByRole('link', { name: /log in/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(logInLink).toBeInTheDocument();

  });
});