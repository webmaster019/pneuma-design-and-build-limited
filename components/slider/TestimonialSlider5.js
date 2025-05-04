'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider5() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonials__block p_relative">
                        <div
                            className="image__layer"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-52.png)"
                            }}
                        />
                        <div className="testimonials__content">
                            <div className="authore__img">
                            <figure className="image">
                                <img src="assets/images/resource/author-01.png" alt="" />
                            </figure>
                            </div>
                            <div className="testimonial__bottom">
                            <div className="testimonials__text">
                                <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis massa
                                ornare.
                                </p>
                            </div>
                            <div className="authore__info">
                                <div className="authore__content">
                                <h5>Ruhan Mukti</h5>
                                <p>Manager</p>
                                </div>
                                <div className="quote">
                                <span className="icon-22" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__block p_relative">
                        <div
                            className="image__layer"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-52.png)"
                            }}
                        />
                        <div className="testimonials__content">
                            <div className="authore__img">
                            <figure className="image">
                                <img src="assets/images/resource/author-01.png" alt="" />
                            </figure>
                            </div>
                            <div className="testimonial__bottom">
                            <div className="testimonials__text">
                                <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis massa
                                ornare.
                                </p>
                            </div>
                            <div className="authore__info">
                                <div className="authore__content">
                                <h5>Jane Cooper</h5>
                                <p>Ex CEO</p>
                                </div>
                                <div className="quote">
                                <span className="icon-22" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__block p_relative">
                        <div
                            className="image__layer"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-52.png)"
                            }}
                        />
                        <div className="testimonials__content">
                            <div className="authore__img">
                            <figure className="image">
                                <img src="assets/images/resource/author-01.png" alt="" />
                            </figure>
                            </div>
                            <div className="testimonial__bottom">
                            <div className="testimonials__text">
                                <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis massa
                                ornare.
                                </p>
                            </div>
                            <div className="authore__info">
                                <div className="authore__content">
                                <h5>Jon Nasim</h5>
                                <p>CTO</p>
                                </div>
                                <div className="quote">
                                <span className="icon-22" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    )
}
