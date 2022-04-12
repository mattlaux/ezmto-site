import { screen, render } from '@testing-library/react';
import Login from '../pages/login';

describe('<Login />', () => {
  test('renders appropriate text and form', () => {
    render(<Login />);

    const signupPitch = screen.getByText(/create a free account/i);
    const userNameInput = screen.getByRole('textbox', { name: /username/i });
    const loginButton = screen.getAllByRole('button', { name: /login/i });
    const numLinks = screen.getAllByRole('link');

    expect(signupPitch).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    // login button will appear twice in DOM. Once for desktops and once for mobiles
    expect(loginButton).toHaveLength(2);
    // DOM contains both desktop and mobile. Desktop has 2 links. Mobile has 1 link
    expect(numLinks).toHaveLength(3);
  });
});
