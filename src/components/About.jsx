import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#151a1d] text-[#caccc1]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#bf874c]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Troy, nice to meet you. Feel free to look around and test my projects with the "Demo" button.</p>
          </div>
          <div>
            <p>I am passionate about building excellent web-apps and programs.
              I am learning and working on my skills everyday. I have experience in
              Front-End Development in technologies such as React.js, HTML/CSS, Java,
              C# + .NET, and Python. Among other related technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;