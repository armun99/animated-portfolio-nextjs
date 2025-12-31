"use client"
import React, { useRef, useEffect } from 'react'
import { motion, useInView, useScroll } from 'framer-motion';
import Brain from '@/components/brain'
const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Git", "GitHub", "Docker", "Blockchain", "Web3", "Crypto", "Team collaboration", "Multi-Signature Wallet Design", "API Integration"];
const About = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current = document.getElementById('scroll-container');
  }, []);
  const { scrollYProgress } = useScroll({ container: scrollRef })
  const skillRef= useRef(null);
  const isInView = useInView(skillRef);

  const experienceRef = useRef(null);
  const isInViewExperience = useInView(experienceRef);

  const arrowRef = useRef(null);
  const handleArrowClick = () =>{
    arrowRef.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2 , ease: "easeInOut" }} > 

      {/* container */}
      <div className='h-full flex'>
        {/* text container*/}
        <div className=' flex flex-col  gap-12 lg:w-2/3 xl:w-1/2'>

          {/* biography */}
          <div className=' flex flex-col gap-7 lg:pb-60 pt-20 px-2 sm:px-8 md:px-12 lg:px-20 xl:px-28 '>
            <div className='flex flex-col lg:gap-20'>
            <h1 className='text-2xl font-bold'>BIOGRAPHY</h1>
            <p className='text-gray-700'>
            Front-end Developer and Web3 Automation Engineer with hands-on experience in JavaScript, React, Next.js, and blockchain-based systems. Started as a student in an early-stage crypto startup and evolved into a core contributor across four critical teams over five years.

