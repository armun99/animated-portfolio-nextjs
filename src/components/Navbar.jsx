"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navLink'
import {motion} from 'framer-motion'
const links = [{label: "Home", href: "/"}, {label: "About", href: "/about"}, {label: "Contact", href: "/contact"}]
const Navbar = () => {
  const [open, setOpen] = useState(false) ;
  const topVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
    
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
     
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }
  return (
    <div className='flex h-full justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32'>
      <div className='items-center md:gap-2 lg:gap-5 hidden sm:flex md:w-1/3'>
        {links.map((item)=>(
          <NavLink key={item.href} link={item} />
        ))}
      </div>
      <div className='sm:hidden md:flex md:justify-center md:w-1/3'>
        <Link className='flex items-center gap-2 bg-black text-white p-1 rounded-md' href="/">
        <span className='text-base font-bold'>armun</span>
        <span className='text-base font-bold bg-white text-black p-1 rounded-md '>99</span>
        </Link>
      </div>
      <div className='items-center gap-3 hidden sm:flex md:w-1/3 md:justify-end'>
        <Link href="https://www.linkedin.com/in/arman-rezasefat-363952214/">
        <img src="/linkedin.png" alt="linkedin" className='w-5 h-5 rounded-full' />
        </Link>
        <Link href="https://github.com/armun99">
        <img src="/github.png" alt="github" className='w-5 h-5 rounded-full' />
        </Link>
        <Link href="https://www.instagram.com/arrmun99/">
        <img src="/instagram.png" alt="instagram" className='w-5 h-5 rounded-full' />
        </Link>

      </div>
      <button onClick={()=>setOpen(!open)} className={`flex z-[10000] sm:hidden gap-1 flex-col relative`}>
        <motion.div variants={topVariants}  animate={open ? "open" : "closed"} className={`w-7 h-1 bg-black rounded-md origin-left ${open ? 'bg-white' : ''}`}></motion.div>
        <motion.div variants={centerVariants}  animate={open ? "open" : "closed"} className={`w-7 h-1 bg-black rounded-md ${open ? 'bg-white' : ''}`}></motion.div>
        <motion.div variants={bottomVariants}  animate={open ? "open" : "closed"} className={`w-7 h-1 bg-black rounded-md origin-left ${open ? 'bg-white' : ''}`}></motion.div>
      </button> 
      {open && (
        <motion.div animate="open" exit="closed" initial="closed" variants={listVariants} transition={{duration: 1}} className='fixed top-0 left-0 px-9 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-[9999]'>
          
          <div className='flex flex-col w-full  items-center justify-center gap-8 '>
            {links.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className='text-xl hover:cursor-pointer w-full text-center hover:bg-white hover:text-black p-1 rounded-md '>
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>  
  )
}
export default Navbar