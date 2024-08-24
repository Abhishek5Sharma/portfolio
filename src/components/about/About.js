import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import {FaGolang, FaReact} from 'react-icons/fa6'

function About() {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div className='md:w-2/4'>
            <h2 className='text-2xl md:text-4xl font-bold md:mb-4 mb-2'>About</h2>
            <h1>Hello! I'm a passionate Full Stack Developer with a focus on building robust and scalable applications. My expertise lies in both backend and frontend development, allowing me to create seamless and efficient solutions from end to end.</h1>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <span className='hidden md:block items-center rounded-2xl hover:scale-125 duration-300'>
                            <FaReact size={100} color='#61DBFB'/>
                        </span>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-5/6'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal md:mb-2 mb-1'>Frontend Developer (React)</h1>
                            <p className='text-sm md:text-md leading-tight'>On the frontend, I use React.js to create interactive and dynamic user interfaces. My focus is on building responsive and user-friendly applications that provide a smooth and engaging experience. With React, I ensure that the frontend is not only visually appealing but also highly functional, incorporating modern design principles and best practices to deliver high-quality web applications.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <span className='hidden md:block items-center rounded-2xl hover:scale-125 duration-300'>
                            <FaGolang size={100} color='#29BEB0'/>
                        </span>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-5/6'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal md:mb-2 mb-1'>Backend Development (Golang)</h1>
                            <p className='text-sm md:text-md leading-tight'>In the backend, I specialize in Golang, a powerful language known for its performance and efficiency. I leverage Golang's strengths to build high-performance APIs, microservices, and backend systems that are not only fast but also highly maintainable and scalable. My experience with Golang enables me to handle complex server-side logic, data processing, and integration with various databases and third-party services.</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About