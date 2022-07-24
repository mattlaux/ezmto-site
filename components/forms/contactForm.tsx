import React from 'react';

/**
 * Not integrated with an email service. Simply clears information on successful form submission
 * @returns Contact form for contact page
 */
const ContactForm = () => {
  const handleContactInfo = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValidation = (await import('../../lib/formValidation')).default;
    const validated = formValidation(event);
    if (validated) (event.target as HTMLFormElement).reset();
  };

  return (
    <form
      onSubmit={handleContactInfo}
      className="form mb-5 pb-5 needs-validation bg-light rounded pt-3"
      noValidate
      id="contactForm"
    >
      <div className="d-none d-md-block">
        <div className="row m-3">
          <div className="col">
            <label htmlFor="employeeFirstName" className="form-label">
              Please Enter First Name
            </label>
            <input
              id="employeeFirstName"
              type="text"
              autoComplete="given-name"
              required
              className="form-control"
            />
            <div className="invalid-feedback">This field is required.</div>
          </div>
          <div className="col">
            <label htmlFor="employeeLastName" className="form-label">
              Please Enter Last Name
            </label>
            <input
              id="employeeLastName"
              type="text"
              autoComplete="family-name"
              required
              className="form-control"
            />
            <div className="invalid-feedback">This field is required.</div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col">
            <label htmlFor="employeeEmail" className="form-label">
              Please Enter Email
            </label>
            <input
              id="employeeEmail"
              type="email"
              autoComplete="email"
              required
              aria-describedby="emailHelp"
              className="form-control"
            />
            <div id="emailHelp" className="form-text text-white">
              We&apos;ll never share your email with anyone else.
            </div>
            <div className="invalid-feedback">This field is required.</div>
            <div className="invalid-feedback">
              Please ensure email is of form johnsmith@email.com
            </div>
          </div>
          <div className="col">
            <label htmlFor="employeePhoneNumber" className="form-label">
              Please Enter Phone Number
            </label>
            <input
              id="employeePhoneNumber"
              type="text"
              autoComplete="tel-national"
              className="form-control"
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col">
            <label htmlFor="employeePosition" className="form-label">
              Please Enter Position at Company
            </label>
            <input id="employeePosition" type="text" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="companyName" className="form-label">
              Please Enter Company Name
            </label>
            <input
              id="companyName"
              type="text"
              required
              className="form-control"
            />
            <div className="invalid-feedback">This field is required.</div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col">
            <label htmlFor="companyLocation" className="form-label">
              Please Enter Company Location
            </label>
            <input id="companyLocation" type="text" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="companyType" className="form-label">
              Please Select Type of Company
            </label>
            <select id="companyType" name="companyType" className="form-select">
              <option value="">--Please choose an option--</option>
              <option value="epc">EPC</option>
              <option value="fabrication shop">Fabrication Shop</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
        <div className="row m-3">
          <label htmlFor="additionalInfo" className="form-label">
            Please enter any additional info you would like us to know
          </label>
          <textarea
            rows={4}
            cols={10}
            id="additionalInfo"
            className="form-control"
          />
        </div>
        <div className="row text-center ms-4 me-4">
          <button type="submit" className="btn btn-primary mt-4">
            Submit Info
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
