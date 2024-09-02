import React from 'react'
import TextChanger from '../TextChanger'
import ProfilePic from '../../images/abhishek_dp.jpg';
import AnimateOnScroll from '../AnimateOnScroll';

function Home() {
  return (
    <div id='Home' className='text-white flex md:flex-row flex-col gap-y-8 w-full md:justify-between md:items-start p-10 md:p-20'>
      <div className='md:w-3/4 md:pt-10 order-2 md:order-1'>
      <AnimateOnScroll type={'fade-up'} duration={2000}>
        <h1 className='text-2xl md:text-6xl flex flex-wrap font-bold leading-normal tracking-tighter'>
          Hi,&nbsp;<TextChanger text={'I am Abhishek Sharma'} isArray={false} interval={50}></TextChanger>
        </h1>
        <h1 className='text-2xl md:text-4xl font-bold leading-normal tracking-tighter'>
          I am Full Stack Developer
        </h1>
        <h1 className='text-2xl md:text-4xl flex flex-wrap font-bold leading-normal tracking-tighter'>
          I have Worked on &nbsp;
          <span className='text-cyan-300'>
            <TextChanger text={['Go Lang', 'React']} isArray={true} interval={50}></TextChanger>
          </span>
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'></p>
        <a href='#Footer'>
          <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-110 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
        </a>
        </AnimateOnScroll>
      </div>
      <div className='md:w-1/4 flex md:justify-end justify-center hover:scale-110 duration-300 order-1 md:order-2'>
        <AnimateOnScroll type={'fade-down'}>
        <img className='md:rounded-full rounded-tl-3xl rounded-br-3xl md:h-auto h-60' src={ProfilePic} alt='Profile'>
        </img>
        </AnimateOnScroll>
      </div>
    </div>
  )
}

export default Home