import ServicesCard from "./ServicesCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';


import ServiceData from "./ServiceData"


const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<button type="button" class=" ${className} mx-1.5 inline-block w-3 h-3 rounded-full border-2 border-primary shadow-sliderDots opacity-90"></button>`
    },
}

function Service() {

    

  return (
    <>
        <section className="py-section-xxl">
            <div className="container">
                <div>
                    <h2 className="section-title text-center">What I <span className="text-primary">Provide</span></h2>
                </div>
                {/* Card Section */}
                <div className="mt-20">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={3}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="serviceSwiper"
                        >
                            {
                            ServiceData.map((data, index) => {
                                return(
                                    <SwiperSlide>
                                        <ServicesCard key={index} icon={data.icon} title={data.title} text={data.text} list={data.list}/> 
                                    </SwiperSlide>
                                    
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    </>
  )
}

export default Service