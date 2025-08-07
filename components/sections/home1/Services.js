"use client";
import Link from "next/link";
import { useState } from "react";
import {ServiceList} from "@/helpers/serviceList";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/* service-section */}
      <section className="service__section see__pad">
        <div className="service__content p_relative">
          <div className="anim-icon">
            <div
              className="icon icons-1"
              data-parallax='{"x": 100}'
              style={{
                backgroundImage: "url(assets/images/shape/shape-15.png)",
              }}
            />
            <div
              className="icon icons-2"
              data-parallax='{"x": -100}'
              style={{
                backgroundImage: "url(assets/images/shape/shape-16.png)",
              }}
            />
          </div>
          <div className="auto_container">
            <div className="title text-center">
              <div className="sub__title">
                <h6>Our Services</h6>
              </div>
              <div className="main__title">
                <h2>
                  We’re Prodviding Quality <br />
                  Designing Services
                </h2>
              </div>
            </div>
            <div className="service__tab__section">
              <div className="tabs-box">
                <div className="tab-btn-box p_relative">
                  <ul className="tab-btns tab-buttons clearfix">
                    {
                      ServiceList?.map((item) => <li
                          key={item.id}
                          className={
                            activeIndex == item.id ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(item.id)}
                      >
                        <div className="inner__tab">
                          <span className="tab___all">{item.title} </span>
                        </div>
                      </li>)
                    }


                  </ul>
                </div>
                <div
                    className="tabs-content wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div
                    className="tab-content wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    {
                      ServiceList.map((item) => <div
                          className={
                            activeIndex == item.id
                                ? "tab-pane fadeInUp animated show active"
                                : "tab-pane fadeInUp animated"
                          }
                      >
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12 ps-xl-12">
                            <div className="tab__right__content">
                              <h4>{item.title}</h4>
                              <div className="tab__text">
                                <p>
                                  {item.description}
                                </p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>)
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section-end */}
    </>
  );
}
