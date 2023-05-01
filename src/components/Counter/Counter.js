import { UserGroupIcon,CpuChipIcon, CloudArrowDownIcon } from '@heroicons/react/24/solid'
import CounterCard from './CounterCard'

const counterData = [
    {
        icon : <UserGroupIcon/>,
        title : 256,
        text : 'Happy Clients'
    },
    {
        icon : <CpuChipIcon/>,
        title : 100,
        text : 'Projects Complete'
    },
    {
        icon : <CloudArrowDownIcon/>,
        title : 10,
        text : 'Years Experience'
    }
]


function Counter() {
  return (
   <>
    <section className="py-14 lg:py-20 bg-[#0E111F]">
        <div className="container">
            <div className="gap-10 sm:gap-20 flex sm:justify-center sm:items-center flex-wrap flex-column sm:flex-row ">
                {
                    counterData.map((data, index) => (
                        <CounterCard key={index} icon={data.icon} title={data.title} text={data.text}/>
                    ))
                }
            </div>
        </div>
   </section>
   </>
  )
}

export default Counter