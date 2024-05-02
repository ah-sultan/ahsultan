"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";
import blogData from "@/Data/BlogsData";
import "swiper/css";
import Image from "next/image";
import SliderNavigationBtn from "./SliderNavigationBtn";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id="blog" className="blog-area rel z-1">
      <div className="for-bgc-black pt-130 pb-100 rpt-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">News &amp; Blog</span>
                <h2>
                  Latest News &amp; <span>Blog</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* CARD SECTION */}
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
                  <SwiperSlide key={index} className="blogSliderCard">
                    <BlogCard {...data} />
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
  );
};
export default Blog;
