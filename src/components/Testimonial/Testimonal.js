

import TestimonialCard from "./TestimonialCard"
import { testimonialData } from "./TestimonialData"

function Testimonal() {
  return (
    <section className="py-section-xxl">
        <div className="container">
            <div className="px-24">
                <h2 className="section-title text-center">Client <span className="text-primary">Satisfaction</span></h2>
            </div>
            {/* Card section */}
            <div className="grid-cols-2 grid gap-x-8 mt-100px">
                {
                    testimonialData.map((data,index) => {
                        return(
                            <TestimonialCard key={index} img={data.clientImg} name={data.name} title={data.title} rate={data.rate} text={data.text}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonal