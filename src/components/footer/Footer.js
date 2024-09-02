import React from 'react'
import { FaGithub, FaMobileScreen } from 'react-icons/fa6'
import { LiaLinkedin } from 'react-icons/lia'
import { MdOutlineEmail } from 'react-icons/md'
import AnimateOnScroll from '../AnimateOnScroll'

function Footer() {
  return (
    <div id='Footer' className='flex flex-col md:flex-row gap-y-4 justify-between bg-[#465697] text-white p-4 md:p-12 items-center'>
        <AnimateOnScroll type={'zoom-in-right'}>
          <div>
              <h1 className='text-5xl md:text-7xl font-bold'>Contact</h1>
              <h3 className='text-lg md:text-2xl font-normal'>Feel Free To Reach Out!</h3>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll type={'zoom-in-left'}>
          <ul className='text-xl md:text-2xl'>
              <li className='flex gap-2 items-center'><FaMobileScreen size={30}/>+91 7248409660</li>
              <li className='flex gap-2 items-center'><MdOutlineEmail size={30}/>as7332861@gmail.com</li>
              <a href='https://linkedin.com/in/abhishek-sharma-5a024a227' target='_blank' rel="noreferrer"><li className='flex gap-2 items-center hover:underline'><LiaLinkedin size={30}/>abhishek-sharma-5a024a227</li></a>
              <a href='https://github.com/Abhishek5Sharma' target="_blank" rel="noreferrer"><li className='flex gap-2 items-center hover:underline'><FaGithub size={30}/>github.com/Abhishek5Sharma</li></a>
          </ul>
        </AnimateOnScroll>
    </div>
  )
}

export default Footer