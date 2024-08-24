import React from 'react'

function ProjectCard({title, children, isButton,client, src, tech}) {
  return (
    <div className='p-3 md:p-4 flex flex-col w-full md:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl hover:scale-110 duration-300'>
        <div className='flex justify-between'>
          {src && <img className='rounded-full w-14 h-14' src={src} alt='Project Card'/>}
          <span className={`px-2 flex flex-col ${src && 'items-end'}`}>
            <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>
            <h4 className='text-m md:text-l'>{client}</h4>
          </span>
        </div>
        <p className='pt-2 pl-2 text-sm tracking-tight'>{tech}</p>
        <p className='p-2 text-sm md:text-md leading-tight flex flex-col gap-y-2'>{children}</p>
        <div className='mt-2 p-2 md:p-4 flex justify-between gap-2 md:gap-4'>
            {isButton?.demo && <a href={isButton.demo} target='_blank' rel='noreferrer'><button className='md:mt-10 text-white p-2 md:py-1 text-md md:text-xl font-semibold rounded-3xl bg-[#465697] hover:bg-blue-500'>Demo</button></a>}
            {isButton?.source && <a href={isButton.source} target='_blank' rel='noreferrer'><button className='md:mt-10 text-white p-2 md:py-1 text-md md:text-xl font-semibold rounded-3xl bg-[#465697] hover:bg-blue-500'>Source Code</button></a>}
        </div>
    </div>
  )
}

export default ProjectCard