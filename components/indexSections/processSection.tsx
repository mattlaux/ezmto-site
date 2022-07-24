import Image from 'next/image';

const ProcessSection = () => {
  return (
    <section className="container text-center mt-3 mt-md-5">
      <h2 className="mb-3 mb-md-4">ezMTO Process</h2>
      <div className="row mb-md-5">
        <div className="col-12 col-md-3">
          <Image
            src="/images/svg/receivePackage.svg"
            alt="Receive package icon"
            height={50}
            width={50}
          />
          <h3 className="text-uppercase mt-3">Receive Package</h3>
          <p>Review the package and separate out isometric drawings.</p>
        </div>
        <div className="col-12 col-md-3">
          <Image
            src="/images/svg/uploadIsos.svg"
            alt="Receive package icon"
            height={50}
            width={50}
          />
          <h3 className="text-uppercase mt-3">Upload Isos</h3>
          <p>Upload isometrics and review automated takeoff.</p>
        </div>
        <div className="col-12 col-md-3">
          <Image
            src="/images/svg/sendQuote.svg"
            alt="Receive package icon"
            height={50}
            width={50}
          />
          <h3 className="text-uppercase mt-3">Send for Quote</h3>
          <p>Send takeoff to preferred vendors for quote.</p>
        </div>
        <div className="col-12 col-md-3">
          <Image
            src="/images/svg/bidtab.svg"
            alt="Receive package icon"
            height={50}
            width={50}
          />
          <h3 className="text-uppercase mt-3">Bid Tab</h3>
          <p>Review automated bid tab for quotes.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
