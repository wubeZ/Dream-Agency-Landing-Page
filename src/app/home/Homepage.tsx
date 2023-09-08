import React from 'react'
import WhatWeDoSection from './WhatWeDoSection'
import AboutUsSection from './AboutUsSection'
import RecentWorkSection from './RecentWorkSection'
import TestimonialsSection from './TestimonialsSection'
import GetStartedSection from './GetStartedSection'

const Homepage = () => {
  return (
    <div className=''>
      <GetStartedSection/>
      <WhatWeDoSection/>
      <AboutUsSection/>
      <RecentWorkSection/>
      <TestimonialsSection/>
    </div>
  )
}

export default Homepage