Experienced in building internal Web3 tools, automation workflows, Telegram bots, and operational dashboards to support wallet management, monitoring, and compliance teams. Strong understanding of blockchain transactions, multi-signature wallet architectures, and crypto operations, combined with a collaborative mindset and a focus on efficiency, reliability, and scalable solutions.
            </p>
            </div>

            <motion.div onClick={handleArrowClick} initial={{opacity: 0.2 , y: 0}} animate={{opacity: 1 , y: 10}} transition={{repeat: Infinity, duration: 0.9 }}  className='cursor-pointer lg:pt-20 hidden sm:block'>
              <img src="arrow.png" alt="arrow" className='w-7 h-7' />
            </motion.div>

          </div>

          {/*skills */}
          <div  className='flex flex-col gap-2 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-38' ref={skillRef}>
            <h1 ref={arrowRef} className='text-2xl font-bold'>SKILLS</h1>
            <motion.div initial={{x: "-3000px"}} animate={isInView ? {x: 0} : {}} transition={{delay: 0.3 , duration: 0.4 }}  className='flex flex-wrap gap-2'>
              {SKILLS.map((skill)=>(
                <p className=' bg-black p-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer' key={skill}>{skill} </p>
              ))}
            </motion.div>

          </div>
          {/* experience */}
          <div  className='flex flex-col mb-40 p-4' ref={experienceRef}>
          <motion.h1  initial={{opacity: 0}} animate={isInViewExperience ? {opacity: 1} : {}} transition={{delay: 0.3 , duration: 0.4 }}  className='text-2xl pb-10 font-bold'>EXPERIENCE</motion.h1>
              <motion.div initial={{x: "-3000px"}} animate={isInViewExperience ? {x: 0} : {}} transition={{delay: 0.3 , duration: 0.4 }}  className='flex justify-between'>
                <div className='flex flex-col gap-2  w-2/5'>
                  <h2 className='font-bold bg-white p-2 rounded-md'> Automation & Workflow Engineer (Web3)</h2>
                  <p className='p-2 text-sm'>- Developed internal Web3 tools and automation workflows using JavaScript</p>
                  <p className='p-2 text-sm'>- Built applications to support monitoring, wallet, and operations teams
                  </p>
                  <p className='p-2 text-sm'>- Analyzed blockchain data and generated operational reports</p>
                  <p className='p-2 text-sm'>- Designed and implemented Telegram bots to automate alerts and reduce manual
                  workload
                  </p>
                  <p className='p-2 text-sm'>- Improved operational efficiency by streamlining repetitive and critical processes</p>
                  <span className='text-red-400 text-sm'>2023 - Present</span>
                  <span className='bg-green-500 p-2 rounded-md w-fit'>BitPin</span>
                </div>

                <div className='flex flex-col w-1/5 justify-center items-center  '> 
                  <div className='w-4 h-4 bg-white rounded-full ring-2 ring-red-500'></div>
                  <div className='w-0.5 h-full bg-black transform-gpu origin-bottom '></div>
                </div>
                
                <div className=' w-2/5'></div>
              </motion.div>
              {/* experience 2 */}
              <motion.div initial={{x: "-3000px"}} animate={isInViewExperience ? {x: 0} : {}} transition={{delay: 1.5 , duration: 0.4 }}  className='flex justify-between'>
                <div className='flex flex-col gap-2 w-2/5'>
                
                </div>
                <div className='flex flex-col  w-1/5 justify-center items-center  '> 
                  <div className='w-4 h-4 bg-white rounded-full ring-2 ring-red-500'></div>
                  <div className='w-0.5 h-full bg-black transform-gpu origin-bottom '></div>
                </div>
                <div className='flex flex-col gap-2 w-2/5'>
                <h2 className='font-bold bg-white p-2 rounded-md'> Wallet Operations</h2>
                  <p className='p-2 text-sm'>- Managed hot and cold wallets, including software and hardware wallets</p>
                  <p className='p-2 text-sm'>- Designed and operated multi-signature wallet architectures for secure asset custody
                  </p>
                  <p className='p-2 text-sm'>- Worked closely with monitoring teams to maintain smooth and secure wallet
                  operations
                  </p>
                  <span className='text-red-400 text-sm'>2022 - 2023</span>
                  <span className='bg-green-500 p-2 rounded-md w-fit'>BitPin</span>
                </div>
              </motion.div>
              {/* experience 3 */}
              <motion.div initial={{x: "-3000px"}} animate={isInViewExperience ? {x: 0} : {}} transition={{delay: 2.5 , duration: 0.4 }}  className='flex justify-between'>
                <div className='flex flex-col gap-2  w-2/5'>
                  <h2 className='font-bold bg-white p-2 rounded-md'> Anti-Money Laundering (AML)</h2>
                  <p className='p-2 text-sm'>- Performed AML and transaction monitoring to identify suspicious activities</p>
                  <p className='p-2 text-sm'>-Reviewed blockchain transactions and user behavior for compliance purposes
                  </p>
                  <p className='p-2 text-sm'>-Collaborated with compliance and operations teams to reduce risk and ensure
                  regulatory alignment
                  </p>
                  <span className='text-red-400 text-sm'>2021 - 2022</span>
                  <span className='bg-green-500 p-2 rounded-md w-fit'>BitPin</span>
                </div>
                <div className='flex flex-col  w-1/5 justify-center items-center  '> 
                  <div className='w-4 h-4 bg-white rounded-full ring-2 ring-red-500'></div>
                  <div className='w-0.5 h-full bg-black transform-gpu origin-bottom '></div>
                </div>
                <div className=' w-2/5'></div>
              </motion.div>
              {/* experience 4 */}
              <motion.div initial={{x: "-3000px"}} animate={isInViewExperience ? {x: 0} : {}} transition={{delay: 3.5 , duration: 0.4 }}  className='flex justify-between'>
                <div className='flex flex-col gap-2  w-2/5'>

                </div>
                <div className='flex flex-col  w-1/5 justify-center items-center  '> 
                  <div className='w-4 h-4 bg-white rounded-full ring-2 ring-red-500'></div>
                  <div className='w-0.5 h-full bg-black transform-gpu origin-bottom '></div>
                </div>
                <div className='flex flex-col gap-2 w-2/5'>
                <h2 className='font-bold bg-white p-2 rounded-md'> Support </h2>
                  <p className='p-2 text-sm'>- Joined the startup as a student among the first 10 employees, helping launch the Customer Support team from the ground up</p>
                  <p className='p-2 text-sm'>-•Contributed to early operational processes and supported core crypto exchange activities
                  </p>
                  <span className='text-red-400 text-sm'>2020 - 2021</span>
                  <span className='bg-green-500 p-2 rounded-md w-fit'>BitPin</span>
                </div>
              </motion.div>
              

          </div>
        </div>

        <div className='hidden lg:block lg:w-1/3 xl:w-1/2 w-full h-full fixed top-24 right-0'>
              
              <Brain scrollYProgress={scrollYProgress} />
            
       </div>
    </div>
  </motion.div>
)
}
export default About