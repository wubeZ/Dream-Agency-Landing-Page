import React from 'react'
import HomeCard from '../components/HomeCard'

const WhatWeDoSection = () => {
  return (
    <div className='flex flex-col justify-center lg:h-[700px] gap-2 mr-12 mt-12 lg:mt-0 text-center bg-sky-100 dark:text-dark-textColor-50 dark:bg-dark-backgroundLight rounded-tr-full'>
        <p className='text-5xl font-semibold'>What We Do</p>
        <p className='text-4xl lg:text-5xl font-light'>For Your <span className='relative z-10 after:absolute after:left-1 after:right-1 after:bottom-2 after:h-3 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800'>Buisness</span></p>
        <div className='flex flex-col lg:flex-row gap-8 justify-center mt-28 px-8'>
        {new Array(4).fill(0).map((item, index) => [
            <HomeCard key={index}/>
        ])}
        </div>
    </div>
  )
}

export default WhatWeDoSection