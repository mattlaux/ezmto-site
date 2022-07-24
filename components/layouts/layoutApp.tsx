import HeaderApp from '../header/headerApp';
import FooterApp from '../footer/footerApp';

interface Props {
  children: React.ReactNode;
}

/**
 *
 * @param children - Child components wrapped in Layout tags
 * @returns - Child components with header and footer for pages that require login
 */
const LayoutApp = ({ children }: Props) => {
  return (
    <>
      <HeaderApp />
      <main className="container fs-5">{children}</main>
      <FooterApp />
    </>
  );
};

export default LayoutApp;
