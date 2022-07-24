import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section className="container text-center mt-3 mt-md-5">
      <h2 className="mb-3">Benefits of using ezMTO</h2>
      {/* Cost-effective card */}
      <div className="row mt-3">
        <article id="cost-effective" className="cost-effective col-12 col-md-4">
          <div className="card h-100">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
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
                your estimators and engineers to work on more high-impact tasks.
              </p>
            </div>
          </div>
        </article>
        {/* Rapid-turnaround card */}
        <article className="col-12 col-md-4">
          <div className="card h-100">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
                className="card-img-top"
                height={1306}
                width={2295}
                alt="Rapid Turnaround Icon"
              />
            </figure>
            <div className="card-body pb-4">
              <h3 className="card-title text-uppercase">Rapid Turnaround</h3>
              <p className="card-text">
                Have a completed material takeoff sent out for quotes within 30
                minutes of receiving the isometric package from the client
              </p>
            </div>
          </div>
        </article>
        {/* Minimize mistakes card */}
        <article className="col-12 col-md-4">
          <div className="card h-100">
            <figure>
              <Image
                src="/images/chemicalPlant.webp"
                className="card-img-top"
                height={1306}
                width={2295}
                alt="Minimize Mistakes Icon"
              />
            </figure>
            <div className="card-body pb-4">
              <h3 className="card-title text-uppercase">Minimize Mistakes</h3>
              <p className="card-text">
                Minimize mistakes and confusion with ezMTO&apos;s automation and
                version control.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BenefitsSection;
