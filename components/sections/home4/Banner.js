"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/* banner-one */}
      <section className="banner style__four">
        <Swiper {...swiperOptions} className="banner-carousel">
          <SwiperSlide className="slide-item">
            <div
              className="slide__item__content"
              style={{
                backgroundImage: "url(assets/images/banner/banner-01.jpg)",
              }}
            >
              <div className="auto_container">
                <div className="content-inner">
                  <div className="content__box">
                    <div className="sub__title">
                      <h6>Innovative Architecture for Timeless Spaces</h6>
                    </div>
                    <h1>Pneuma Design & Build Limited</h1>
                    
                    <p> We craft architectural solutions that blend creativity, functionality, <br />and sustainability.
                    </p>

                    <div className="btn-box">
                      <Link className="btn-one" href="/service-details">
                        <span>Take Our Service</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="slide__item__content"
              style={{
                backgroundImage: "url(assets/images/banner/banner-01.jpg)",
              }}
            >
              <div className="auto_container">
                <div className="content-inner">
                  <div className="content__box">
                  <div className="sub__title">
                      <h6>Years of Experience</h6>
                    </div>
                    <h1>Pneuma Design & Build Limited</h1>
                    
                    <p> Whether you're envisioning a residential sanctuary, a commercial masterpiece, <br />or a public space that inspires.
                    </p>

                    <div className="btn-box">
                      <Link className="btn-one" href="/service-details">
                        <span>Take Our Service</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="slide__item__content"
              style={{
                backgroundImage: "url(assets/images/banner/banner-01.jpg)",
              }}
            >
              <div className="auto_container">
                <div className="content-inner">
                  <div className="content__box">
                  <div className="sub__title">
                      <h6>Designing the Future. Honoring the Past</h6>
                    </div>
                    <h1>Pneuma Design & Build Limited</h1>
                    
                    <p> 
                      We bring your ideas to life with precision and purpose, <br/>harmonizing form and function inside every space we design.
                    </p>

                    <div className="btn-box">
                      <Link className="btn-one" href="/service-details">
                        <span>Take Our Service</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* banner-one */}
    </>
  );
}
