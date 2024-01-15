import React from 'react'
import Typed from 'react-typed'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen p-4 mt-12 flex justify-center items-center min-h-[1000px]'>

      <form action="https://getform.io/f/55477593-d8d7-4211-af69-4ea22bfb2088" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-2 text-gray-300'>
        <h2 className='text-4xl border-b-4 inline border-[#06b6d4] text-gray-300 font-bold'>Contact</h2>
          <p className='py-4'>
            Submit the form below or shoot me an email - robeeloudiaz@gmail.com
          </p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='p-2 my-4 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6]' name="message" placeholder='Message'  rows="10"></textarea>
        <button className='my-8 p-2 w-[200px] justify-center text-white mx-auto flex border-2 hover:border-[#06b6d4] hover:bg-[#06b6d4]' type='submit' name='submit'>
          Let's Connect
        </button>
      </form>

    </div>
  )
}

export default Contact