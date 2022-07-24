import Image from 'next/image';
import Link from 'next/link';

const FourCardsSection = () => {
  return (
    <section className="container text-center mt-3 mt-md-5 mb-md-3 pt-3 pt-md-5">
      <h2>
        Discover how ezMTO can simplify your material takeoff and quote process
      </h2>
      <div className="row mt-3">
        <div className="col-12 col-md-3">
          <article className="card h-100 pb-4">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
                className="card-img-top"
                height={1306}
                width={2295}
                alt="Automated MTO Example"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Automated MTOs</h3>
              <p className="card-text">
                ezMTO&apos;s software can complete a piping isometric takeoff
                fully automated in a couple of minutes.
              </p>
              <button className="btn btn-primary w-100">
                <Link href="/demo">
                  <a className="text-decoration-none text-white">View Demo</a>
                </Link>
              </button>
            </div>
          </article>
        </div>
        <div className="col-12 col-md-3">
          <article className="card h-100 pb-4">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
                className="card-img-top"
                height={1306}
                width={2295}
                alt="Version Control Example"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Version Control</h3>
              <p className="card-text">
                Review previous versions of MTOs or quotes while ezMTO&apos;s
                software highlights any differences.
              </p>
              <button className="btn btn-primary w-100">
                <Link href="/demo">
                  <a className="text-decoration-none text-white">View Demo</a>
                </Link>
              </button>
            </div>
          </article>
        </div>
        <div className="col-12 col-md-3">
          <article className="card h-100 pb-4">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
                className="card-img-top"
                height={1306}
                width={2295}
                alt="Efficient Quotes"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Efficient Quotes</h3>
              <p className="card-text">
                Efficiently distribute MTO to your preferred vendors for quote
                without leaving the software.
              </p>
              <button className="btn btn-primary w-100">
                <Link href="/demo">
                  <a className="text-decoration-none text-white">View Demo</a>
                </Link>
              </button>
            </div>
          </article>
        </div>
        <div className="col-12 col-md-3">
          <article className="card h-100 pb-4">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
                className="card-img-top"
                height={1306}
                width={2295}
                alt="Automated Bid Tabs"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Automated Bid Tabs</h3>
              <p className="card-text">
                ezMTO&apos;s software will automatically create bid tabs based
                on quotes submitted by vendors.
              </p>
              <button className="btn btn-primary w-100">
                <Link href="/demo">
                  <a className="text-decoration-none text-white">View Demo</a>
                </Link>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FourCardsSection;
