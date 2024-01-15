import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import CSharp from '../assets/c#.png'
import Sql from '../assets/sql.png'
import Github from '../assets/github.png'
import Typed  from 'react-typed'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-300 min-h-[1000px]'>

      {/* container */}
      <div className='w-full h-full flex flex-col items-center justify-center mx-auto p-4'>

        <div className='w-full max-w-[1000px] px-8'>
        <h2 className='text-4xl border-b-4 inline border-[#06b6d4] text-gray-300 font-bold'>Skills</h2>
          <p className='py-4'>I have personally worked with these technologies, both in individual projects and as part of my academic curriculum.</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 pt-4'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={Html} alt="html logo" style={{height:'70px'}} className='pt-2' />
            <h6 className='text-gray-300 py-2 text'>HTML</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={Css} alt="css logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3'>CSS</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={Js} alt="javascript logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3'>JavaScript</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={ReactImg} alt="react logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3'>React</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={Tailwind} alt="tailwind logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3 text'>Tailwind CSS</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={CSharp} alt="C# logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3'>C#</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={Sql} alt="Sql logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3'>SQL</h6>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center px-16'>
            <img src={Github} alt="Github logo" style={{height:'70px'}} className='pt-2'/>
            <h6 className='text-gray-300 py-3'>Github</h6>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills