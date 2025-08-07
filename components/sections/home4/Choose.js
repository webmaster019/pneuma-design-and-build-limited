import Link from "next/link";

export default function Choose() {
  return (
    <>
      {/* choose-section-two */}
      <section className="choose__two four p_relative">
        <div className="choose__two__content">
          <div className="anim-icon">
            <div
              className="icon icons-02"
              data-parallax='{"x": 100}'
              style={{
                backgroundImage: "url(assets/images/shape/shape-47.png)",
              }}
            />
          </div>
          <div className="choose__four__content">
            <div className="choose__four__bg">
              <div className="auto_container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 pe-lg-5">
                    <div className="choose__two__left">
                      <div className="title">
                        <div className="sub__title">
                          <h6>Why Choose Pneuma</h6>
                        </div>
                        <div className="main__title">
                          <h2>
                            Why Choose Pneuma <br /> For Designing
                          </h2>
                        </div>
                      </div>
                      <div className="roofer__two__text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Adipiscing integer ultrices suspendisse varius
                          etiam est. Est, felis, tempus nec vitae orci sodales
                          Metus, velit nec at diam in sed. Massa dui ipsum
                          ornare sagittis dolor sagittis amet odio est. Sit
                          semper et velit fusce.
                        </p>
                      </div>
                      <div className="roofer__list__content">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12">
                            <div className="roofer__two__list">
                              <ul>
                                <li>
                                  <span className="icon-41" /> Expert Engineers
                                </li>
                                <li>
                                  <span className="icon-41" /> Award Wining
                                  Company
                                </li>
                                <li>
                                  <span className="icon-41" /> Required Works
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12">
                            <div className="roofer__two__list">
                              <ul>
                                <li>
                                  <span className="icon-41" /> Quality Materials
                                </li>
                                <li>
                                  <span className="icon-41" /> Fully insured
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="choose__four__right">
                      <figure className="image">
                        <img
                          src="assets/images/resource/roofer-04.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose-section-two-end */}
    </>
  );
}
