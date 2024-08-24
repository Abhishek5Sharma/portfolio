import React from 'react'
import ProjectCard from './ProjectCard'
import NinjaCRMV2Logo from '../../images/ninjacrm_v2.png'
import TaillogLogo from '../../images/taillog_logo.png'
import ClagentLogo from '../../images/clagent_logo.png'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-8 md:py-12 md:px-8 flex flex-wrap justify-center gap-5'>
        <ProjectCard title={'NinjaCRM'} client={'ICICI Lombard'} src={NinjaCRMV2Logo} tech={'Go, MySQL, Python, Echo, Microservices, SQS, S3, Redis, Go Routines'}>
        <li></li> 
        </ProjectCard>
        <ProjectCard title={'Taillog'} client={'Taillog'} src={TaillogLogo} tech={'PHP, Laravel, MySQL, S3, HTML, CSS, Tailwind CSS'}>
          <li></li>
        </ProjectCard>
        <ProjectCard title={'Cloud Agent'} client={'Sword'} src={ClagentLogo} tech={'Go, Gin'}>
          <li></li>
        </ProjectCard>
        <ProjectCard title={'Dev Log'} client={'Sword'} tech={'MySQL'}>
          <li>Design Database Structure for DevLog.</li>
          <li>This is Project Management System.</li>
        </ProjectCard>
        <ProjectCard title={'Trello to Github'} client={'Sword'} tech={'Go, Gin'}>
          <li>Migrate Trello Board to Github Project V2.</li>
          <li>This is a Script for Migration.</li>
        </ProjectCard>
        <ProjectCard title={'Cloud Storage'} client={'Sword Open Source'} tech={'PHP, Laravel'} isButton={{source:'https://github.com/ssntpl/cloud-storage'}}>
          <li></li>
        </ProjectCard>
        <ProjectCard title={'Laravel Files'} client={'Sword Open Source'} tech={'PHP, Laravel'} isButton={{source:'https://github.com/ssntpl/laravel-files'}}>
          <li></li>
        </ProjectCard>
        <ProjectCard title={'Password Generator'} client={'Own'} tech={'HTML, CSS, Tailwind CSS, JavaScript, React'} isButton={{demo:'https://Abhishek5Sharma.github.io/password--and-captcha-generator',source:'https://github.com/Abhishek5Sharma/password--and-captcha-generator'}}>
          <li>This Project I have made during Learn React.</li>
          <li>This is a Password Generator App.</li>
        </ProjectCard>
        <ProjectCard title={'Planner'} client={'Own'} tech={'Go, React, MySQL'}>
          On Going
        </ProjectCard>
      </div>
    </div>
  )
}

export default Projects