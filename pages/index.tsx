import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import SEO from '../components/SEO/seo';

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
        image="https://ezmto.com/images/chemicalPlant.jpg"
        createdAt="2022-04-17"
        updatedAt="2022-04-17"
      />
      <Header></Header>
      {/* Banner */}
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
      {/* 4 Cards describing ezMTO */}
      <section className="container text-center mt-3 mt-md-5 mb-md-3 pt-3 pt-md-5">
        <h2>
          Discover how ezMTO can simplify your material takeoff and quote
          process
        </h2>
        <div className="row mt-3">
          <div className="col-12 col-md-3">
            <article className="card h-100 pb-4">
              <figure>
                <Image
                  src="/images/chemicalPlant.jpg"
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
                  src="/images/chemicalPlant.jpg"
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
                  src="/images/chemicalPlant.jpg"
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
                  src="/images/chemicalPlant.jpg"
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
      {/* Table MTO comparison */}
      <article className="container">
        <div className="row text-center mt-3 mt-md-5 pt-3 pt-md-5">
          <h2>Simple, Straight-Forward Cost Savings</h2>
        </div>
        <div className="row text-center">
          <h3>
            Costs of doing a 100 Isometric Takeoff In-House vs Sending it to
            ezMTO
          </h3>
        </div>
        <table className="table table-striped table-bordered">
          <thead className="table-secondary">
            <tr>
              <th scope="col"></th>
              <th scope="col">Your Material Takeoff</th>
              <th scope="col">ezMTO Material Takeoff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your Employees&apos; Time (1)</td>
              <td>8 Hours</td>
              <td>0 Hours</td>
            </tr>
            <tr>
              <td>Direct Cost to You (2)</td>
              <td>$200</td>
              <td>$120</td>
            </tr>
            <tr>
              <td>Indirect Cost to You (3)</td>
              <td>$80</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Office Costs for Employees</td>
              <td>Significant</td>
              <td>$0</td>
            </tr>
          </tbody>
          <tfoot className="table-secondary">
            <tr>
              <td>Total Cost to You ($)</td>
              <td>$280 + Office Costs</td>
              <td>$120</td>
            </tr>
          </tfoot>
        </table>
        <ol>
          <li>Avg determined from previous takeoffs</li>
          <li>Uses hourly rate of $25 (Frequently much higher)</li>
          <li>Uses indirect rate of 40% from SBA.gov</li>
        </ol>
      </article>
      {/* Side-by-side MTO example */}
      <article className="container text-center mt-3 mt-md-5 pt-3 pt-md-5">
        <div className="row text-center">
          <h2>SAVE PRECIOUS TIME AND MONEY</h2>
        </div>
        <div className="row d-flex align-items-center">
          {/* Side with text */}
          <div className="col-12 col-md-6">
            <p className="fs-3">
              Stop wasting your expensive employees&apos; time and energy on
              manual material take-offs.
            </p>
            <p className="fs-3">
              Upload your isometrics to ezMTO&apos;s software.
            </p>
            <button className="btn btn-primary">
              <Link href="/signup">
                <a className="text-decoration-none text-white">
                  Click here to get a free material takeoff on us
                </a>
              </Link>
            </button>
          </div>
          {/* Side with image */}
          <div className="col-12 col-md-6 mt-3">
            <figure>
              <Image
                src="/images/mtoExample.png"
                className="rounded"
                height={1234}
                width={1820}
                alt=""
              />
              <figcaption>Example of MTO produced by ezMTO</figcaption>
            </figure>
          </div>
        </div>
      </article>
      {/* ezMTO benefits with 3 cards */}
      <section className="container text-center mt-3 mt-md-5">
        <h2 className="mb-3">Benefits of using ezMTO</h2>
        {/* Cost-effective card */}
        <div className="row mt-3">
          <article
            id="cost-effective"
            className="cost-effective col-12 col-md-4"
          >
            <div className="card h-100">
              <figure>
                <Image
                  src="/images/chemicalPlant.jpg"
                  className="card-img-top"
                  height={1306}
                  width={2295}
                  alt="Cost-Effective Icon"
                />
              </figure>
              <div className="card-body pb-4">
                <h3 className="card-title text-uppercase">cost-effective</h3>
                <p className="card-text">
                  Complete material take-offs at a fraction of the cost. Free up
                  your estimators and engineers to work on more high-impact
                  tasks.
                </p>
              </div>
            </div>
          </article>
          {/* Rapid-turnaround card */}
          <article className="col-12 col-md-4">
            <div className="card h-100">
              <figure>
                <Image
                  src="/images/chemicalPlant.jpg"
                  className="card-img-top"
                  height={1306}
                  width={2295}
                  alt="Rapid Turnaround Icon"
                />
              </figure>
              <div className="card-body pb-4">
                <h3 className="card-title text-uppercase">Rapid Turnaround</h3>
                <p className="card-text">
                  Have a completed material takeoff sent out for quotes within
                  30 minutes of receiving the isometric package from the client
                </p>
              </div>
            </div>
          </article>
          {/* Minimize mistakes card */}
          <article className="col-12 col-md-4">
            <div className="card h-100">
              <figure>
                <Image
                  src="/images/chemicalPlant.jpg"
                  className="card-img-top"
                  height={1306}
                  width={2295}
                  alt="Minimize Mistakes Icon"
                />
              </figure>
              <div className="card-body pb-4">
                <h3 className="card-title text-uppercase">Minimize Mistakes</h3>
                <p className="card-text">
                  Minimize mistakes and confusion with ezMTO&apos;s automation
                  and version control.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* ezMTO process with 4 icons */}
      <section className="container text-center mt-3 mt-md-5">
        <h2 className="mb-3 mb-md-4">ezMTO Process</h2>
        <div className="row mb-md-5">
          {/* Receive package icon */}
          <article className="col-12 col-md-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-box-seam"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404
                      2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5
                      14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16
                      3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0
                      1 .314-.464L7.443.184z"
              />
            </svg>
            <h3 className="text-uppercase mt-3">Receive Package</h3>
            <p>Review the package and separate out isometric drawings.</p>
          </article>
          {/* Upload isos icon */}
          <article className="col-12 col-md-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-cloud-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 5.146a.5.5 0 0 1 .708
                      0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
              />
              <path
                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16
                      11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763
                      1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153
                      2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15
                      9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
              />
            </svg>
            <h3 className="text-uppercase mt-3">Upload Isos</h3>
            <p>Upload isometrics and review automated takeoff.</p>
          </article>
          {/* Send quote icon */}
          <article className="col-12 col-md-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-currency-dollar"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179
                      3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07
                      1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966
                      2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616
                      0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826
                      1.828-2.2 1.939V8.73l.348.086z"
              />
            </svg>
            <h3 className="text-uppercase mt-3">Send for Quote</h3>
            <p>Send takeoff to preferred vendors for quote.</p>
          </article>
          {/* Bid-tab icon */}
          <article className="col-12 col-md-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-table"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15
                      2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1
                      1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"
              />
            </svg>
            <h3 className="text-uppercase mt-3">Bid Tab</h3>
            <p>Review automated bid tab for quotes.</p>
          </article>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
