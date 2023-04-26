import Image from "next/image"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
// images
import heroImg from '../../../public/images/hero/hero-img.png'

function Hero() {
  return (
    <>
        <section>
            <div className="container">
                <div className="flex">
                    {/* Hero Text */}
                    <div className="w-1/2">
                        <div className="pt-[124px] pb-[210px]">
                            <span className="text-lg leading-normal text-primary font-medium">Welcome To My World</span>
                            <h1 className="text-5xl text-white leading-snug font-bold font-notoSerif my-4">Hi, I’m <span className="text-primary">Sultan </span> <span className="block">a Front End Developer</span></h1>
                            <p className="text-base leading-normal font-normal text-gray">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                            <div className="mt-52px">
                                <button className="btn-primary py-3.5 text-xl px-10 mr-6">Hire Me <ChevronRightIcon className="w-4"/></button>
                                <button className="btn-outline py-3.5 text-xl px-10">Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pt-52px text-right">
                        <Image src={heroImg} width={503} height={559} alt="Sultan"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero