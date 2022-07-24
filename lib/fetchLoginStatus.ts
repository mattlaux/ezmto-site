import routerConfig from './routerConfig';

/**
 * Verifies user is authenticated before allowing access to restriced pages
 * @returns response from isLoggedIn api route
 */
const fetchLoginStatus = async () => {
  const res = await fetch(`${routerConfig()}/api/auth/isLoggedIn`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'lollipop',
    },
    mode: 'cors',
  });
  return res;
};

export default fetchLoginStatus;
