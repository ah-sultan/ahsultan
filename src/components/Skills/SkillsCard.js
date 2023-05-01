import React, { useEffect, useRef, useState } from 'react';
import { DotsMd } from '../SectionLine/Dots/Dots'
import CountUp from 'react-countup';

function SkillsCard(props) {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const section = sectionRef.current;
      const onScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight && sectionBottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', onScroll);
  
      return () => window.removeEventListener('scroll', onScroll);
    }, []);


  return (
    <>
        <div className="px-3.5 py-6 border border-dark" ref={sectionRef}>
            <div className="flex items-center justify-between mb-7 md:mb-9">
                <h6 className="text-white text-lg xsm:text-xl sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-none font-normal">{props.title}</h6>
                <span className="inline-block border border-primary rounded py-0.5 px-1 text-white font-normal text-sm">
                    <CountUp end={props.label} duration={5} />
                    %</span>
            </div>
            <div className="h-0.5 bg-dark rounded-sm">
                <div className="bg-primary h-0.5 relative animate-pulse duration-[2.5s]" style={{width : isVisible ? `${props.label}%` : 0}}>
                    <DotsMd className="-right-1.5 animate-pulse" />
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillsCard