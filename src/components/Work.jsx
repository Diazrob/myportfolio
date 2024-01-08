import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'
import Dfd from '../assets/DFD.png'
import Erd from '../assets/ERD.png'
import Practicum from '../assets/Practicum.png'

const Work = () => {
  return (
    <div name='work' id='work' className='w-full md:h-screen text-gray-300 min-h-[1000px]'>
      {/* Container */}
        <div className='w-full h-full max-w-[1000px] flex flex-col  justify-center mx-auto px-4'>
          <div className='pb-8'>
            <h2 className='font-bold text-4xl border-b-4 inline border-[#06b6d4]'>
              Work
            </h2>
            <p className='pt-4'>
              Browse some of my projects.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Grid item */}
            <div style={{backgroundImage: `url(${WorkImg})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col absolute top-2 bottom-2'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm '>HTML</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>CSS</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Javascript</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${RealEstate})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center absolute'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <p className='text-1xl text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${WorkImg})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center absolute'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Games Tracker
                </span>
                <p className='text-1xl text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Practicum})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center absolute'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  CIT Practicum Management
                </span>
                <p className='text-1xl text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Dfd})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center absolute'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Entity Relationship Diagram
                </span>
                <p className='text-1xl text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Erd})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center absolute'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Entity Relationship Diagram
                </span>
                <p className='text-1xl text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
          </div>

        </div>
    </div>
  )
}

export default Work


