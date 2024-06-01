"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const TestimonialSlider = ({data}) => {
  const testimonialData = data && JSON.parse(data)

  return (
    <>
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
            spaceBetween: 24,
          },
        }}
      >
        {Array.isArray(testimonialData) &&
          testimonialData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial-item wow fadeInUp delay-0-2s">
                  <div className="author">
                    <Image
                      width={85}
                      height={85}
                      className="img-fluid"
                      src={data?.image}
                      alt={data?.clientName}
                      
                    />
                  </div>
                  <div className="text">{data.reviewText}</div>
                  <div className="testi-des">
                    <h5>{data?.clientName}</h5>
                    <span>{data?.clientTitle}</span>
                  </div>
                </div>
              </SwiperSlide>
            ); 
          })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
