import Image from "next/image";
export const Services = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-xl-4 col-lg-4">
          <Image
            src="/images/services-left-cover.png"
            alt="logo"
            width={370}
            height={384}
            className="image-container"
          />

          <div>
            <span className="lg-text fw-bold">OUR REAL ESTATE SERVICES</span>

            <div className="d-flex flex-column">
                <p></p>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-8 col-lg-8 d-flex flex-column gap-4">
          <span className="xl-text fw-bold text-end">Services</span>

          <Image
            src="/images/services-right-cover.png"
            alt="logo"
            width={770}
            height={466}
            className="image-container"
          />

          <div className="d-flex justify-content-center align-items-center">
            <span>
              Explore our extensive portfolio of carefully curated properties.
              We provide detailed listings with high-quality photos and
              comprehensive descriptions to help you find the perfect match for
              your needs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
