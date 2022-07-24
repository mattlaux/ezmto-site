import type { NextPage } from 'next';
import Layout from '../components/layouts/layout';
import SEO from '../components/SEO/seo';
import BannerSection from '../components/indexSections/bannerSection';
import FourCardsSection from '../components/indexSections/fourCardsSection';
import TableSection from '../components/indexSections/tableSection';
import MtoExampleSection from '../components/indexSections/mtoExampleSection';
import BenefitsSection from '../components/indexSections/benefitsSection';
import ProcessSection from '../components/indexSections/processSection';

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://ezmto.com/"
        openGraphType="website"
        schemaType="website"
        title="Takeoffs Made Effortless"
        description="Simplifying the pipe fabrication bid process from beginning to end. 
        Save time, energy, and money on material takeoffs, acquiring bids, and creating bid tabs."
        image="https://ezmto.com/images/chemicalPlantSocial.webp"
        createdAt="2022-04-17"
        updatedAt="2022-04-17"
      />
      <Layout>
        <BannerSection />
        <FourCardsSection />
        <TableSection />
        <MtoExampleSection />
        <BenefitsSection />
        <ProcessSection />
      </Layout>
    </div>
  );
};

export default Home;
