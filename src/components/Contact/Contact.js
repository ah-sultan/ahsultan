import {AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import { DotsMd, DotsSm } from "../SectionLine/Dots/Dots"

const socialLink = [
    {
        icon : <AiFillLinkedin/>,
        url : '#'
    },

    {
        icon : <AiFillInstagram/>,
        url : '#'
    },
    {
        icon : <AiFillFacebook/>,
        url : '#'
    },
    {
        icon : <AiFillGithub className="ml-1"/>,
        url : '#'
    },
]

function Contact() {
  return (
   <section className="py-section-xxl bg-darkBlue">
        <div className="container">
            <div className="mb-section-xxl px-24">
                <h2 className="text-center section-title">Contact <span className="text-primary">With Me</span></h2>
            </div>

            <div className="flex items-center">
                <div className="w-1/2">
                    <div className="pr-3">
                        <div className="px-10 py-14 bg-black shadow-contactCard rounded-ee-[28px]">
                            <div className="relative">
                                <DotsSm className="shadow-dots absolute right-0 top-0"/>
                                <div className="pb-14 border-b-2 border-dark">
                                    <h5 className="text-primary font-notoSerif font-bold text-40px leading-snug mb-4">Email:</h5>
                                    <a href="mailto:ahsan.ah.sultan@gmail.com" className="text-white text-3xl leading-normal font-notoSerif">ahsan.ah.sultan@gmail.com</a>
                                </div>
                                <div className="py-20 border-b-2 border-dark">
                                    <h5 className="text-primary font-notoSerif font-bold text-40px leading-snug mb-4">Contact No::</h5>
                                    <a href="tel:01608626057" className="text-white text-3xl leading-normal font-notoSerif">+880 1608-626057</a>
                                </div>
                                <div className="flex justify-between items-center pt-52px mt-1">
                                        <ul className="flex items-center gap-x-2">
                                            {
                                                socialLink.map((item, index) => {
                                                    return(
                                                        <li key={index}>
                                                            <a href={item.url} className="text-primary text-2xl">
                                                                {item.icon}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <ul className="flex items-center gap-x-2">
                                            <li>
                                                <a href="#" className="text-sm italic font-notoSerif font-normal bg-primary px-2 py-0.5 rounded-sm text-black">
                                                   Upwork
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-sm italic font-notoSerif font-normal bg-primary px-2 py-0.5 rounded-sm text-black">
                                                    Fiverr
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="px-8">
                        <form action="#">
                            <div className="border-2 border-dark relative mb-8">
                                <input type="text" placeholder="Name:" className="text-lg leading-none text-dark w-full bg-transparent py-5 px-6"/>
                                <DotsMd className="right-6 top-1/2"/>
                            </div>
                            <div className="border-2 border-dark relative mb-8">
                                <input type="email" placeholder="Email:" className="text-lg leading-none text-dark w-full bg-transparent py-5 px-6"/>
                                <DotsMd className="right-6 top-1/2"/>
                            </div>
                            <div className="border-2 border-dark relative mb-8 ">
                                <textarea type="text" placeholder="Message:" className="text-lg leading-none text-dark w-full bg-transparent py-5 px-6 h-[240px]"/>
                                <DotsMd className="right-6 top-6 translate-y-0"/>
                            </div>
                            <button>
                                
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Contact