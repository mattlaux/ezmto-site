import LayoutApp from '../../components/layouts/layoutApp';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import routerConfig from '../../lib/routerConfig';
import { useRouter } from 'next/router';

/**
 *
 * @returns Dashboard page for logged in users
 */
const Dashboard: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  // Retrieves user's name from URL
  // User's name is attached by the login form
  useEffect(() => {
    setName(router.query.name as string);
  }, [router.query]);

  // Hits CSRF API route to retrieve a CSRF token
  // CSRF token only attached is user is authenticated
  useEffect(() => {
    const fetchCSRFToken = async () => {
      await fetch(`${routerConfig()}/api/auth/csrf`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Custom-Header': 'lollipop',
        },
        method: 'GET',
      });
    };
    fetchCSRFToken();
  });

  return (
    <LayoutApp>
      <h1>Welcome to the Dashboard {name}</h1>
      <p>No additional functionality for this site has been added.</p>
      <p>The primary goals were as follows:</p>
      <ol>
        <li>
          Learn how to develop a Node/Express API that can be consumed by a
          separate front-end
        </li>
        <li>
          Discover how to securely handle, store, and transmit sensitive data
        </li>
        <li>
          Reinforce my learning of front-end concepts such as Next.js and
          Bootstrap
        </li>
      </ol>
      <p>
        If you would like to explore some of my other projects please click on
        the images or links below.
      </p>
      <h2>RetailAlgoTrader</h2>
      <p>
        Full-stack Next.js web application focused on providing educational
        materials and resources for algorithmic traders. Authentication and
        Authorization are conducted through NextAuth.js. Online payments are
        conducted through Stripe. The API is constructed of Vercel serverless
        functions integrated with a PostgreSQL database. Testing done through
        Jest, React Testing Library, and Cypress.
      </p>
      <h2>ezMTO</h2>
      <p>
        Full-stack Django web application providing a tool for the pipe
        construction industry. Uses OCR through Pytesseract to analyze
        construction drawings and produce a completed material take-off.
      </p>
      <h2>Mock Reddit</h2>
      <p>
        Front-end web application that uses vanilla React, React Router, and
        Redux to display information from the Reddit API.
      </p>
    </LayoutApp>
  );
};

export default Dashboard;
