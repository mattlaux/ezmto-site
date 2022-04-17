import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from '../components/SEO/seo';

const About: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://ezmto.com/about"
        openGraphType="website"
        schemaType="website"
        title="Our Takeoff Philosophy"
        description="Discover why ezMTO was created to solve the inefficiencies and mistakes common 
        in the material takeoff and bid process. Learn how ezMTO solves these problems and how as a company
        we plan to continue to improve our offerings to clients such as yourself."
        image="https://ezmto.com/images/chemicalPlant.jpg"
      />
      <Header></Header>
      <article className="container text-center mt-5">
        <header>
          <h1 className="display-3">What is ezMTO?</h1>
        </header>
        <p className="fs-4">
          ezMTO is the first software that automates the material takeoff and
          vendor quote work flow. We allow your engineers, estimators, and
          buyers to efficiently and seamlessly work together on producing
          quality quotes.
        </p>
        <button className="btn btn-primary">
          <Link href="/demo">
            <a className="text-decoration-none text-white">Watch Demos</a>
          </Link>
        </button>
        <figure>
          <p className="text-danger fs-3">Insert image of dashboard</p>
        </figure>
      </article>
      <article className="container text-center mt-5">
        <header>
          <h2 className="display-4">Who we are?</h2>
        </header>
        <p className="fs-4">
          A service-based business aimed at improving the material take-off
          process.
        </p>
        <p className="fs-4">
          This company grew out of frustration at the countless hours spent on
          tedious and monotonous material takeoffs in the piping industry. We
          have personally done hundreds of MTOs and have finally developed a
          solution to minimize the time and effort spent on them.
        </p>
      </article>
      <article className="container text-center mt-5">
        <header>
          <h2 className="display-4">Our Mission</h2>
        </header>
        <p className="fs-4">
          We aim to be your go-to partner for piping material takeoffs. We plan
          to do this by providing quality and efficient service for every
          isometric package submitted to our program. We will generate value for
          our clients by providing time and cost savings.
        </p>
      </article>
      <article className="container text-center mt-5">
        <header>
          <h2 className="display-4 mb-3">Our Long-Term Goals</h2>
        </header>
        <section className="row mt-3">
          <article className="col-12 col-md-4">
            <h3 className="text-uppercase">Satisfied Clients</h3>
            <p className="fs-5">
              Our first priority is ensuring that our clients are completely
              satisfied with our services. Our goal is to provide an effortless
              and valuable service to our clients.
            </p>
          </article>
          <article className="col-12 col-md-4">
            <h3 className="text-uppercase">Continuous Improvement</h3>
            <p className="fs-5">
              As ezMTO grows, the focus will be on improving our current
              offerings as well as the creation of additional services. We will
              always strive to improve our performance.
            </p>
          </article>
          <article className="col-12 col-md-4">
            <h3 className="text-uppercase">Establish Partnerships</h3>
            <p className="fs-5">
              We only succeed if our clients succeed. We would like to grow
              side-by-side with our client as a valued partner.
            </p>
          </article>
        </section>
      </article>
      <Footer></Footer>
    </div>
  );
};

export default About;
