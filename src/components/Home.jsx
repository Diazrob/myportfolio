import React from 'react'
import {HiArrowDown} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen text-gray-300 items-center justify-center min-h-[800px]'>

      <div className='flex flex-col h-full justify-center sm:max-w-[800px] max-w-[1000px] mx-auto px-6'>
        <p className='text-[#06b6d4]'>Hi, my name is</p>
        <h1 className='font-bold text-7xl'>
          Robee Lou Diaz
        </h1>
        
        <h2 className='text-6xl text-gray-500 font-bold'>I'm a Software Engineer</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>I love building excellent web and desktop applications. Focused on further developing my skills to create exceptional and interactive digital experiences. </p>
        <div className='max-w-[170px]'>
          <Link to="work" smooth={true} duration={500} className='flex items-center hover:cursor-pointer'>
          <button className='flex group items-center justify-center border border-gray-500 px-4 py-[10px] 
            hover:text-[#06b6d4] work-button shadow-md shadow-[#040c16] relative -z-10 '>
            
              <span className='mr-4'>View Work</span>
                <svg class="animate-bounce w-10 h-10 border-2 border-[#155e75] rounded-full pl-[10px] pt-2 mt-[10px] flex items-center justify-center relative -z-20">
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