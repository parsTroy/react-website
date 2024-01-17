import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#151a1d]'>

            {/* Containor */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#bf874c]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#FEF9F3]'>Troy Parsons</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#E8D9CA]'>I'm a Software Developer.</h2>
                <p className='text-[#E8D9CA] py-4 max-w-[700px]'>
                    Where Innovation Meets Implementation: Code with Purpose.
                </p>
                <Link to="projects" smooth={true} duration={500} className='hover:text-[#E8D9CA]'>
                    <div>
                        <button className='text-[#caccc1] hover:text-[#1b3338] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#bf874c] hover:border-[#bf874c]'>
                            View Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Home