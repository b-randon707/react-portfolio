import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Profilepic from '../assets/brandongarza.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*container */}
        <div className= 'max-w-[1000px] mx-auto px-8 flex items-center justify-center h-full' >
          {/*'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'*/}
          {/* Add profile picture */}
          <img
            src={Profilepic}
            alt="Brandon Garza"
            className=" rounded-xl mr-4"
          />

          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-blue-300'>Brandon Garza</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-700'>I'm a Full-Stack Developer </h2>
            <p className='text-[#f8f8f8] py-4 max-w-[700px]'>I'm a full-stack developer specializing in 
                building(and occasionally designing) exceptional 
                digital experieces. Currently, I'm focused on building
                responsive full-stack web applications.</p>  
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-white'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>    
                    </span>
                    </button>  
                </div>
          </div> 
        </div>

    </div>
  )
}

export default Home