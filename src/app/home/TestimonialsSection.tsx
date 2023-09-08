import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

const TestimonialsSection = () => {
  return (
    <div className='dark:text-dark-textColor-50 w-full flex flex-col gap-8 p-12 lg:p-28 lg:text-center'>
        <p className='text-5xl font-bold'>Our Testimonals</p>
        <p className='text-4xl font-light'>What Our Clients Are <span className='relative z-10 after:absolute after:left-1 after:right-1 after:bottom-2 after:h-3 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800'>Saying</span></p>
        <div className='flex flex-col gap-20 lg:flex-row justify-center w-full mt-12 lg:mt-24'>
            {new Array(2).fill(0).map((item, index)=>[
                <TestimonialCard key={index} />
            ])}
        </div>
    </div>
  )
}

export default TestimonialsSection