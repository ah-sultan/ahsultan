import SectionLine from "../SectionLine/SectionLine"
import ServicesCard from "./ServicesCard"

import ServiceData from "./ServiceData"

function Service() {
  return (
    <>
        <section className="py-section-xxl">
            <div className="container">
                <div>
                    <h2 className="section-title text-center">What I <span className="text-primary">Provide</span></h2>
                </div>
                {/* Card Section */}
                <div className="grid grid-cols-3 gap-x-9 mt-20">
                    {
                        ServiceData.map((data, index) => {
                            return(

                                <ServicesCard key={index} icon={data.icon} title={data.title} text={data.text} list={data.list}/> 
                            )
                        })
                    }
                </div>
                {/* Service dots */}
                <div className="mt-20 center-child gap-x-3.5">
                    {
                        Array(3).fill().map((_,index) => (
                            <button key={index} type="button" className={`w-3 h-3 rounded-full border-2 border-primary shadow-sliderDots opacity-90 `}></button>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Service