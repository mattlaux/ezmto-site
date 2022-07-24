import type { NextRouter } from 'next/router';
import routerConfig from '../lib/routerConfig';

/**
 *
 * @param event - Form submission event from login page
 * @param router - NextRouter instance from login page
 * @returns - False if signup fails. If login successful redirects to dashboard
 */
const validateSignupInfo = async (
  event: React.FormEvent,
  router: NextRouter
) => {
  event.preventDefault();
  // Custome form validation
  const formValidation = (await import('../lib/formValidation')).default;
  const validated = formValidation(event);
  if (validated) {
    type SignupDetails = EventTarget & {
      firstName: HTMLInputElement;
      lastName: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const target = event.target as SignupDetails;
    // Hit register API endpoint
    const res = await fetch(`${routerConfig()}/api/auth/register`, {
      body: JSON.stringify({
        first_name: target.firstName.value,
        last_name: target.lastName.value,
        email: target.email.value,
        password: target.password.value,
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'lollipop',
      },
      method: 'POST',
    });
    // if registration successful automatically hit login endpoint
    if (res.status === 200) {
      const res = await fetch(`${routerConfig()}/api/auth/login`, {
        body: JSON.stringify({
          email: target.email.value,
          password: target.password.value,
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Custom-Header': 'lollipop',
        },
        method: 'POST',
      });
      if (res.status === 200) router.push('/app/dashboard');
    }
    (event.target as HTMLFormElement).reset();
    return false;
  }
};

export default validateSignupInfo;
