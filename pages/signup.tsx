import type { NextPage } from 'next';
import SignupForm from '../components/forms/signupForm';
import Link from 'next/link';
import SEO from '../components/SEO/seo';

/**
 *
 * @returns - Rendered login page including login form
 */
const Login: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://ezmto.com/login"
        openGraphType="website"
        schemaType="website"
        title="Login"
        description="Simplifying the pipe fabrication bid process from beginning to end. 
          Save time, energy, and money on material takeoffs, acquiring bids, and creating bid tabs."
        image="https://ezmto.com/images/chemicalPlantSocial.webp"
      />
      <main className="container-fluid">
        {/* Mobile Login page */}
        <section className="d-md-none row mt-5">
          <div className="col-1"></div>
          <article className="col-10 bg-white">
            <header>
              <h1 className="text-center">User Registration</h1>
            </header>
            <SignupForm deviceType="mobile"></SignupForm>
          </article>
        </section>

        {/* Desktop Login page */}
        <div className="row vh-100 d-none d-md-flex">
          <section className="col-6 bg-light d-flex align-items-center justify-content-center">
            <div className="row">
              <article className="col-12 bg-white rounded p-5">
                <header>
                  <h1 className="text-center">User Registration</h1>
                </header>
                <SignupForm deviceType="desktop"></SignupForm>
              </article>
            </div>
          </section>
          <section className="col-6">
            <div className="row text-left mt-5">
              <div className="col-2"></div>
              <aside className="col-8">
                <header>
                  <h2 className="display-4">
                    Create a free account. No payment info necessary and nothing
                    to install.
                  </h2>
                </header>
                <p className="fs-4">Free Account Features:</p>
                <ul className="fs-5">
                  <li>Trial Automatic Material Takeoffs</li>
                  <li>Trial quote and bidtab functionalities</li>
                  <li>Online training and demos</li>
                </ul>
                <button className="btn btn-primary">
                  <Link href="/signup">
                    <a className="text-decoration-none text-white">
                      Create Free Account
                    </a>
                  </Link>
                </button>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
