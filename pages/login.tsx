/**
 *
 * @param - None
 * @returns - Rendered login page including login form
 *
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/forms/loginForm';
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login | ezMTO</title>
        <meta name="description" content="Login to ezMTO's web application" />
      </Head>

      <main className="container-fluid">
        {/* Mobile Login page */}
        <section className="d-md-none row mt-5">
          <div className="col-1"></div>
          <article className="col-10 bg-white">
            <header>
              <h1 className="text-center">User Login</h1>
            </header>
            <LoginForm deviceType="mobile"></LoginForm>
            <div className="row mt-3">
              <p>Remember Me</p>
            </div>
            <hr className="solid mb-3" />
            <div className="row">
              <p>Forgot Your Password?</p>
            </div>
          </article>
          <aside className="row mt-3">
            <div className="col-1"></div>
            <div className="col-10 text-center">
              <p>
                Not a customer?
                <span>
                  <Link href="/signup">
                    <a className="btn btn-primary ms-3">Try for Free</a>
                  </Link>
                </span>
              </p>
            </div>
          </aside>
        </section>

        {/* Desktop Login page */}
        <div className="row vh-100 d-none d-md-flex">
          <section className="col-6 bg-light d-flex align-items-center justify-content-center">
            <div className="row">
              <article className="col-12 bg-white rounded p-5">
                <header>
                  <h1 className="text-center">User Login</h1>
                </header>
                <LoginForm deviceType="desktop"></LoginForm>
                <p>Remember Me</p>
                <hr className="solid mb-3" />
                <p>Forgot Your Password?</p>
              </article>
              <aside className="row mt-3 d-flex align-items-center">
                <div className="col-6 mt-3 d-flex justify-content-end">
                  <p>Not a customer?</p>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <Link href="/signup">
                    <a className="btn btn-primary">Try for Free</a>
                  </Link>
                </div>
              </aside>
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
                <Link href="/signup">
                  <a className="btn btn-primary">Create Free Account</a>
                </Link>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
