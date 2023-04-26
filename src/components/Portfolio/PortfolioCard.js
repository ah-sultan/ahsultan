import Image from "next/image";
import { 	LinkIcon,  } from "@heroicons/react/20/solid";



function GitHub(props){
  return(
    <svg className={`${props.className}`} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0C4.33 0 0.75 3.58 0.75 8C0.75 11.54 3.04 14.53 6.22 15.59C6.62 15.66 6.77 15.42 6.77 15.21C6.77 15.02 6.76 14.39 6.76 13.72C4.75 14.09 4.23 13.23 4.07 12.78C3.98 12.55 3.59 11.84 3.25 11.65C2.97 11.5 2.57 11.13 3.24 11.12C3.87 11.11 4.32 11.7 4.47 11.94C5.19 13.15 6.34 12.81 6.8 12.6C6.87 12.08 7.08 11.73 7.31 11.53C5.53 11.33 3.67 10.64 3.67 7.58C3.67 6.71 3.98 5.99 4.49 5.43C4.41 5.23 4.13 4.41 4.57 3.31C4.57 3.31 5.24 3.1 6.77 4.13C7.41 3.95 8.09 3.86 8.77 3.86C9.45 3.86 10.13 3.95 10.77 4.13C12.3 3.09 12.97 3.31 12.97 3.31C13.41 4.41 13.13 5.23 13.05 5.43C13.56 5.99 13.87 6.7 13.87 7.58C13.87 10.65 12 11.33 10.22 11.53C10.51 11.78 10.76 12.26 10.76 13.01C10.76 14.08 10.75 14.94 10.75 15.21C10.75 15.42 10.9 15.67 11.3 15.59C12.8882 15.054 14.2683 14.0333 15.246 12.6718C16.2237 11.3102 16.7497 9.67624 16.75 8C16.75 3.58 13.17 0 8.75 0Z" />
    </svg>
  )
}

function PortfolioCard(props) {
  console.log(props.img)

  return (
    <div className="w-full p-6 bg-darkBlue shadow-card">
        <div className="h-[250px] overflow-hidden rounded-lg bg-black">
            <Image src={props.img} alt="Card Img" className="w-full"/>
        </div>
        <div>
          <h5 className="text-white text-base leading-none font-normal my-6 opacity-90">{props.title}</h5>
          <ul className="flex items-center">
            <li>
              <a href={props.webLink} className="text-gray hover:text-primary">
                <LinkIcon className="w-6" />
              </a>
            </li>
            <li>
              {
                props.gitLink? <a href={props.gitLink} className="">
                  <GitHub className="fill-gray hover:fill-primary w-6"/>

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