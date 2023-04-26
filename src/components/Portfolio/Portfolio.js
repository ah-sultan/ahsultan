import PortfolioCard from "./PortfolioCard"
import { portfolioData } from "./PortfolioData"
const FilterButton = [
    ['Tilwiind', 'tailwind'],
    ['React', 'React'],
    ['Next JS', 'NextJs'],
    ['Bootstrap', 'Bootstrap']
]
function Portfolio() {
  return (
    <section className="py-section-xxl">
        <div className="container">
            <div className="px-24">
                <h2 className="text-center section-title">My <span>Portfolio</span></h2>
            </div>
            <div className="mt-100px">
            {/* Button Section */}
                <div className="flex gap-x-6">
                    {
                        FilterButton.map(([title, action], index) => (
                            <button key={index} className={`${index === 0 ? 'btn-primary' : 'btn-outline'} py-3 px-8 leading-none`}>{title}</button>
                        ))
                    }
                </div>
            </div>
            {/* Card Section */}
            <div className="mt-12">
                <div className="grid grid-cols-3 gap-x-6">
                    {
                        portfolioData.map((data, index) => {

                            return(
                                <PortfolioCard  key={index} img={data.img} title={data.title} webLink={data.webLink} gitLink={data.gitLink}/>
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