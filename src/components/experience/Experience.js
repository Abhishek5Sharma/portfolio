import React from 'react'
import {FaHtml5, FaCss3, FaJs, FaReact, FaGolang, FaGit, FaGithub, FaPhp, FaLaravel, FaPython} from 'react-icons/fa6'
import { SiMysql, SiPostman } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import SwordLogo from '../../images/ssntpl_logo.png';
import Icon from './Icon';
import AnimateOnScroll from '../AnimateOnScroll'

const skills = new Map([
  ['HTML5', <FaHtml5 size={50}  color='#61DBFB'/>],
  ['CSS3', <FaCss3 size={50}  color='#61DBFB'/>],
  ['JavaScript', <FaJs size={50}  color='#61DBFB'/>],
  ['React', <FaReact size={50}  color='#61DBFB'/>],
  ['GoLang', <FaGolang size={50}  color='#61DBFB'/>],
  ['Python', <FaPython size={50}  color='#61DBFB'/>],
  ['PHP', <FaPhp size={50}  color='#61DBFB'/>],
  ['Laravel', <FaLaravel size={50}  color='#61DBFB'/>],
  ['MySQL', <SiMysql size={50}  color='#61DBFB'/>],
  ['Git', <FaGit size={50}  color='#61DBFB'/>],
  ['Github', <FaGithub size={50}  color='#61DBFB'/>],
  ['Postman', <SiPostman size={50}  color='#61DBFB'/>],
  ['Redis Cache', <DiRedis size={50}  color='#61DBFB'/>],
]);


function Experience() {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <AnimateOnScroll type={'fade-up'}>
      <div className='flex justify-between'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <h1 className='text-l md:text-xl text-white'>Total&nbsp;&nbsp;2+ years</h1>
      </div>
      </AnimateOnScroll>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/4 gap-8 py-8'>
          {Array.from(skills).map(([key, value]) => (
              <AnimateOnScroll key={key} type={'zoom-in'}>
              <Icon title={key}>{value}</Icon>
              </AnimateOnScroll>
            ))}
        </div>
        <div>
        <AnimateOnScroll type={'zoom-in-left'}>
          <a href='https://ssntpl.com/' target='_blank' rel='noreferrer'>
            <div className='flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 duration-300'>
              <img className='w-16' src={SwordLogo} alt='Sword Logo'></img>
              <span className='text-white'>
                <h1 className='font-bold leading-tight'>Sword Software N Technologies Pvt. Ltd.</h1>
                <span className='flex justify-end'>
                  <p className='text-sm'>New Delhi</p>
                </span>
                <div className='flex justify-between py-1'>
                  <p className='text-m leading-tight font-thin'>
                    Software Engineer
                  </p>
                  <p className='text-sm leading-tight font-thin'>
                    Sep 2022 - Present
                  </p>
                </div>
              </span>
            </div>
          </a>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  )
}

export default Experience