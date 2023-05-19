import Image from "next/image"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// Hero data
const subTtile = "Welcome To My World"
const caption = `I specialize in building user-friendly, SEO-optimized, and responsive web applications with hand-written code. I also convert them into user-friendly formats.`



// images
import ahSultanAhmed from '../../../public/images/hero/ah-sultan-ahmed.jpg'

function Hero() {
  return (
    <>
        <section id="home">
            <div className="container">
                <div className="flex items-center">
                    {/* Hero Text */}
                    <div className="py-section-xl lg:py-0 lg:w-1/2">
                        <div>
                            <span className="text-base sm:text-lg leading-normal text-primary font-medium">{subTtile}</span>
                            <h1 className="text-2xl xsm:text-3xl sm:text-4xl xl:text-5xl text-white leading-snug font-bold font-notoSerif my-4">Hi, I’m <span className="text-primary">Sultan </span> <span className="block">a Front End Developer</span></h1>
                            <p className="text-base leading-normal font-normal text-gray">{caption}</p>
                            <div className="mt-52px">
                                <button className="btn-primary py-2 md:py-3 lg:py-3.5 text-base md:text-xl px-7 md:px-10 mr-6">Hire Me <ChevronRightIcon className="w-4"/></button>
                                <button className="btn-outline py-2 md:py-3 lg:py-3.5 text-base md:text-xl px-7 md:px-10">Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 text-right hidden lg:block">
                       <div className="pt-100px pb-100px">
                            <div className="w-fit mx-auto p-7 border-primary border-4 rounded-[50px] -skew-x-[4deg]">
                                <div className="hero-img overflow-hidden h-fit xl:h-fit rounded-[50px]">
                                    <Image src={ahSultanAhmed} alt="Ah Sultan Ahmed" className="w-full"/>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero