
export function DotsMd(props) {
  return (
    <>
        <div className={`w-3 h-3 rounded-full bg-transparent border-primary border absolute t-1/2 -translate-y-1/2 center-child shadow-dots ${props.className}`}>
            <div className="bg-primary w-1 h-1 rounded-full"></div>
        </div>
    </>
  )
}



export  function DotsSm(props) {
  return (
    <>
        <div className={`w-3 h-3 rounded-full bg-transparent border-primary border center-child ${props.className}`}>
            <div className="bg-primary w-1 h-1 rounded-full"></div>
        </div>
    </>
  )
}
