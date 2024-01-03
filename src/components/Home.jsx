import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen text-gray-300 items-center justify-center'>

      <div className='flex flex-col h-full justify-center sm:max-w-[800px] max-w-[1000px] mx-auto px-6'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='font-bold text-7xl'>
          Robee Lou Diaz
        </h1>
        <h2 className='text-6xl text-gray-500 font-bold'>I'm a FullStack Developer</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>I'm a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
        <div >
          <Link to="work" smooth={true} duration={500}>
            <button className='flex group items-center border p-4 hover:bg-pink-600 hover:border-pink-600'>View Work <span className='pl-2 group-hover:rotate-90 duration-300 '><HiArrowNarrowRight />
          </span></button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home