"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import { HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[110rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image
                        //fill={true}
                        src='/Laksh_New_Photo.jpg'
                        alt='Laksh Gangwani'
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>
                
                <motion.span className='absolute bottom-0 right-0 text-2xl'
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        duration: 0.7,
                        stiffness: 125,
                        delay: 0.1,
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
            initial={{opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
        >
        <span className="font-bold">Hello, I'm Laksh.</span> I'm a{" "}
        <span className="font-bold">Master's student in Computer Science, </span> passionate about {" "}
        <span className="font-bold">software development,</span> ready to tackle challenges with a 
        <span className="italic"> strong technical background </span> and {" "}
        <span className="underline">hands-on experience</span>.
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
            initial={{opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay:0.1,
            }}
        >
            <Link
                href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
            >
                Contact me <BsArrowRight className='opacity-70 group-hover:: translate-x-1 transition' />
            </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/15 dark:bg-white/10' href='/Laksh_Gangwani_Resume_S_01.pdf' download>
                Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white/70' href="https://www.linkedin.com/in/laksh-gangwani/" target='_blank'>
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white/70' href="https://www.github.com/laksh-gangwani/" target='_blank'>
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
