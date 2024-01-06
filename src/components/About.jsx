import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-500 min-h-[800px]'>

      <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='grid grid-cols-2 gap-8 w-full max-w-[1000px] pb-4'>
          <div className='pb-4 pl-4 md:text-right'>
            <p className='border-b-4 border-[#06b6d4] inline text-4xl text-gray-100 font-bold'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1000px] '>
          <div className='pb-4'>
            <p className='text-4xl text-gray-200 md:text-right  px-4 font-bold'>
              Hi, I'm Robee, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className='text-gray-300 px-4'>
              My fascination with technology started from playing console and computer games. Started coding using excel VBA for employee and productivity trackers as Team Leader. I later explored I.T. Business Analyst role where I engaged in planning, assessing and designing automation solutions. Yet, my genuine passion resides in programming. There's no better satisfaction than witnessing an application seamlessly function with outstanding features.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About