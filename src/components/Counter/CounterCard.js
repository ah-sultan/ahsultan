function CounterCard(props){
    return(
        <>
            <div className="center-child gap-x-10">
                <div className="w-20 h-20 rounded-xl center-child border-2 border-primary">
                    <div className="w-10 text-primary">
                        {props.icon}
                    </div>
                </div>
                <div>
                    <h6 className="text-white leading-none font-notoSerif font-semibold text-52px mb-4">{
                        props.title < 10 ? `0${props.title}`  : props.title
                    }+</h6>
                    <span className="text-gray text-base  font-notoSerif">
                        {props.text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default CounterCard