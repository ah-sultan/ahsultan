import Image from 'next/image'
import {DotsMd, DotsSm} from '../SectionLine/Dots/Dots'
import SectionLine from '../SectionLine/SectionLine'


// Images
import ahSultanAhmed from '../../../public/images/about/ah-sultan-ahmed.jpg'

// Data 
import { description, hobby } from './AboutData'


function AboutMe() {
  return (
    <>
        <section id="about">
            <SectionLine/>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center">
                {/* Images Section */}
                    <div className="lg:w-6/12 xl:w-7/12 lg:pl-12">
                        <div className="py-section-lg md:py-section-xxl text-center sm:text-left">
                            <div className="border-primary ml-auto border-4 inline-block max-w-[80%] sm:max-w-[400px] xl:max-w-[450px] rounded-[30px] lg:rounded-[50px] trns-2 -rotate-6 md:-rotate-[10deg]">
                                <div className="overflow-hidden sm:max-h-[550px] xl:max-h-[600px] rounded-[30px] lg:rounded-[50px] rotate-6 md:rotate-[10deg]">
                                    <Image src={ahSultanAhmed} alt="ah sultan ahmed"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Text Section */}
                    <div className="lg:pl-6 pb-section-lg md:pb-section-xxl xl:pl-0 lg:w-6/12 xl:w-5/12">
                        <h2 className="section-title">About <span className="text-primary">Me</span></h2>
                        {
                            description.map((text, index) => (
                                <p key={index} className="section-pera mt-8 text-justify">{text}</p>
                            ))
                        }
                        <div className="mt-9">
                            <h6 className="text-lg text-gray font-normal font-notoSerif leading-none">Hobby</h6>
                            <div className="h-0.5 bg-dark relative mt-4 mb-5">
                                <DotsMd className="-right-1.5 animate-lineDot"/>
                                <DotsMd className="-right-1.5 animate-pulse"/>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-y-4 pr-6">
                                {
                                   hobby.map((title, index) => {
                                        return(
                                            <li key={index} className="flex items-center">
                                                <DotsSm className="animate-pulse"/>
                                                <span className="font-notoSerif font-normal text-base leading-none text-gray inline-block pl-4 capitalize">{title}</span>
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