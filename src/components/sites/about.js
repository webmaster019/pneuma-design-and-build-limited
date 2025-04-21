import Image from "next/image";
export const About = () => {
  return (
    <section className="container d-flex align-items-end py-5 position-relative bg-danger">
      <div className="col-4 col-lg-12 col-xl-12 position-absolute about-left-background">
        <span className="lg-text fw-bold">ABOUT US</span>

        <div className="d-flex align-items-center about-card col-12 col-xl-6 col-lg-6">
          <span>
            At propIQ, we are more than just a real estate agency; we are your
            trusted partner on your journey to finding the perfect property. Our
            mission is to simplify the real estate process and empower you with
            the knowledge and resources you need to make informed decisions.
          </span>
        </div>
      </div>

      <div className="col-8 col-lg-12 col-xl-12 d-flex justify-content-end w-100">
        <Image
          src="/images/about-cover.png"
          alt="logo"
          width={770}
          height={570}
          className="image-container"
        />
      </div>
    </section>
  );
};
