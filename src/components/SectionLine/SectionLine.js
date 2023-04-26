import {DotsMd} from "./Dots/Dots"

function SectionLine(props) {
  return (
    <>
    <div className="w-full h-0.5 bg-dark">
        <DotsMd className="left-1/4"/>
        <DotsMd className="right-1/4"/>
    </div>
    </>
  )
}

export default SectionLine