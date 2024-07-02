"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion";

export default function About() {
  return (
    

    <motion.section className='mb-12 max-w-[45rem] text-center leading-8 sm:mb-15 scroll-mt-[6.5rem]'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{
      delay:0.175
    }}
    id="about">
        
        <SectionHeading>About Me</SectionHeading>
       
        <p className='mb-3 font-bold text-md font-mar text-white '>
        <span  >I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Information Security at VIT Vellore.</span> 
        <span>With a CGPA of</span><span> 9.7, </span>
        <span>I have demonstrated academic excellence and was honored with a merit scholarship for the academic year 2023-2024.</span>
        </p>
        <p className='font-bold text-md font-gouri text-white'>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog.
        <span>Outside of academics, I have a passion for art and tennis. My dedication to tennis led me to win the fresher's tournament in lawn tennis. These hobbies provide a balance to my rigorous studies and contribute 
            to my overall growth and well-being.</span>
        </p>
       
    </motion.section>
  )
}
