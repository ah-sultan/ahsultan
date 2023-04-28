import {DotsMd} from "./Dots/Dots"

function SectionLine(props) {
  return (
    <>
    <div className="w-full h-0.5 bg-dark px-3">
        <div className=" relative">
          <DotsMd className="left-1/4 animate-lineDot ani-delay"/>
          <DotsMd className="right-1/4 animate-lineDot  "/>
        </div>
    </div>
    </>
  )
}

export default SectionLine