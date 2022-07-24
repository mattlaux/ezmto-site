import Link from 'next/link';
import { useRouter } from 'next/router';
import routerConfig from '../../lib/routerConfig';

/**
 *
 * @returns Footer page for all pages that require login
 */
const FooterApp = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch(`${routerConfig()}/api/auth/logout`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'lollipop',
      },
      credentials: 'include',
      method: 'POST',
    });
    if (res.status === 200) {
      router.push('/');
    }
  };

  return (
    <footer className="container-fluid bg-light overflow-hidden">
      <nav className="nav pb-5 justify-content-center">
        <Link href="/app/dashboard">
          <a className="nav-link text-secondary" aria-current="page">
            Dashboard
          </a>
        </Link>
        <a
          className="nav-link text-secondary"
          aria-current="page"
          onClick={handleLogout}
        >
          Log Out
        </a>
      </nav>
    </footer>
  );
};

export default FooterApp;
