/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import gameSimulator from '../assets/GameSimulator.png'
import gameTracker from '../assets/GameTracker.png'
import phTours from '../assets/phTours.png'
import mobile from '../assets/mobile.jpg'
import Practicum from '../assets/Practicum.png'
import grid from '../assets/Bot-position-grid-pic.png'

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
                  Game-Simulator
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>C#</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>.Net Core</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Console App</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                Console App game simulator using interface where warriors with different abilities and attributes battle until hp is depleted.
                </p>
                <div className='pt-4 text-center'>
                  <a href="https://github.com/Diazrob/Game-Simulator" target="_blank">
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo
                    </button>
                    </a>
                  <a href="https://github.com/Diazrob/Game-Simulator" target='_blank'>
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Code
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
                  Website project that shows different tourist destinations in the Philippines. Features include selecting different tour packages and date for booking. Created to develop knowledge in frontend development.
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
                  <a href="https://github.com/Diazrob/TournamentTracker" target="_blank">
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
                  <h2 className='text-center rounded-lg px-2 py-2 m-1 bg-white text-gray-700 font-bold text-md'>In Progress</h2>
                  {/* buttons commented-out
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
                   */}
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${grid})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Bot Position Grid
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>C++</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Console App</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                  C++ snippet Document that illustrates how bot moves to a different position within the grid. Implements a Position class as an Abstract Data Type (ADT). Course assignment for C++ class.
                </p>
                <div className='pt-4 text-center'>
                  <a href="https://github.com/Diazrob/Position-Grid" target='_blank'>
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo
                    </button>
                    </a>
                  <a href="https://github.com/Diazrob/Position-Grid" target='_blank'>
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
            {/* End of Grid item */}
            {/* Grid item */}
            <div style={{backgroundImage: `url(${mobile})`}}  className='hover:scale-110 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center flex flex-col top-1 bottom-1 mt-[-10px]'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Mad Libs Hall Pass
                </span>
      
                  <ul className='flex items-center justify-center py-1 text-sm'>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>React Native</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>CSS</li>
                    <li className='shadow-md cursor-default px-2 mx-1 my-1 bg-slate-600 rounded-sm'>Expo</li>
                  </ul>

                <p className='text-[13px] text-gray-100 py-2 max-w-96'>
                   This is a mobile app that passes data from page 1 to page 2. It also contains links to the MadLibs site. used useLocalSearchParams, Pressable, and hooks.
                </p>
                <div className='pt-4 text-center'>
                  <a href="https://github.com/Diazrob/A1MadLibs" target='_blank'>
                    <button className='text-center rounded-lg px-4 py-2 m-1 bg-white text-gray-700 font-bold text-md'>
                      Demo
                    </button>
                    </a>
                  <a href="https://github.com/Diazrob/A1MadLibs" target='blank'>
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


