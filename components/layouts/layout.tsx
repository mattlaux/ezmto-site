import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
  children: React.ReactNode;
}

/**
 *
 * @param children - Child components wrapped in Layout tags
 * @returns - Child components with header and footer for pages that do not require login
 */
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="fs-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
