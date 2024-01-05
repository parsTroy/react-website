import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import CSharp from '../assets/csharp.png';
import JavaImg from '../assets/java.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#151a1d] text-[#caccc1]'>
            {/* Containor */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#bf874c]'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-6 text-center py-8'>
                    <div className='flex justify-around shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <div>
                            <img className='my-4 w-20 mx-auto' src={HTML} alt='HTML icon' />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div>
                            <img className='my-4 w-20 mx-auto' src={CSS} alt='CSS icon' />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>

                    <div className='flex justify-around shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <div>
                            <img className='my-4 w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
                            <p className='my-4'>JavaScript</p>
                        </div>
                        <div>
                            <img className='my-4 w-20 mx-auto' src={ReactImg} alt='React icon' />
                            <p className='my-4'>React</p>
                        </div>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='my-4 w-20 mx-auto' src={JavaImg} alt='Java icon' />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='my-4 w-20 mx-auto' src={CSharp} alt='C# icon' />
                        <p className='my-4'>C#</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='my-4 w-20 mx-auto' src={GitHub} alt='Github icon' />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='my-4 w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;