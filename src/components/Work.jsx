/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import gameSimulator from '../assets/GameSimulator.png'
import gameTracker from '../assets/GameTracker.png'
import phTours from '../assets/phTours.png'
import Dfd from '../assets/DFD.png'
import Erd from '../assets/ERD.png'
import Practicum from '../assets/Practicum.png'

const Work = () => {

  return (
    <div name='work' id='work' className='w-full md:h-screen text-gray-300 min-h-[1000px]'>
      {/* Container */}
        <div className='w-full h-full max-w-[1000px] flex flex-col  justify-center mx-auto px-4'>
          <div className='pb-8'>
          <h2 className='text-4xl border-b-4 inline border-[#06b6d4] text-gray-300 font-bold'>Work</h2>
            <p className='pt-4'>
              Here are some of my projects. See my github for my other applications.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Grid item */}
            <div style={{backgroundImage: `url(${gameSimulator})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Game Simulator
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>C#</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>.Net Core</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Console App</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  Various warrior simulation
                </p>
                <div className='pt-4 text-center'>
                  <a href="https://github.com/Diazrob/Game-Simulator" target="_blank">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo & Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${phTours})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Ph Tours
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>React</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Tailwind CSS</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Javascript</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  This is a sample description of the project. The quick brown fox jumps over the laZY Dog. This is practicum management web application to track student's timesheet, evaluation and forms.
                </p>
                <div className='pt-4 text-center'>
                  <a href="https://diazrobee.github.io/ph-destinations/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo
                    </button>
                    </a>
                  <a href="https://github.com/DiazRobee/ph-destinations" target="_blank">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${gameTracker})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Game Tracker
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>C#</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>MS Sql</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>WinForms</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  MS Windows Forms application used to track game rounds, players, points and winners. Rounds are determined based on the number of players added and currently auto-generates a random champion.
                </p>
                <div className='pt-4 text-center'>
                  <a href="https://github.com/Diazrob/Game-Simulator" target="_blank">
                      <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                        Demo & Code
                      </button>
                    </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Practicum})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  CIT Practicum Management
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>C#</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>MS Sql</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>.Net Core MVC</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  Website application used to track Practicum of CIT students. Features include sign-in account, timesheet tracking and approval, online evaluation forms, job postings
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
            <div style={{backgroundImage: `url(${Dfd})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Grid Art
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>C++</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Console App</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  C++ snippet Document that illustrates how data moves within a system. Created for our System and Analysis and Design Project. 
                </p>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo
                    </button>
                    </a>
                  <a href="https://github.com/Diazrob/grid-art" target='_blank'>
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Erd})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Entity Relationship Diagram
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>MS Visio</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  This is a visual representation of the data model that shows relationships between entities in database. Used to create initial draft of CIT Practicum Management database.
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
          </div>

        </div>
    </div>
  )
}

export default Work


