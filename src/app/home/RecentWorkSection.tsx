import React from 'react'
import WorkCard from '../components/WorkCard'

const RecentWorkSection = () => {
  return (
    <div className='dark:text-dark-textColor-50 w-full min-h-screen p-12 lg:p-28 flex flex-col gap-20 lg:gap-36 dark:bg-dark-backgroundLight bg-[#fff5f2] rounded-tl-[750px] lg:pl-28'>
        <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-60'>
            <div className='text-5xl w-full'>
            <p className='font-bold'>Our Recent Work</p>
            <p className='font-light pt-2 text-4xl lg:text-5xl'>By Our <span className='relative z-10 after:absolute after:left-1 after:right-1 after:bottom-2 after:h-3 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800'>Experts</span></p>
            </div>
            <p className='pt-12 lg:pt-0 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate maiores vero qui eius aliquam sit nobis asperiores exercitationem, quisquam rem, doloribus labore ea sed nisi aperiam quam corporis provident?
            </p>
        </div>
        <div className='flex flex-col lg:flex-row justify-evenly lg:ml-32 gap-6 lg:gap-12'>
        {new Array(3).fill(0).map((item, index)=> [
            <WorkCard key={index}/>
        ])}
        </div>
    </div>
  )
}

export default RecentWorkSection