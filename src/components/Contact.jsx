import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/3dbd241f-c710-4410-bf1f-8e3a486605aa" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline boreder-b-4 border-white text-gray-500'>Contact</p>
                <p className='text-gray-500 py-4'>// Submit the form below or shoot me an emai - bdgarza707@gmail.com</p>

            </div>
            <input className='bg-[#ccd6f6] p-2'  type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2'  name="message" rows="10" placeholder='Message'> </textarea>
            <button className='text-white border-2 hover:bg-blue-300 hover:border-blue-300 hover:text-gray-800 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact