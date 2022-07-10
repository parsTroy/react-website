import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo-1.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#151a1d] text-[#caccc1]'>
        <div>
            <a href='./'>
              <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
            </a>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} duration={500} className='hover:text-[#bf874c]'>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className='hover:text-[#bf874c]'>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className='hover:text-[#bf874c]'>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className='hover:text-[#bf874c]'>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className='hover:text-[#bf874c]'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1b3338] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} className='hover:text-[#151a1d]'>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} className='hover:text-[#151a1d]'>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} className='hover:text-[#151a1d]'>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500} className='hover:text-[#151a1d]'>
              Projects
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} className='hover:text-[#151a1d]'>
              Contact
            </Link>
          </li>
        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#7883CA]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/troyalparsons/">
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/parsTroy">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#9cb2ad]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="mailto:troyparsonsdev@proton.me">
                Email <MdEmail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar