import React from 'react'
import Typed from 'react-typed'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-500 min-h-[800px]'>

      <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='grid grid-cols-2 gap-8 w-full max-w-[1000px] pb-4'>
          <div className='pb-4 pl-4 md:text-right'>
          <h2 className='text-4xl border-b-4 inline border-[#06b6d4] text-gray-300 font-bold'>About</h2>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-1 gap-4 w-full max-w-[1000px] '>
          <div className='pb-4'>
            <p className='text-2xl text-gray-200  px-4 font-bold'>
            An I.T. expert with extensive experience in the Software Development Life Cycle, I commenced my I.T. journey as a Business Analyst. Seeking to enhance my capabilities, I pursued a CIT program at Lethbridge College, specializing in full stack development.
            </p>
          </div>
          <div>
            <p className='text-gray-300 px-4'>
              My fascination with technology started from playing console and computer games. Started coding using excel VBA for employee and productivity trackers as Team Leader. I later explored I.T. Business Analyst role where I engaged in planning, assessing and designing automation solutions. Yet, my genuine passion resides in programming. Nothing beats the gratification of observing an application operate flawlessly, showcasing exceptional features.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About