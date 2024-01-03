import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' id='work' className='w-full md:h-screen text-gray-300'>
      {/* Container */}
        <div className='w-full h-full max-w-[1000px] flex flex-col  justify-center mx-auto p-4'>
          <div className='pb-8'>
            <h2 className='font-bold text-4xl border-b-4 inline border-pink-500'>
              Work
            </h2>
            <p className='py-6'>
              Check out some of my projects.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid item */}
            <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
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
            <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
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
            <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
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
            <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
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
            <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
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
            <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover Effects */}
              <div  className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
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