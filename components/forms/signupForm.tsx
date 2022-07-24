import React, { useState } from 'react';
import { useRouter } from 'next/router';
import validateSignupInfo from '../../lib/validateSignupInfo';

interface Props {
  deviceType: string;
}

/**
 * Renders the Signup Form and handles submission
 *
 * @param props.deviceType - Desktop or Mobile to handle proper form rendering and validation
 * @returns signup form with inputs: first name, last name, email, and password
 *
 * If data validation is successful user is redirected to their dashboard
 */
const SignupForm = (props: Props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSignupInfo = async (event: React.FormEvent) => {
    const result = await validateSignupInfo(event, router);
    if (!result) setErrorMessage(true);
  };

  // Mobile form
  if (props.deviceType === 'mobile') {
    return (
      <form
        onSubmit={handleSignupInfo}
        className="form needs-validation rounded"
        noValidate
        id="mobileForm"
      >
        <label htmlFor="firstNameMobile" className="form-label">
          First Name
        </label>
        <input
          id="firstNameMobile"
          type="text"
          autoComplete="given-name"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
        <label htmlFor="lastNameMobile" className="form-label mt-3">
          Last Name
        </label>
        <input
          id="lastNameMobile"
          type="text"
          autoComplete="family-name"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
        <label htmlFor="emailMobile" className="form-label mt-3">
          Email
        </label>
        <input
          id="emailMobile"
          type="email"
          autoComplete="email"
          required
          aria-describedby="emailHelp"
          className="form-control"
        />
        <div id="emailHelp" className="form-text text-secondary">
          We will never share your email.
        </div>
        <div className="invalid-feedback">This field is required.</div>
        <div className="invalid-feedback">
          Please ensure email is of form johnsmith@email.com
        </div>
        <label htmlFor="passwordMobile" className="form-label pt-3">
          Password
        </label>
        <input
          id="passwordMobile"
          type="password"
          required
          aria-describedby="passwordHelp"
          className="form-control"
          minLength={8}
        />
        <div id="passwordHelp" className="form-text text-secondary">
          Must be at least 8 characters long.
        </div>
        <div className="invalid-feedback">This field is required.</div>
        {errorMessage && (
          <p className="text-danger">
            Unable to create account. Please try again.
          </p>
        )}
        <div className="row text-center ms-4 me-4">
          <button type="submit" className="btn btn-warning mt-4">
            Submit Info
          </button>
        </div>
      </form>
    );
  }

  // Desktop form
  else {
    return (
      <form
        onSubmit={handleSignupInfo}
        className="form needs-validation rounded"
        noValidate
        id="desktopForm"
      >
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          autoComplete="given-name"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
        <label htmlFor="lastName" className="form-label mt-3">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          autoComplete="family-name"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
        <label htmlFor="email" className="form-label mt-3">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby="emailHelp"
          className="form-control"
        />
        <div id="emailHelp" className="form-text text-secondary">
          We will never share your email.
        </div>
        <div className="invalid-feedback">This field is required.</div>
        <div className="invalid-feedback">
          Please ensure email is of form johnsmith@email.com
        </div>
        <label htmlFor="password" className="form-label pt-3">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          aria-describedby="passwordHelp"
          className="form-control"
          minLength={8}
        />
        <div id="passwordHelp" className="form-text text-secondary">
          Must be at least 8 characters long.
        </div>
        <div className="invalid-feedback">This field is required.</div>
        {errorMessage && (
          <p className="text-danger">
            Unable to create account. Please try again.
          </p>
        )}
        <div className="row text-center ms-4 me-4">
          <button type="submit" className="btn btn-warning mt-4">
            Submit Info
          </button>
        </div>
      </form>
    );
  }
};

export default SignupForm;
