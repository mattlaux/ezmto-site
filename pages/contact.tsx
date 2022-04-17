import type { NextPage } from 'next';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../styles/Contact.module.css';
import ContactForm from '../components/forms/contactForm';
import SEO from '../components/SEO/seo';

const Contact: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://ezmto.com/contact"
        openGraphType="website"
        schemaType="website"
        title="Start simplying your takeoffs today"
        description="Reach out today to discover how ezMTO can significantly cut the time and energy 
        spent on material takeoffs and bids. ezMTO offers savings by decreasing the amount of personnel required to handle
        the takeoff and bid process as well as by decreasing mistakes."
        image="https://ezmto.com/images/chemicalPlant.jpg"
      />
      <Header></Header>
      <article
        className={`${styles.contactBackground} container-fluid mb-3 bg-image`}
      >
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <header className="text-white">
              <h1 className="display-3 text-center pt-5">CONTACT US</h1>
              <p className="fs-4 text-center">
                If you are interested in testing out our software or just want
                to learn more we would love to hear from you! Submit your
                contact info below, and we will reach out shortly.
              </p>
            </header>
            <ContactForm></ContactForm>
          </div>
        </div>
      </article>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
