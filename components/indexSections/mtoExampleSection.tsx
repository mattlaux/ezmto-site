import Link from 'next/link';
import Image from 'next/image';

const MtoExampleSection = () => {
  return (
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
              src="/images/mtoExample.webp"
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
  );
};

export default MtoExampleSection;
