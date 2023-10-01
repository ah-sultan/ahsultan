import React, { useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillGithub, } from 'react-icons/ai'
import { BsArrowUpRightSquare} from 'react-icons/bs'
import { DotsMd, DotsSm } from "../SectionLine/Dots/Dots"
import Copyright from '../Copyright/Copyright'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socialLink = [
    {
        icon : <AiFillLinkedin/>,
        url : 'https://linkedin.com/in/ah-sultan'
    },

    {
        icon : <AiFillTwitterSquare/>,
        url : 'https://twitter.com/AhSultanDev'
    },
    {
        icon : <AiFillFacebook/>,
        url : 'https://web.facebook.com/devahsultan'
    },
    {
        icon : <AiFillGithub className="ml-1"/>,
        url : 'https://github.com/ah-sultan'
    },
]

function Contact() {
    const [isProcessing, setIsProcessing] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')



    const sendEmail = (e) => {
      e.preventDefault();
      
  
      if(name.length === 0 || email.length === 0 || message.length ===0){
        toast("Please Fill the from and try again", {
            type : 'warning'
        });
      }else{
        setIsProcessing(true)
        emailjs.send('service_v0gjey9', 'template_qj1nl8y', {

            user_Name: name,
            user_Email : email,
            user_message: message,
            
    
          }, 'LPYNBzQQElVTixuJi')
            .then((result) => {
                toast("Your Message Sent Successfully", {
                    type : 'success'
                });
                setIsProcessing(false)
                setName('')
                setEmail('')
                setMessage('')
               
            }, (error) => {
                toast("Your Messages Not Send Please try Again.", {
                    type : 'error'
                });
                setIsProcessing(false)
            });
      }
    };

  return (
   <>
    <section id="contact" className="pt-section-lg md:pt-section-xl lg:pt-section-xxl bg-darkBlue">
        <div className="container">
            <div className="mb-section-lg md:mb-section-xl lg:mb-section-xxl lg:px-24">
                <h2 className="text-center section-title">Contact <span className="text-primary">With Me</span></h2>
            </div>

            <div className="flex gap-y-14 flex-col lg:flex-row items-center pb-section-lg md:pb-section-xl lg:pb-section-xxl">
                <div className="w-full lg:w-1/2 order-last lg:order-first">
                    <div className="pr-3">
                        {/* Contact Card */}
                        <div className="px-8 py-10 sm:px-10 sm:py-14 bg-black shadow-contactCard rounded-ee-[28px]">
                            <div className="relative">
                                <DotsSm className="shadow-dots absolute right-0 top-0 animate-pulse"/>
                                <div className="pb-14 border-b-2 border-dark">
                                    <h5 className="text-primary font-notoSerif font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-40px leading-snug mb-2 xsm:mb-3 lg:mb-4">Email:</h5>
                                    <a href="mailto:ahsan.ah.sultan@gmail.com" className="text-white text-base xsm:text-lg sm:text-2xl xl:text-3xl leading-normal font-notoSerif">ahsan.ah.sultan@gmail.com</a>
                                </div>
                                <div className="py-14 md:py-20 border-b-2 border-dark">
                                    <h5 className="text-primary font-notoSerif font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-40px leading-snug mb-2 xsm:mb-3 lg:mb-4">Contact No:</h5>
                                    <a href="tel:01608626057" className="text-white text-base xsm:text-lg sm:text-2xl xl:text-3xl leading-normal font-notoSerif">+880 1608-626057</a>
                                </div>
                                <div className="flex flex-col xsm:flex-row justify-between xsm:items-center pt-52px mt-1">
                                        <ul className="flex items-center gap-x-2 xsm:order-first order-last">
                                            {
                                                socialLink.map((item, index) => {
                                                    return(
                                                        <li key={index}>
                                                            <Link href={item.url} target="_blank" className="text-primary text-2xl">
                                                                {item.icon}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <ul className="flex items-center gap-x-2 mb-5 xsm:mb-0">
                                            <li>
                                                <a href="#" className="text-sm italic font-notoSerif font-normal bg-primary px-2 py-0.5 rounded-sm text-black">
                                                   Upwork
                                                </a>
                                            </li>
                                            <li>
                                                <Link href="https://www.fiverr.com/ah_sultan" target='_blank' className="text-sm italic font-notoSerif font-normal bg-primary px-2 py-0.5 rounded-sm text-black">
                                                    Fiverr
                                                </Link>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form Section */}
                <div className="w-full lg:w-1/2">
                    <div className="lg:px-8 relative">
                        <form action="#" onSubmit={(e) => sendEmail(e)}>
                            <div className="relative mb-8">
                                <input value={name} type="text" placeholder="Name:" className="form-input" onChange={(e) => setName(e.target.value)}/>
                                <DotsMd className="right-6 top-1/2 animate-pulse"/>
                            </div>
                            <div className="relative mb-8">
                                <input value={email} type="email" placeholder="Email:" className="form-input" onChange={(e) => setEmail(e.target.value)}/>
                                <DotsMd className="right-6 top-1/2 animate-pulse"/>
                            </div>
                            <div className="relative">
                                <textarea value={message} type="text" placeholder="Message:" className="form-input h-[200px] sm:h-[240px]" onChange={(e) => setMessage(e.target.value)}/>
                                <DotsMd className="right-6 top-6 translate-y-0 animate-pulse"/>
                            </div>
                            {/* Form Button */}
                            <button disabled={isProcessing} type="submit" className="relative font-notoSerif border-2 border-transparent flex justify-between items-center w-full p-4 sm:p-5 bg-primary duration-700 hover:bg-transparent hover:text-primary hover:border-primary leading-none text-base mt-8 sm:mt-12">
                                <span>Send Message</span>
                                <BsArrowUpRightSquare className="text-lg mr-1"/>

                                {/* Processing */}
                                {isProcessing && 
                                <div className={`absolute z-10 inset-0 bg-primary flex justify-center items-center gap-x-3 hover:text-black text-lg`}>
                                    <svg className="motion-safe:animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                        <span>
                                        Processing...
                                        </span>
                                </div>
                                }
                            </button>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                                />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Copyright/>
   </section>
   </>
  )
}

export default Contact
