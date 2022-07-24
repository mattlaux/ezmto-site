import type { NextRouter } from 'next/router';
import routerConfig from './routerConfig';

/**
 *
 * @param event - Form submission event from login page
 * @param router - NextRouter instance from login page
 * @returns - False if login fails. If login successful redirects to dashboard
 */
const validateLoginInfo = async (
  event: React.FormEvent,
  router: NextRouter
) => {
  event.preventDefault();
  // Custom form validation
  const formValidation = (await import('./formValidation')).default;
  const validated = formValidation(event);
  if (validated) {
    type LoginDetails = EventTarget & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const target = event.target as LoginDetails;
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
    (event.target as HTMLFormElement).reset();
    if (res.status === 200) {
      const data = await res.json();
      router.push({
        pathname: '/app/dashboard',
        query: { name: data.name },
      });
    } else {
      return false;
    }
  }
};

export default validateLoginInfo;
