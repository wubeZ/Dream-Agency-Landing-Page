import React from 'react'
import {LuQuote} from "react-icons/lu";

const TestimonialCard = () => {
  return (
    <div className='dark:bg-black h-full lg:h-80 p-8 w-full lg:w-96 flex flex-col gap-8 shadow-lg border border-slate-100 rounded-md'>
      <p className='text-5xl'><LuQuote/></p>
      <p className='text-left text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat perspiciatis alias ut porro saepe reprehenderit, cumque animi quidem, neque impedit. Quasi blanditiis cum reprehenderit culpa maxime exercitationem similique excepturi.</p>
      <p className='text-left font-semibold'>UI Shop</p>
      </div>
  )
}

export default TestimonialCard