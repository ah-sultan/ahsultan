import React from 'react'
import { DotsMd } from '../SectionLine/Dots/Dots'

function SkillsCard(props) {
  return (
    <>
        <div className="px-3.5 py-6 border border-dark">
            <div className="flex items-center justify-between mb-9">
                <h6 className="text-white text-xl leading-none font-normal">{props.title}</h6>
                <span className="inline-block border border-primary rounded py-0.5 px-1 text-white font-normal text-sm">{props.label}%</span>
            </div>
            <div className="h-0.5 bg-dark rounded-sm">
                <div className="bg-primary h-0.5 relative" style={{width : `${props.label}%`}}>
                    <DotsMd className="-right-1.5" />
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillsCard