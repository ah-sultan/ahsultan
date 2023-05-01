import Image from "next/image";
import { 	LinkIcon,  } from "@heroicons/react/20/solid";
import { BsGithub, BsLink, BsLink45Deg } from "react-icons/bs";


function PortfolioCard(props) {

  return (
    <div className="w-full p-6 bg-darkBlue shadow-card">
        <div className="h-[250px] overflow-hidden rounded-lg bg-white">
            <Image src={props.img} alt="Card Img" className="w-full"/>
        </div>
        <div>
          <h5 className="text-white text-base leading-none font-normal my-6 opacity-90">{props.title}</h5>
          <ul className="flex items-center gap-x-1.5">
            <li>
              <a href={props.webLink} className="text-gray hover:text-primary text-xl">
                <BsLink45Deg/>
              </a>
            </li>
            <li>
              {
                props.gitLink? <a href={props.webLink} className="text-gray hover:text-primary text-xl">
                  <BsGithub/>

                </a> 
                
                : undefined 
              
              }
            </li>
          </ul>
        </div>
    </div>
  )
}

export default PortfolioCard