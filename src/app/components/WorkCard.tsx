import React from 'react'
import pcImage from "@/assets/images/pc.svg"
import mobileImage from "@/assets/images/Mask Group.svg"
import Image from 'next/image'

const WordCard = () => {
  return (
    <div className='dark:bg-dark-backgroundCard w-full lg:w-[450px] h-96 flex flex-col overflow-hidden rounded-lg shadow-2xl justify-between pt-8 bg-white'>
        <div className='grid grid-col-2 gap-4 h-80 px-3'>
            <div className="col-start-1 col-span-2">
              <Image src={pcImage} alt='pc image' className='object-fit rounded-lg shadow-lg py-4'/>
            </div>
            <div className='col-start-3'>
              <Image src={mobileImage} alt='mobile image' className='' />
            </div>
        </div>
        <div className='flex justify-between px-4 pb-12'>
            <p className='text-2xl font-bold'>UI Shop</p>
            <button className='w-24 rounded-lg border-2 border-slate-800'>View Work</button>
        </div>
    </div>
  )
}

export default WordCard