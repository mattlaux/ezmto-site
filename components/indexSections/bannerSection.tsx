import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const BannerSection = () => {
  return (
    <figure
      className={`${styles.homeBanner} jumbotron jumbotron-fluid p-5 bg-image`}
    >
      <div className="container mt-5 mb-5 pt-5 pb-5">
        <div className="col-0 col-md-1"></div>
        <div className="col-12 col-md-5 text-center">
          <h1 className="text-white">
            ezMTO eliminates 95% of time and energy for a material takeoff
          </h1>
          <p className="text-white">
            Discover how ezMTO can increase your efficiency
          </p>
          <button className="btn btn-primary mt-3">
            <Link href="/signup">
              <a className="text-decoration-none text-white">
                Start a Free Trial
              </a>
            </Link>
          </button>
          <button className="btn btn-primary mt-3">
            <Link href="/demo">
              <a className="text-decoration-none text-white">Watch a Demo</a>
            </Link>
          </button>
        </div>
        <div className="col-0 col-md-6"></div>
      </div>
    </figure>
  );
};

export default BannerSection;
