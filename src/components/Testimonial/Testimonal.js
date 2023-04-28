import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

import TestimonialCard from "./TestimonialCard"
import { testimonialData } from "./TestimonialData"

function Testimonal() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<button type="button" class=" ${className} mx-1.5 inline-block w-3 h-3 rounded-full border-2 border-primary shadow-sliderDots opacity-90"></button>`
        },
    }

  return (
    <section className="py-section-xxl">
        <div className="container">
            <div className="px-24">
                <h2 className="section-title text-center">Client <span className="text-primary">Satisfaction</span></h2>
            </div>
            {/* Card section */}
            <div className="mt-100px">
            <Swiper
                        spaceBetween={32}
                        slidesPerView={2}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="serviceSwiper"
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
        </div>
    </section>
  )
}

export default Testimonal