import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#151a1d] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/6fdf0f0c-8b0c-4481-90b6-7ea7833eb839' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#bf874c] text-[#caccc1]'>Contact</p>
          <p className='text-[#caccc1] py-4'>// Submit the form below or send me an email - troyparsonsdev@gmail.com</p>
        </div>
        <input className='p-2 bg-[#669297] text-[#1b3338] placeholder-[#caccc1]' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#669297] text-[#1b3338] placeholder-[#caccc1]' type="email" placeholder='Email' name='email' required />
        <textarea className='p-2 bg-[#669297] text-[#1b3338] placeholder-[#caccc1]' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-[#caccc1] border-[#caccc1] border-2 hover:bg-[#bf874c] hover:border-[#bf874c] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;