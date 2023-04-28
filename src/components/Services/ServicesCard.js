import React from 'react'
import { DotsMd, DotsSm } from '../SectionLine/Dots/Dots'

function ServicesCard(props) {
  return (
    <>
        <div  className="w-full p-px ">
            <div className="border border-dark px-8 py-10 group shadow-card">
                <div className="relative">
                    <div className="w-16 h-16 border-2 border-primary rounded-xl center-child">
                        <div className="w-10 group-hover:rotate-45 duration-300 text-primary">
                        {props.icon}
                        </div>
                    </div>
                    <DotsMd className="right-0 top-0 animate-pulse scale-110"/>
                </div>
                <h5 className="mt-14 pb-4 mb-9 text-white font-notoSerif font-medium text-2xl leading-none border-b-2 border-dark">{props.title}</h5>
                <p className="mb-7 text-gray text-base leading-relaxed">{props.text}</p>
            {
                props.list? 
                
                <ul>
                    {
                        props.list.map((title, index) => (
                            <li key={index} className="flex items-center gap-x-4 mb-4 text-gray leading-5">
                                <DotsSm className="animate-pulse"/>
                                <span>{title}</span>
                            </li>
                        ))
                    }
                </ul>
                : undefined
            }
            </div>
        </div>
    </>
  )
}

export default ServicesCard