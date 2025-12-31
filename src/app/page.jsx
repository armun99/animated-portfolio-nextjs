"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
const Homepage = () => {
  return (
    <motion.div initial={{y:"-200vh"}} animate={{ y:"0%" }}  transition={{ duration: 1.5 }}>  
      <div className="h-full flex flex-col gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center">
      <div className='h-1/2 lg:p-16 lg:w-1/2 relative z-10'>
        <img src="/latari.jpg" alt="hero" fill className='w-full h-full items-center justify-center object-contain mix-blend-multiply' />
      </div>
      <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8  justify-center'>
        <h1 className='text-4xl font-bold'>Front-end Developer</h1>
        <p className='text-black lg:text-lg'>
        I’m a Front-end Developer and Web3 Automation Engineer with a strong background in building internal tools, blockchain-based systems, and operational workflows. I joined a crypto startup as a student when the team was still small and grew alongside it for over five years, becoming an early core member across multiple teams including customer support, AML, wallet operations, and automation.

My main focus today is JavaScript-driven solutions — designing and developing tools that reduce manual work, improve reliability, and support large-scale crypto operations. I enjoy working at the intersection of front-end development, blockchain data, and automation, where clean interfaces meet complex systems.

Beyond work, I’m highly motivated by problem-solving, teamwork, and continuous learning. I stay active through training and rock climbing, and I enjoy strategy-based games that challenge the way I think and plan.
        </p>
        <div className='flex gap-4 p-2'>
          <Link href="/about">
          <button className="bg-black rounded-md text-white p-2 ring-1 ring-black">view my resume</button>
          </Link>
    
          <Link href="/contact">
          <button className="bg-white rounded-md text-black p-2 ring-1 ring-black">contact me</button>
          </Link>
        </div>
      </div>
      </div>
    </motion.div>
  ) 
};

export default Homepage;
