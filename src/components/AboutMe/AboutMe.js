import Image from 'next/image'
import {DotsMd, DotsSm} from '../SectionLine/Dots/Dots'
import SectionLine from '../SectionLine/SectionLine'


// Images
import aboutImg from '../../../public/images/about/about-img.png'

function AboutMe() {
  return (
    <>
        <section>
            <SectionLine/>
            <div className="container">
                <div className="flex items-center">
                {/* Images Section */}
                    <div className="w-7/12">
                        <div className="py-section-xxl">
                            <Image src={aboutImg} alt="Sultan" width={588} height={627} className="max-w-[90%]"/>
                        </div>
                    </div>
                    {/* Text Section */}
                    <div className="w-5/12">
                        <h2 className="section-title">About <span className="text-primary">Me</span></h2>
                        <p className="section-pera pt-7 pb-6">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                        <p className="section-pera mb-9">Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the </p>
                        <div className="mt-9">
                            <h6 className="text-lg text-gray font-normal font-notoSerif leading-none">Hobby</h6>
                            <div className="h-0.5 bg-dark relative mt-2.5 mb-3">
                                <DotsMd className="-right-1.5"/>
                            </div>
                            <ul className="grid grid-cols-2 gap-y-4 pr-6">
                                {
                                    ['Mountain Hikin', 
                                    'Eating', 
                                    'Problem Solving', 
                                    'Researching'].map((title, index) => {
                                        return(
                                            <li key={index} className="flex items-center">
                                                <DotsSm/>
                                                <span className="font-notoSerif font-normal text-base leading-none text-gray inline-block pl-4">{title}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutMe