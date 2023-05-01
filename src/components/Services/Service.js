import ServicesCard from "./ServicesCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';


import ServiceData from "./ServiceData"


const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<button type="button" class=" ${className} slider-dots"></button>`
    },
    el: ".serviceSliderDots",
    type: 'bullets',

    
}

function Service() {

    

  return (
    <>
        <section className="py-section-lg md:py-section-xl lg:py-section-xxl">
            <div className="container">
                <div>
                    <h2 className="section-title text-center">What I <span className="text-primary">Provide</span></h2>
                </div>
                {/* Card Section */}
                <div className="mt-10 sm:mt-section-lg md:mt-20">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={1}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="serviceSwiper"
                        speed={600}

                        breakpoints={{
                            640 : {slidesPerView : 2, spaceBetween : 24},
                            1024 : {slidesPerView : 3, spaceBetween : 24},
                        }}
                        >
                            {
                            ServiceData.map((data, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <ServicesCard icon={data.icon} title={data.title} text={data.text} list={data.list}/> 
                                    </SwiperSlide>
                                    
                                )
                            })
                        }
                    </Swiper>
                </div>
                {/* Dots Section */}
                <div className="flex gap-x-3 justify-center mt-10 md:mt-16 serviceSliderDots">

                </div>
            </div>
        </section>
    </>
  )
}

export default Service