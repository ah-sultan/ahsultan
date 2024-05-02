"use client";
import TestimonialData from "@/data/TestimonialData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const Testimonial = () => {
  return (
    <>
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-6 col-xl-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      Clients Testimonials
                    </span>
                    <h2>
                      I’ve 1253+ Clients <span>Feedback</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnin natus totam rem aperiam
                      eaque inventore veritatis
                    </p>
                  </div>
                  <div className="slider-arrows">
                    <button className="testimonial-prev-btn slick-arrow">
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button className="testimonial-next-btn slick-arrow">
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-8">
                <div className="testimonials-wrap"></div>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={24}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".testimonial-next-btn",
                    prevEl: ".testimonial-prev-btn",
                  }}
                  breakpoints={{
                    1199: {
                      slidesPerView: 2,
                      spaceBetween:24,
                    },
                  }}
                >
                  {Array.isArray(TestimonialData) &&
                    TestimonialData.map((data, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="testimonial-item wow fadeInUp delay-0-2s">
                            <div className="author">
                              <Image
                                width={85}
                                height={85}
                                className="img-fluid"
                                src={data.authorImg}
                                alt={data.authorName}
                              />
                            </div>
                            <div className="text">{data.reviewText}</div>
                            <div className="testi-des">
                              <h5>{data.authorName}</h5>
                              <span>{data.authorDesignation}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
