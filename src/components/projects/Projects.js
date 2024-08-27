import React from 'react'
import ProjectCard from './ProjectCard'
import NinjaCRMV2Logo from '../../images/ninjacrm_v2.png'
import TaillogLogo from '../../images/taillog_logo.png'
import ClagentLogo from '../../images/clagent_logo.png'
import AnimateOnScroll from '../AnimateOnScroll'

const projects = new Map([
  ['NinjaCRM',{client:'ICICI Lombard', src:NinjaCRMV2Logo, tech:'Go, MySQL, Python, Echo, Microservices, SQS, S3, Redis, Go Routines', main:['Developed a multi-service backend in Go and Python, integrating Echo, MySQL, Redis, SQS, and S3.','Implemented JWT middleware for secure API authentication and authorization.','Optimized database queries and utilized Go routines for improved performance and scalability.','Managed all deployments and server configurations, ensuring seamless integration and operation.','Coordinated with cross-functional teams for effective service monitoring, issue resolution, and performance optimization.'],}],
  ['Taillog',{client:'Taillog', src:TaillogLogo, tech:'PHP, Laravel, MySQL, S3, HTML, CSS, Tailwind CSS', main:['Fixed bugs and added new features to ensure robust functionality and seamless performance.','Enhanced the frontend using Tailwind CSS, improving user experience and interface responsiveness.'],}],
  ['Cloud Agent',{client:'Sword', src:ClagentLogo, tech:'Go, Gin', main:['Developed a cloud agent in Go with Gin for streamlined server administration and management.','Implemented secure API endpoints for real-time server monitoring and control.','Designed a scalable architecture to handle multiple server instances efficiently.','Integrated logging and alerting features for proactive issue resolution and system health monitoring.'],}],
  ['Trello to Github',{client:'Sword', src:'', tech:'Go, Gin', main:['Designed and developed a Go script using the Gin framework to automate Trello board migration to GitHub v2 projects.','Addressed and resolved complex API errors, ensuring successful migration and data integrity across platforms.','Handled GitHub API rate limits to Migrate all board quickly.'],}],
  ['Cloud Storage',{client:'Sword Open Source', src:'', tech:'PHP, Laravel', main:['Developed a robust Laravel storage driver designed to seamlessly sync files across multiple disks while leveraging a cache disk for enhanced performance.','Efficiently sync files across all remote disks in the background, ensuring high availability.','Prioritizes accessing files from the cache disk; if unavailable, retrieves from remote disks in a specified order.'],isButton:{source:'https://github.com/ssntpl/cloud-storage'}}],
  ['Password Generator',{client:'Own', src:'', tech:'HTML, CSS, Tailwind CSS, JavaScript, React', main:['Customizable length and character types.','Instant password generation.','Easy copy-to-clipboard functionality'],isButton:{demo:'https://Abhishek5Sharma.github.io/password--and-captcha-generator',source:'https://github.com/Abhishek5Sharma/password--and-captcha-generator'}}],
  ['Planner',{client:'Own', src:'', tech:'HTML, CSS, Tailwind CSS, JavaScript, React, Go, MySQL', main:['Working on it'],}],
]);

function Projects() {
  return (
    <div id='Projects' className='bg-black shadow-xl mx-0 md:mx-20 bg-opacity-40 rounded-lg p-12 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-8 md:py-12 md:px-8 flex flex-wrap justify-center gap-5'>
        {Array.from(projects).map(([key, value]) => (
          <AnimateOnScroll key={key} type={'zoom-in-up'}>
          <ProjectCard title={key} value={value}></ProjectCard>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}

export default Projects