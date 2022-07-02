import React from 'react';
import DividendEg from '../assets/dividend.png'
import EcommerceEg from '../assets/ecommerce.png'
import JSGameEg from '../assets/jsgame.png'
import SocialMediaEg from '../assets/socialmedia.png'
import SpotifyEg from '../assets/spotifyeg.png'
import ToDoEg from '../assets/todo.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#caccc1] bg-[#151a1d]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#caccc1] border-[#bf874c]'>Projects</p>
                <p className='py-6'>// Check out some of my recent projects</p>
            </div>

        {/* Containor */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>

            {/* Grid Item */}    
                <div 
                style={{backgroundImage: `url(${DividendEg})`}}
                className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                            Dividend Tracker
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${JSGameEg})`}}
                className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                            JavaScript Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>   
                </div>
                           {/* Grid Item */}    
                           <div 
                style={{backgroundImage: `url(${EcommerceEg})`}}
                className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                            E-Commerce Store
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${SpotifyEg})`}}
                className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                            Retro Spotify Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>   
                </div>
                           {/* Grid Item */}    
                           <div 
                style={{backgroundImage: `url(${SocialMediaEg})`}}
                className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                            Retro Social Media Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${ToDoEg})`}}
                className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                            React To-Do App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>   
                </div>
                



            </div>
        </div>
    </div>
  )
}

export default Projects;