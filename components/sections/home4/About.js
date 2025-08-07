import Link from "next/link";

export default function About() {
  return (
    <>
      {/* about-section */}
      <section className="about__section four p_relative see__pad">
        <div className="anim-icon">
          <div className="parallax-scene parallax-scene-1">
            <div
              data-depth="0.30"
              className="icon layer-bg"
              style={{
                backgroundImage: "url(assets/images/icons/icon-01.svg)",
              }}
            />
          </div>
          <div
            className="icon icons-1 "
            data-parallax='{"x": 100}'
            style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}
          />
          <div
            className="icon icons-2 "
            data-parallax='{"x": 100}'
            style={{ backgroundImage: "url(assets/images/shape/shape-44.png)" }}
          />
        </div>
        <div className="auto_container">
          <div className="about__section__content">
            <div className="row">
              <div className="col-lg-5 col-md-12 ps-xl-0 pe-xl-4">
                <div className="about_left__section p_relative">
                  <div className="about__image__block">
                    <div className="inner__box">
                      <div className="image__box">
                        <figure className="image">
                          <img
                            src="assets/images/resource/about-four-01.png"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 offset-lg-1 ps-xl-4">
                <div className="about__three__left">
                  <div className="title">
                    <div className="sub__title">
                      <h6>About Pneuma</h6>
                    </div>
                    <div className="main__title">
                      <h2 className="text-primary-cream">Experience & Quality</h2>
                    </div>
                  </div>
                  <div className="normal__text">
                    <p className="text-primary-blue">
                      <strong> Pneuma Design & Build Ltd </strong> is a Nairobi-based design-build firm, incorporated on 18th March 2025 under the Companies Act, 2015 (Reg. No. PVT-RXUMQ8QK). We specialize in transforming visionary concepts into reality through innovative architectural design and precision construction.
                    </p>
                    <br/>
                    <p className="text-primary-blue">
                      With a strong commitment to excellence, we craft sustainable, functional, and visually compelling spaces tailored to the unique needs of each client. Our client-focused and collaborative approach allows us to serve the <strong>residential, commercial </strong>, and <strong>institutional </strong> sectors with unmatched creativity, professionalism, and attention to detail.
                    </p>
                  </div>
                  <div className="engineer__section">
                    <div className="about__btn">
                      <Link className="btn-one" href="/about">
                        <em>
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </em>
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section-end */}
    </>
  );
}
