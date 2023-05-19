import { useState } from "react"
import { ReactMixitup } from 'react-mixitup';
import PortfolioCard from "./PortfolioCard"
import { portfolioData } from "./PortfolioData"
const FilterButton = [
    ['All', 'all'],
    ['Tailwind', 'tailwind'],
    ['React', 'react'],
    ['Next JS', 'nextJs'],
    ['Bootstrap', 'bootstrap']
]


function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');
    const filteredItems = activeFilter === 'all' ? portfolioData : portfolioData.filter(portfolioData => portfolioData.ctg === activeFilter);
    
    
    return (
    <section id="protfolio" className="py-section-lg md:py-section-xl lg:py-section-xxl">
        <div className="container">
            <div className="px-24">
                <h2 className="text-center section-title">My <span className="text-primary">Portfolio</span></h2>
            </div>
            <div className="mt-10 md:mt-section-lg lg:mt-section-xl xl:mt-section-xxl">
            {/* Button Section */}
                <div className="flex flex-wrap gap-x-2.5 xsm:gap-x-4 gap-y-3 xsm:gap-y-5 lg:gap-x-6">
                    {
                        FilterButton.map(([title, action], index) => (
                            <button onClick={() => setActiveFilter(action)} key={index} className={`${action === activeFilter ? 'btn-primary before:content-none' : 'btn-outline'} px-4 py-2 md:py-3 md:px-6 lg:py-3 lg:px-8 leading-none`}>{title}</button>
                        ))
                    }
                </div>
            </div>
            {/* Card Section */}
            <div className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    {
                        filteredItems.map((data, index) => {

                            return(
                                <div key={index} className="animate-filtering">
                                    <PortfolioCard  key={index} img={data.img} title={data.title} webLink={data.webLink} gitLink={data.gitLink}/>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}



export default Portfolio
