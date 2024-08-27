import React from 'react'

function ProjectCard({title, value}) {
  if (value){
    return (
      <div className='p-3 md:p-4 flex flex-col h-full w-80 bg-[#171d32] shadow-lg shadow-slate-900 rounded-2xl hover:scale-110 duration-300'>
          <div className='flex justify-between rounded-2xl p-2 bg-black bg-opacity-30'>
            {value.src && <img className='rounded-full w-14 h-14' src={value.src} alt='Project Card'/>}
            <span className={`px-2 flex flex-col ${value.src && 'items-end'}`}>
              <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>
              <h4 className='text-m md:text-l'>{value.client}</h4>
            </span>
          </div>
          <p className='pt-2 pl-2 text-sm tracking-tight'>{value.tech}</p>
          <p className='m-2 text-sm md:text-md leading-tight flex flex-col flex-wrap overflow-hidden gap-y-2'>
            {value.main.map((item,index)=>(<li key={index}>{item}</li>))}            
          </p>
          <div className='mt-1 p-1 md:p-2 flex justify-between gap-2 md:gap-4'>
              {value.isButton?.demo && <a href={value.isButton.demo} target='_blank' rel='noreferrer'><button className='text-white p-2 md:py-1 text-md md:text-xl font-semibold rounded-3xl bg-[#465697] hover:bg-blue-500'>Demo</button></a>}
              {value.isButton?.source && <a href={value.isButton.source} target='_blank' rel='noreferrer'><button className='text-white p-2 md:py-1 text-md md:text-xl font-semibold rounded-3xl bg-[#465697] hover:bg-blue-500'>Source Code</button></a>}
          </div>
      </div>
    )
  }
  return (
    <></>
  )
}

export default ProjectCard