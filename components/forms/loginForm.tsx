import React, { useState } from 'react';
import { useRouter } from 'next/router';
import validateLoginInfo from '../../lib/validateLoginInfo';

interface Props {
  deviceType: string;
}

/**
 * Renders the Login Form and handles submission
 *
 * @param props.deviceType - Desktop or Mobile to handle proper form rendering and validation
 * @returns login form with inputs: email, password.
 *
 * If data validation is successful user is redirected to their dashboard
 *
 * TODOs:
 *  1. Implement remember me and forgot your password functionality
 */
const LoginForm = (props: Props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleLoginInfo = async (event: React.FormEvent) => {
    const result = await validateLoginInfo(event, router);
    if (!result) setErrorMessage(true);
  };

  // Mobile form
  if (props.deviceType === 'mobile') {
    return (
      <form
        onSubmit={handleLoginInfo}
        className="form loginForm pb-4 needs-validation rounded pt-3"
        noValidate
        id="mobileForm"
      >
        <div>
          <label htmlFor="emailMobile" className="form-label">
            Email
          </label>
          <input
            id="emailMobile"
            name="email"
            type="text"
            required
            className="form-control"
          />
          <div className="invalid-feedback">This field is required.</div>
        </div>
        <div>
          <label htmlFor="passwordMobile" className="form-label">
            Password
          </label>
          <input
            id="passwordMobile"
            name="password"
            type="password"
            required
            className="form-control"
          />
          <div className="invalid-feedback">This field is required.</div>
        </div>
        {errorMessage && (
          <p className="text-danger">Incorrect username or password</p>
        )}
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    );
  }

  // Desktop form
  else {
    return (
      <form
        onSubmit={handleLoginInfo}
        className="form loginForm pb-4 needs-validation rounded pt-3"
        noValidate
        id="desktopForm"
      >
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="form-control"
          />
          <div className="invalid-feedback">This field is required.</div>
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="form-control"
          />
          <div className="invalid-feedback">This field is required.</div>
        </div>
        {errorMessage && (
          <p className="text-danger">Incorrect username or password</p>
        )}
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    );
  }
};

export default LoginForm;
