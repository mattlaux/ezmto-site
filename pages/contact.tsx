import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../styles/Contact.module.css';
import ContactForm from '../components/forms/contactForm';

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Start simplying your takeoffs today | ezMTO</title>
        <meta
          name="description"
          content="Reach out today to discover how ezMTO can significantly cut the time and energy 
        spent on material takeoffs and bids. ezMTO offers savings by decreasing the amount of personnel required to handle
        the takeoff and bid process as well as by decreasing mistakes."
        />
      </Head>
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
