import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Imports bootstrap for use in all pages and components
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
