"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider3() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="slide-item  bg-black-30">
          <div className="inner__content__four">
            <div className="service__content__four">

              <div className="lower__content__four ">
                <div className="icon__box p_ralative">
                  <div className="icon__outer">
                    <div className="icon__bg">
                      <span className="icon-27" />
                    </div>
                  </div>
                </div>
                <div className="service__text">
                  <h4>
                   Construction Management
                  </h4>
                  <p>
                    We oversee building projects from start to finish, ensuring that timelines, budgets, quality, and compliance standards are met. This includes coordinating materials, labor, and equipment.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="owl-nav">
        <button type="button" className="owl-prev h1p">
          <span>‹</span>
        </button>
        <button type="button" className="owl-next h1n">
          <span>›</span>
        </button>
      </div>
    </>
  );
}
