import React from 'react'
import SkillsCard from './SkillsCard'
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
        <section className="py-section-lg md:py-section-xl xl:py-section-xxl">
            <div className="container">
                <div className="xl:px-24">
                    <h2 className="text-center section-title">My Professional <span className="text-primary">Skills</span> </h2>
                </div>
                <div className="mt-10 md:mt-16 lg:mt-20">
                    <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
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