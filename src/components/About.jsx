import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen text-gray-500'>
      <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='grid grid-cols-2 gap-8 w-full max-w-[1000px] pb-4'>
          <div className='pb-4 pl-8 sm:text-right'>
            <p className='border-b-4 border-pink-500 inline text-4xl text-white font-bold'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-2 gap-8 w-full max-w-[1000px] '>
          <div className='pb-4 pl-8'>
            <p className='text-4xl text-white sm:text-right font-bold'>
              Hi, I'm Robee, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className='text-gray-300'>
              I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About