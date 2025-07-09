import React from 'react'
import ProjectCard from './ProjectCard'
import NinjaCRMV2Logo from '../../assets/images/ninjacrm_v2.png'
import AnimateOnScroll from '../AnimateOnScroll'

const projects = new Map([
  ['Stackuno (Cloud Manager)',{client:'Sword', tech:'Go, React, PHP(Laravel), MySQL, Echo, Microservices, S3, Redis, Go Routines', main:['Developed a Golang-based system to manage server-level processes like live terminal access, file/database management, and integrated phpMyAdmin securely through custom services.', 'Automated deployment and provisioning workflows for Laravel and WordPress apps with configuration backups, restore options, and User-based isolation.', 'Implemented key security features including ModSecurity (OWASP CRS), passkeys (WebAuthn), 2FA (TOTP, Email OTP), and password policy enforcement.', 'Introduced file quota limits, server resource monitoring (CPU, RAM, disk), and user-level RBAC with detailed audit logging.', 'Collaborated across Golang (backend services), Laravel (APIs), and React (frontend) to deliver a scalable and secure cloud management platform.'],}],
  ['NinjaCRM',{client:'ICICI Lombard', src:NinjaCRMV2Logo, tech:'Go, MySQL, Python, Echo, Microservices, SQS, S3, Redis, Go Routines', main:['Developed a multi-service backend in Go and Python, integrating Echo, MySQL, Redis, SQS, and S3.','Implemented JWT middleware for secure API authentication and authorization.','Optimized database queries and utilized Go routines for improved performance and scalability.','Managed all deployments and server configurations, ensuring seamless integration and operation.','Coordinated with cross-functional teams for effective service monitoring, issue resolution, and performance optimization.'],}],
  ['Trello to Github',{client:'Sword', src:'', tech:'Go, Gin', main:['Designed and developed a Go script using the Gin framework to automate Trello board migration to GitHub v2 projects.','Addressed and resolved complex API errors, ensuring successful migration and data integrity across platforms.','Handled GitHub API rate limits to Migrate all board quickly.'],}],
  ['Cloud Storage',{client:'Sword Open Source', src:'', tech:'PHP, Laravel', main:['Developed a robust Laravel storage driver designed to seamlessly sync files across multiple disks while leveraging a cache disk for enhanced performance.','Efficiently sync files across all remote disks in the background, ensuring high availability.','Prioritizes accessing files from the cache disk; if unavailable, retrieves from remote disks in a specified order.'],isButton:{source:'https://github.com/ssntpl/cloud-storage'}}],
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
