import Image from "next/image";
import { 	LinkIcon,  } from "@heroicons/react/20/solid";
import { BsGithub, BsLink, BsLink45Deg } from "react-icons/bs";
import Link from "next/link";


function PortfolioCard(props) {

  return (
    <div className="w-full p-6 bg-darkBlue shadow-card group">
        <div className="h-[320px] overflow-hidden rounded-lg bg-white flex justify-center items-start hover:overflow-y-scroll cursor-all-scroll">
            <Image src={props.img} alt={props.title} className="w-full trns-1 duration-[40s]"/>
        </div>
        <div>
          <h5 className="text-white text-base font-normal my-6 opacity-90 line-clamp-2 leading-relaxed hover:text-primary  h-14">{props.title}</h5>
          <ul className="flex items-center gap-x-1.5 border-t border-t-dark">
            <li>
              <Link target="_blank" href={props.webLink} className="text-gray hover:text-primary text-xl">
                <BsLink45Deg/>
              </Link>
            </li>
            <li>
              {
                props.gitLink? <Link target="_blank" href={props.gitLink} className="text-gray hover:text-primary text-xl">
                  <BsGithub/>

                </Link> 
                
                : undefined 
              
              }
            </li>
          </ul>
        </div>
    </div>
  )
}

export default PortfolioCard