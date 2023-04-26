import React from 'react'
import SkillsCard from './SkillsCard'
import SectionLine from '../SectionLine/SectionLine'

const SkillData = [
    {
        title : 'HTML',
        label : 89
    },
    {
        title : 'CSS',
        label : 10
    },
    {
        title : 'Javascript',
        label : 50
    },
    {
        title : 'Javascript',
        label : 50
    },
    {
        title : 'Javascript',
        label : 50
    },
    {
        title : 'Javascript',
        label : 50
    },
]

function Skills() {
  return (
    <> 
        <section className="py-section-xxl">
            <div className="container">
                <div className="px-24">
                    <h2 className="text-center section-title">My Professional <span className="text-primary">Skills</span> </h2>
                </div>
                <div className="mt-20">
                    <ul className="grid grid-cols-3 gap-6">
                        {
                            SkillData.map((data, index) => {
                                return(
                                    <li key={index}>
                                        <SkillsCard title={data.title} label={data.label}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills