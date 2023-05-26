import React, { useState } from 'react'

const colors = ['#00CF5D', '#4FCCFA', 'yellow', 'aqua', '#ff1b00', ]

function ThemeColors() {
    const [showBar, setShowBar] = useState(false)
    const [primaryColor, setPrimaryColor] = useState('#00CF5D');

    const colorSeter = (value) => {
        setShowBar(false)
        setPrimaryColor(value)
    }

  return (
    <>
        <div className="fixed z-40 right-0 top-1/2 -translate-y-1/2 ">
            <div className={`pr-6 py-1  pl-1.5 bg-darkBlue trns-1 duration-1000 border-b border-primary group ${showBar? '' : 'rounded-s-2xl'} `}>
                <span className='bg-black p-1.5 text-white absolute right-2 bottom-[105%] text-xs w-24 border border-primary trns-1 opacity-0 block group-hover:opacity-100'>Color Varient</span>
                <span className="w-3.5 h-3.5 rounded-full bg-primary block" onClick={() => setShowBar(!showBar)}>

                </span>
            </div>
            <div>
                <ul className={`pl-1.5 pb-1.5 bg-darkBlue trns-1 duration-700 origin-top pt-3 ${showBar ? 'scale-y-100' : 'scale-y-0'}`}>
                    {
                        colors.map((color, index) => (
                            <li key={index} style={{background : color}} className="w-3.5 h-3.5 cursor-pointer rounded-full mb-2" onClick={() => colorSeter(color)}></li>
                        ))
                    }
                </ul>
            </div>
        </div>

        <style jsx global>{`
            :root {
                ${`--primary-color : ${primaryColor}`}
            }
        `}</style>
    </>
  )
}

export default ThemeColors