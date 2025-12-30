"use client"
import { motion } from 'framer-motion'
const Homepage = () => {
  return (
    <motion.div initial={{y:"-200vh"}} animate={{ y:"0%" }}  transition={{ duration: 1.5 }}>  
      <div className="h-full flex flex-col gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center">
      <div className='h-1/2 lg:h-3/4 lg:w-1/2 relative z-10'>
        <img src="/hero.png" alt="hero" fill className='w-full h-full items-center justify-center object-contain' />
      </div>
      <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8  justify-center'>
        <h1 className='text-4xl font-bold'>Front-end Developer</h1>
        <p >Joined Bitpin as a student when the startup had only 8 employees and grew with the company over 5 years, becoming an
          early core member across four teams. A strong team-builder whose teams now manage critical crypto deposit and
          withdrawal monitoring. Interested in JavaScript since my student years, and over the past two years have built 
          games
        </p>
        <div className='flex gap-4 p-2'>
          <button className="bg-black rounded-md text-white p-2 ring-1 ring-black">view my resume</button>
          <button className="bg-white rounded-md text-black p-2 ring-1 ring-black">contact me</button>
        </div>
      </div>
      </div>
    </motion.div>
  ) 
};

export default Homepage;
