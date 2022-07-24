import Link from 'next/link';

/**
 *
 * @returns Footer page used for all pages that do not require login
 */
const Footer = () => {
  return (
    <footer className="container-fluid bg-light overflow-hidden">
      <div className="row mt-5 pt-md-5 mb-3">
        <div className="d-md-none d-flex justify-content-center">
          <button className="btn btn-primary">
            <Link href="/signup">
              <a className="text-decoration-none text-white">
                Enroll in a free trial today!
              </a>
            </Link>
          </button>
        </div>
        <div className="d-none d-md-flex justify-content-center">
          <p className="fs-4">
            Enroll in a free trial!
            <span>
              <button className="btn btn-primary ms-3">
                <Link href="/signup">
                  <a className="text-decoration-none text-white">Click Here</a>
                </Link>
              </button>
            </span>
          </p>
        </div>
      </div>
      <nav className="nav pb-5 justify-content-center">
        <Link href="/">
          <a className="nav-link text-secondary" aria-current="page">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="nav-link text-secondary" aria-current="page">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="nav-link text-secondary" aria-current="page">
            Contact Us
          </a>
        </Link>
        <Link href="/privacyPolicy">
          <a className="nav-link text-secondary" aria-current="page">
            Privacy Policy
          </a>
        </Link>
        <Link href="/login">
          <a className="nav-link text-secondary" aria-current="page">
            Log In
          </a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
