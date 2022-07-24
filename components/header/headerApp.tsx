import Link from 'next/link';
import { useRouter } from 'next/router';
import routerConfig from '../../lib/routerConfig';

/**
 *
 * @returns Header for pages that require login
 */
const HeaderApp = () => {
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
    <header className="container-fluid">
      <div className="row d-flex align-items-center">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <p className="ms-3 display-3">ezMTO</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/app/dashboard">
                  <a
                    className="nav-link text-secondary active"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary active"
                  aria-current="page"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
