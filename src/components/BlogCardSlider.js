"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import Image from "next/image";
import SliderNavigationBtn from "./SliderNavigationBtn";
import BlogCard from "./BlogCard";
const BlogCardSlider = ({ data }) => {
  const blogData = JSON.parse(data);
  return (
    <>
      <div className="blog-card-section">
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={24}
          centeredSlides="true"
          navigation={{
            nextEl: ".blog-slide-next",
            prevEl: ".blog-slide-prev",
          }}
          modules={[Navigation, FreeMode]}
        >
          {Array.isArray(blogData) &&
            blogData.map((data, index) => {
              return (
                <SwiperSlide key={data._id} className="blogSliderCard">
                  <BlogCard/>
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* SWIPER MODULES */}
        <div className="d-flex align-items-center justify-content-center mt-4">
          <SliderNavigationBtn
            slideNext="blog-slide-next"
            slidePrev="blog-slide-next"
          />
        </div>
      </div>
    </>
  );
};

export default BlogCardSlider;
