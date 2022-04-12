import { render, screen } from '@testing-library/react';
import LoginForm from '../components/forms/loginForm';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mockRouter from 'next-router-mock';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<LoginForm />', () => {
  test('renders all inputs and submit button', () => {
    render(<LoginForm deviceType="desktop" />);

    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('does not accept invalid inputs', async () => {
    const user = userEvent.setup();
    render(<LoginForm deviceType="desktop" />);

    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    const loginButton = screen.getByRole('button', { name: /login/i });

    // password input left empty
    await user.type(usernameInput, 'testusername');
    await user.click(loginButton);

    // ensures username input is still in document
    // this verifies form did not submit
    expect(usernameInput).toHaveValue('testusername');

    // username input left empty
    await user.clear(usernameInput);
    await user.type(passwordInput, 'testpassword');
    await user.click(loginButton);

    // ensures password input is still in document
    // this verifies form did not submit
    expect(passwordInput).toHaveValue('testpassword');

    // enters a correct username and submits form
    await user.type(usernameInput, 'testusername');
    await user.click(loginButton);

    // ensures form has submitted and cleared
    expect(usernameInput).toHaveValue('');
  });
});
