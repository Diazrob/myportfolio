/* eslint-disable react/jsx-no-target-blank */
import React, {useState} from 'react';
import Logo from '../assets/Logo.png';
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import cv from '../pages/CV.pdf';


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[50px] bg-black/90 flex justify-between items-center px-4 text-gray-300 text-1xl z-10'>
      <div className='px-4 hover:cursor-pointer'>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" style={{height:'50px'}} />
        </Link>
      </div>
      <ul className='hidden md:flex'>
        <li className=''>
            <Link to="home" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#06b6d4] before:absolute before:left-0 before:bottom-0 pb-2'>
              Home
            </Link>
        </li>
        <li>
            <Link to="about" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#06b6d4] before:absolute before:left-0 before:bottom-0 pb-2'>
              About
            </Link>
        </li>
        <li>
            <Link to="skills" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#06b6d4] before:absolute before:left-0 before:bottom-0 pb-2'>
              Skills
            </Link>
        </li>
        <li>
           <Link to="work" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#06b6d4] before:absolute before:left-0 before:bottom-0 pb-2'>
              Work
            </Link>
        </li>
        <li>
            <Link to="contact" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#06b6d4] before:absolute before:left-0 before:bottom-0 pb-2'>
              Contact
            </Link>
        </li>
      </ul>
      <div onClick={handleClick} className='flex md:hidden z-30 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 flex md:hidden items-center justify-center w-full h-screen bg-white dark:bg-slate-900 z-20'}>
      <ul>
        <li className='py-4 text-4xl'>
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
              Home
            </Link>
        </li>
        <li className='py-4 text-4xl'>
           <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
              About
            </Link>
        </li>

        <li className='py-4 text-4xl'>
            <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
              Skills
            </Link>
        </li>
        <li className='py-4 text-4xl'>
            <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
              Work
            </Link>
        </li>
        <li className='py-4 text-4xl'>
            <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
              Contact
            </Link>
        </li>
      </ul>
      </div>
      {/*social media*/}
      <div className='fixed hidden lg:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='flex w-[160px] h-[60px] bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://linkedin.com/in/robee-lou-diaz">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/Diazrob" target='_blank'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300'>
            <Link onClick={handleClick}  to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail size={30}/>
            </Link>
          </li>
          <li className='flex w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href={cv} target='_blank'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar