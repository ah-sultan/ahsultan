import Image from 'next/image'
import {DotsMd, DotsSm} from '../SectionLine/Dots/Dots'
import SectionLine from '../SectionLine/SectionLine'


// Images
import aboutImg from '../../../public/images/about/about-img.png'
import heroImg from '../../../public/images/hero/hero-img.jpg'


function AboutMe() {
  return (
    <>
        <section>
            <SectionLine/>
            <div className="container">
                <div className="flex items-center">
                {/* Images Section */}
                    <div className="w-7/12 pl-12">
                        <div className="py-section-xxl">
                            <div className="border-primary ml-auto border-4 inline-block max-w-[450px] rounded-[50px] -rotate-[10deg]">
                                <div className="overflow-hidden max-h-[600px] rounded-[50px] rotate-[10deg]">
                                    <Image src={heroImg}/>
                                </div>
                            </div>
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
                                <DotsMd className="-right-1.5 animate-lineDot"/>
                                <DotsMd className="-right-1.5 animate-pulse"/>
                            </div>
                            <ul className="grid grid-cols-2 gap-y-4 pr-6">
                                {
                                    ['Mountain Hikin', 
                                    'Eating', 
                                    'Problem Solving', 
                                    'Researching'].map((title, index) => {
                                        return(
                                            <li key={index} className="flex items-center">
                                                <DotsSm className="animate-pulse"/>
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