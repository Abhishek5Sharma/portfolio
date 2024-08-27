import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
    const [menu,openMenu] = useState(false)
    const [showMenu,setShowMenu] = useState(true)
  return (
    <div className='sticky top-0 z-50'>
        <nav className='flex flex-wrap justify-between md:items-center shadow-2xl bg-[#171d32] text-white px-4 mt-2 pt-2 md:pt-0 md:px-20'>
            <span className='md:text-5xl text-2xl font-bold tracking-wide uppercase underline'>Portfolio</span>
            <ul className={`${menu?'block':'hidden'} w-full md:w-auto mx-24 py-2 mt-4 font-semibold md:mt-2 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                <a href='#About'>
                    <li className='text-lg hover:underline transition-all duration-300 p-1 md:p-0'>About</li>
                </a>
                <a href='#Experience'>
                    <li className='text-lg hover:underline transition-all duration-300 p-1 md:p-0'>Experience</li>
                </a>
                <a href='#Projects'>
                    <li className='text-lg hover:underline transition-all duration-300 p-1 md:p-0'>Projects</li>
                </a>
                <a href='#Footer'>
                    <li className='text-lg hover:underline transition-all duration-300 p-1 md:p-0'>Contact</li>
                </a>
            </ul>
            {showMenu?(<IoMdMenu size={35} className='absolute md:hidden right-6 top-1 transition-all duration-300' onClick={()=>{openMenu(!menu);setShowMenu(!showMenu);}}/>):<MdOutlineClose size={35} className='absolute md:hidden right-6 top-1 transition-all duration-300' onClick={()=>{openMenu(!menu);setShowMenu(!showMenu);}}/>}
        </nav>
    </div>
  )
}

export default Navbar