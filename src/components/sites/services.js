import Image from "next/image";
export const Services = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-between">
        <div className="col-12 col-xl-4 col-lg-4">
          <div className="">
          <Image
            src="/images/services-left-cover.png"
            alt="logo"
            width={370}
            height={384}
          />

          <nav className="navbar text-left" id="services">
            <span className="nav-brand lg-text fw-bold">OUR REAL ESTATE SERVICES</span>

            <div className="d-flex flex-column gap-4">
              
              <a className="nav-link" href="#property-design">Property Design </a>

             

              <a className="nav-link" href="#property-listings">Property listings</a>
            </div>

          </nav>
          </div>
        </div>

        <div className="col-12 col-xl-8 col-lg-8">
          <div className="d-flex flex-column">
            <span className="xl-text fw-bold text-end">Services</span>

            <Image
              src="/images/services-right-cover.png"
              alt="logo"
              width={900}
              height={466}
            />

            <div className="d-flex flex-column justify-content-center align-items-center gap-5" data-bs-target="#services" data-bs-offset="0" tabIndex="0">
              <div className="col-10 py-5" id="property-design">
                Explore our extensive portfolio of carefully curated properties.
                We provide detailed listings with high-quality photos and
                comprehensive descriptions to help you find the perfect match for
                your needs.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
