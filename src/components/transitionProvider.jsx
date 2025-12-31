"use client"
import { AnimatePresence } from 'framer-motion'
import React, { createContext } from 'react'
import Navbar from './Navbar'
import { motion, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from "react";

// Create context for scrollYProgress
export const ScrollContext = createContext(null);

const TransitionProvider = ({children}) => {
    const [displayPath, setDisplayPath] = useState("");
    const pathName = usePathname();
    console.log(pathName);
    useEffect(() => {
        setDisplayPath(pathName.substring(1));
      }, [pathName]);
      const ContainerRef = useRef()
      const { scrollYProgress } = useScroll({container: ContainerRef})
      console.log(scrollYProgress)
  return (
    <AnimatePresence mode="wait">
    <motion.div
      key={pathName}
      className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 relative overflow-hidden"
    >
 
      <motion.div
        className="fixed inset-0 bg-black rounded-b-[100px] z-40"
        initial={{ height: "140vh" }}
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
            <motion.div
            className="fixed inset-0 flex items-center justify-center text-white text-8xl z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ 
                opacity: 0,
                transition: { delay: 0.2, duration: 1 }
            }}
            exit={{ 
                opacity: 0,
                transition: { duration: 1 }
            }}
            >
                {displayPath}
            </motion.div>
                        <motion.div
            className="fixed inset-0 flex items-center justify-center text-white text-8xl z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ 
                opacity: 0,
                transition: { delay: 0.2, duration: 1 }
            }}
            exit={{ 
                opacity: 0,
                transition: { duration: 1 }
            }}
            >
                {displayPath}
            </motion.div>
      <motion.div
      />

 
      <div className="h-24 relative z-50">
        <Navbar />
      </div>

      <ScrollContext.Provider value={scrollYProgress}>
        <div className="h-[calc(100vh-6rem)] relative z-10 overflow-y-auto scrollbar-hide" ref={ContainerRef}>
          {children}
        </div>
      </ScrollContext.Provider>
    </motion.div>
  </AnimatePresence>
        
    
  )
}

export default TransitionProvider