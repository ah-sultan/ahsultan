"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedProject = ({ projectData }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {Array.isArray(projectData) &&
          projectData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="project-item style-two wow fadeInUp delay-0-2s animated">
                  <div className="project-image before-after-none">
                    <Image
                      width={630}
                      height={500}
                      src={data.thumbnail}
                      alt={data.title || "Projects"}
                      className="img-fluid"
                    />
                  </div>
                  <div className="project-content">
                    <span className="sub-title">{data.category}</span>
                    <h4>
                      <Link href="project-details">{data.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default RelatedProject;
