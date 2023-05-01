import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

import TestimonialCard from "./TestimonialCard"
import { testimonialData } from "./TestimonialData"

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<button type="button" class=" ${className} slider-dots"></button>`
    },
    el: ".testimonialSliderDots",
    type: 'bullets',

    
}

function Testimonal() {

  return (
    <section className="py-section-lg md:py-section-xl lg:py-section-xxl">
        <div className="container">
            <div className="lg:px-24">
                <h2 className="section-title text-center">Client <span className="text-primary">Satisfaction</span></h2>
            </div>
            {/* Card section */}
            <div className="mt-section-lg lg:mt-section-xxl">
            <Swiper
                spaceBetween={32}
                slidesPerView={1}
                pagination={pagination}
                modules={[Pagination]}
                className="testimoniaSwiper"
                speed={700}
                breakpoints={{
                    1024 : {slidesPerView : 2}
                }}
            >
                {
                    testimonialData.map((data,index) => {
                        return(
                            <SwiperSlide key={index}>
                                <TestimonialCard img={data.clientImg} name={data.name} title={data.title} rate={data.rate} text={data.text}/>
                            </SwiperSlide>
                         )
                    })
                }
               </Swiper> 
            </div>
            {/* Dots Section  */}
            <div className="flex justify-center gap-x-3 testimonialSliderDots mt-10 sm:mt-16 ">

            </div>
        </div>
    </section>
  )
}

export default Testimonal