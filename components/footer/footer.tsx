const Footer = () => {
  return (
    <footer className="container-fluid bg-light overflow-hidden">
      <div className="row mt-5 pt-md-5 mb-3">
        <div className="d-md-none d-flex justify-content-center">
          <div className="col-6">
            <button type="button" className="btn btn-primary">Enroll in a free trial today!</button>
          </div>
        </div>
        <div className="d-none d-md-flex justify-content-center">
          <p className="fs-4">Enroll in a free trial!<span><button type="button"
            className="btn btn-primary ms-3">Click Here</button></span></p>
        </div>
      </div>
      <nav className="nav pb-5 justify-content-center">
        <a className="nav-link text-secondary" href="{% url 'home'%}">Home</a>
        <a className="nav-link text-secondary" href="{% url 'about'%}">About</a>
        <a className="nav-link text-secondary" href="{% url 'contact'%}">Contact</a>
        <a className="nav-link text-secondary" href="{% url 'privacyPolicy'}">Privacy Policy</a>
        <a className="nav-link text-secondary" href="{% url 'login' %}">Log In</a>
      </nav>
    </footer>
  );
};

export default Footer;

