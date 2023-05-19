import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FaTimes, } from "react-icons/fa"
import {GiHamburgerMenu} from 'react-icons/gi'


const navItem = [
    {
        title : 'Home',
        url : '#home'
    },
    {
        title : 'About Me',
        url : '#about'
    },
    {
        title : 'Services',
        url : '#service'
    },
    {
        title : 'Portfolio',
        url : '#protfolio'
    },
    {
        title : 'Testimonal',
        url : '#testimonial'
    },
    {
        title : 'Contact',
        url : '#contact'
    },
]

const logo = 'Portfolio'


function Header() {
    const [sticky, setSticky] = useState(false)
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {

        const stickyNavHandler = () => {
           window.pageYOffset > 300 ? setSticky(true) : setSticky(false)
        }
    
        window.addEventListener('scroll',stickyNavHandler )
        
        if(showNav){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "unset"
        }
      })

  return (
    <>
    <header className={`header py-4 border-dark border-b-2 ${sticky ? 'sticky-nav' : undefined}`}  >
        <div className="container">
            <div className="navbar flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex-auto">
                    <Link href="/" className="text-primary font-semibold text-base leading-normal">
                        <span>{logo}</span>
                    </Link>
                </div>
                {/* Mobile Nav Wrapper */}
                <div className={`flex-auto lg:flex justify-between items-center fixed lg:static left-0 right-0 top-0 bg-darkBlue lg:bg-transparent w-full lg:w-auto h-full lg:h-auto z-40 lg:visible   lg:scale-100 lg:rotate-0 trns-1 duration-700 origin-top-left ${showNav? 'rounded-0 scale-100 rotate-0 visible' : 'scale-0 rotate-180 invisible rounded-full'}`}>
                    {/* Mobile Nav Header */}
                    <div className="text flex items-center justify-between py-8 px-5 lg:hidden ">
                        <Link href="/" className="text-primary font-semibold text-base leading-normal">
                            <span>{logo}</span>
                        </Link>
                        {/* Nav close Button */}
                        <button className="hover:rotate-180 trns-1" onClick={() => setShowNav(false)}>
                            <FaTimes className="text-2xl text-primary opacity-60"/>
                        </button>
                    </div>
                        {/* Navbar Nav Section */}
                    <ul className="lg:flex items-center justify-center gap-x-8">
                        {
                            navItem.map((item, index) => {
                                return(
                                    <li key={index} className="px-5 py-2.5 lg:p-0 border-b-2 border-b-dark lg:border-0">
                                        <Link href={item.url} className="text-white text-base leading-normal hover:text-primary duration-300">{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* Navbar Button */}
                    <div>
                        <Link href="#contact" className="btn-primary text-sm  py-3.5 px-7 mt-10 lg:m-0 ml-5">Contact With Me</Link>
                    </div>
                </div>
                {/* Mobile Nav closer */}
                <button className="text-2xl text-primary lg:hidden" onClick={() => setShowNav(true)}>
                    <GiHamburgerMenu/>
                </button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header