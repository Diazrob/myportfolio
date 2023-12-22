import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] bg-black flex justify-between items-center px-4 text-white'>
      <div>
        <img src={Logo} alt="Logo" style={{height:'50px'}} />
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleClick} className='flex md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 flex md:hidden items-center justify-center w-full h-screen bg-white dark:bg-slate-900'}>
      <ul>
        <li className='py-4 text-4xl'>Home</li>
        <li className='py-4 text-4xl'>About</li>
        <li className='py-4 text-4xl'>Experience</li>
        <li className='py-4 text-4xl'>Projects</li>
        <li className='py-4 text-4xl'>Skills</li>
        <li className='py-4 text-4xl'>Contact</li>
      </ul>
      </div>
      {/*social media*/}
      <div className='fixed hidden lg:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='flex w-[160px] h-[60px] bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar