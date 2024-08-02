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
                    <p>Hello, I'm Brandon Garza.</p>
                </div>
                <div>
                    <p className='text-gray-300'>I graduated from the University of Texas Rio Grande Valley in May 2023, and received a Bachelor's of Science in Computer Engineering.
                    I also interned at the ECISD IT department during my last semester in school from December 2022 through November 1, 2023. Since then I have been working
                    at a Commercial Real Estate company, researching the market. I am a gamer, I enjoy first-person shooters, sports, survival, rpg's, Call of Duty, PUBG, Rust, Grand Theft Auto,
                    God of War, Sekiro, you name it. I like to be healthy, and trying out new restaurants, playing soccer, football, baseball, going out with friends, checking out new places, going on trips,
                    being outdoors, fishing and hunting. I can go on and on.  </p></div>
            </div>
        </div>
    </div>
  )
}

export default About