import CountUp from 'react-countup';



function CounterCard(props){


    return(
        <>
            <div className="center-child gap-x-7 md:gap-x-10">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl center-child border-2 border-primary">
                    <div className="w-8 lg:w-10 text-primary">
                        {props.icon}
                    </div>
                </div>
                <div>
                    <h6 className="text-white leading-none font-notoSerif font-semibold text-3xl xsm:text-4xl md:text-52px mb-2 xsm:mb-3 lg:mb-4 block">
                    <CountUp
                        end={props.title}
                        duration={5}
                        start={0} 
                        enableScrollSpy={true}
                      
                    />
                    </h6>
                    <span className="text-gray text-base  font-notoSerif">
                        {props.text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default CounterCard