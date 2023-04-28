import Image from "next/image"
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import { DotsMd } from "../SectionLine/Dots/Dots"

function TestimonialCard(props) {

  const rate = Math.floor(props.rate)
  return (
    <div className="w-full border-2 border-darkBlue p-6">
        <div className="flex justify-between items-end mb-5">
            <div className="flex items-center gap-x-6 ">
                <div className="w-100px h-100px rounded-full border-2 border-primary">
                <Image src={props.img} alt={props.name} width={100} height={100} className="w-full" />
                </div>
                <div>
                  <h5 className="text-2xl leading-none font-notoSerif font-bold mb-2.5 text-primary">{props.name}</h5>
                  <span className="text-gray text-lg leading-none">{props.title}</span>
                </div>
            </div>
            <div>
              {
                Array(rate).fill().map((_, index) => (
                  <AiFillStar  key={index} className="text-primary w-5"/>
                ))
              }
              {
                Array(5 - rate).fill().map((_, index) => (
                  <AiOutlineStar  key={index} className="text-primary w-5"/>
                ))
              }
            </div>
        </div>
        <div className="h-0.5 bg-dark">
            <div className="relative h-0.5 bg-primary animate-pulse" style={{width : `${20 * rate }%`}}>
              <DotsMd className="-right-1.5 animate-pulse"/>
            </div>
        </div>
          <p className="text-base leading-relaxed text-gray mt-8 text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more  obscure Latin words, consectetur, from a Lorem Ipsum passage, but also the leap into</p>
    </div>
  )
}

export default TestimonialCard