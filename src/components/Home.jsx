import React from 'react'
import {HiArrowDown} from 'react-icons/hi'
import {Link} from 'react-scroll'
import bgVid from '../assets/rectangle.mp4'
import Typed from 'react-typed'


const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen text-gray-300 items-center justify-center min-h-[800px] relative'>
      <video 
        src={bgVid}
        className='w-full h-full object-cover -z-10 blur-[1.2px]'
        autoPlay
        loop
        muted
      />
      <div className='flex flex-col h-full justify-center sm:max-w-[800px] max-w-[1000px] mx-auto px-6 absolute top-0 left-0 right-0 w-full'>
        <p className='text-[#06b5d4]'>Hi, my name is</p>
        <h1 className='font-bold text-7xl '>
          Robee Lou Diaz
        </h1>
        
        <Typed
                    strings={['Software Developer']}
                    typeSpeed={120}
                    backSpeed={120}
                    loop
                    loopCount={20}
                    className='text-4xl text-gray-200 font-bold'
          />
        <p className='text-gray-300 py-4 max-w-[700px] '>I love building excellent web and desktop applications. Focused on further developing my skills to create exceptional and interactive digital experiences. </p>
        <div className='max-w-[170px]'>
          <Link to="work" smooth={true} duration={500} className='flex items-center hover:cursor-pointer'>
          <button className='flex group items-center justify-center border border-gray-500 px-4 py-[10px] 
            hover:text-[#06b6d4] work-button shadow-md shadow-[#040c16] relative -z-10 '>
            
              <span className='mr-4'>View Work</span>
                <svg class="animate-bounce w-10 h-10 border-2 border-[#155e75] rounded-full pl-[10px] pt-2 mt-[10px] flex items-center justify-center relative">
                      <HiArrowDown className='text-violet-500'/>
                </svg>
        
          </button>
          </Link>
        </div>
      </div>

    </div>

  )
}

export default Home