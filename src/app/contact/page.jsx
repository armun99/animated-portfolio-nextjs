"use client"
import {React , useState} from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  const text = "Contact Me";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // service_06x68pg
  return (
    <motion.div className='h-full '>
      <div className=' h-full flex flex-col  lg:flex-row z-10 '>
        {/* text area */}
        <div className='h-1/3 lg:h-full lg:w-1/2 justify-center items-center'>
          
            <h1 className='flex text-4xl text-gray-500 h-full justify-center items-center'>{text.split("").map((letter, index)=>{
              return <motion.div className='flex' key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{delay:index*0.1 , repeat: Infinity, duration:2 , ease: "easeInOut" }} > {letter} </motion.div>
            })} 👾</h1>
         
        </div>
        {/* form area */}
        <div className='h-2/ lg:h-full lg:w-1/2  px-14 mx-10 bg-gradient-to-b from-[#FCF2F5] to-[#FDF2F2] py-20'>
          <form className='flex flex-col gap-4 h-full justify-center  '>
            <p>this is my contact form</p>
            <input className='border-t-none border-l-none border-r-none border-b-2 focus:outline-none border-gray-500 bg-transparent' type="text" placeholder='Name' />
            <p>my email address is :</p>
            <input className='border-t-none border-l-none border-r-none border-b-2 focus:outline-none border-gray-500 bg-transparent' type="email" placeholder='Email' />
            <p>regards</p>
            <button className='bg-[#E9D5FE] text-black p-2 rounded-md' type='submit'>Send</button>
            {success && <p className='text-green-500'>Message sent successfully</p>}
            {error && <p className='text-red-500'>Message not sent</p>}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;