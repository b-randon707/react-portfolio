import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-500'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4'>About</p>
                </div>
                <div className='m-w-[1000px] w-full grid grrid-cols-2 gap-8'>
                </div>
                <div className='sm:text-right text-4xl font-bold text-gray-300'>
                    <p>Hello, I'm Brandon nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-gray-300'>I am passionate about building excellent software that improves 
                       the loves of those around me. I specializ increating software for 
                       clients ranging from indiiduals and small-businesses all the way 
                       to large enterprise corporations. What would you do if you had a 
                       software expert available at your fingertips. </p></div>
            </div>
        </div>
    </div>
  )
}

export default About