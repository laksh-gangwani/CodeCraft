"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y:0}}
        transition={{
            delay:0.175
        }}
        id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
       


       I'm currently pursuing my Master's in{" "}
        <span className="font-medium">Computer Science</span>, specializing in 
        cloud computing and{" "}
        <span className="font-medium">full-stack development</span>. My path combines academic study with hands-on experience, enriched by {" "}
        <span className="italic">multiple internships </span>that bridged theory with practice in professional settings.
        Outside of my studies and work, I have a deep passion for tackling  <span className="underline">LeetCode</span>. It's not just a hobby; it's a way to continually challenge myself and refine my 
        {" "}<span className="font-medium">
        problem-solving skills.
        </span>
      </p>
      
      

      <p className='mb-3'>Now, as I look towards the future, I'm eager to{" "}
      <span className="font-medium"> explore new opportunities </span>
        where I can leverage my background in {" "}
        <span className="font-medium">software engineering </span>and my passion for technology to make a{" "}
        <span className="font-medium">meaningful impact</span>.
      </p>
    </motion.section>
  )
}
