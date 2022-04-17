import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import type { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header></Header>
      <p>Privacy Policy</p>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
