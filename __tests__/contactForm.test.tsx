import { screen, render } from '@testing-library/react';
import ContactForm from '../components/forms/contactForm';
import userEvent from '@testing-library/user-event';

describe('<ContactForm />', () => {
  test('renders all inputs and submit button', () => {
    render(<ContactForm />);

    const numInputs = screen.getAllByRole('textbox');
    const selectInput = screen.getByRole('combobox');
    const submitButton = screen.getByRole('button', { name: /submit info/i });

    expect(numInputs).toHaveLength(8);
    expect(selectInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('does not accept invalid inputs', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const firstNameInput = screen.getByRole('textbox', { name: /first name/i });
    const lastNameInput = screen.getByRole('textbox', { name: /last name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const companyNameInput = screen.getByRole('textbox', {
      name: /company name/i,
    });
    const submitButton = screen.getByRole('button', { name: /submit info/i });

    // Email input entered incorrectly
    await user.type(firstNameInput, 'Billy');
    await user.type(lastNameInput, 'Bob');
    await user.type(emailInput, 'billybob');
    await user.type(companyNameInput, 'billybob inc');
    await user.click(submitButton);

    // Ensures first name input is still in document
    // This verifies form did not submit
    expect(firstNameInput).toHaveValue('Billy');

    // Enters a correct email and submits form
    await user.type(emailInput, 'billybob@fdsa.com');
    await user.click(submitButton);

    // Ensures form has submitted and cleared
    expect(firstNameInput).toHaveValue('');
  });
});
