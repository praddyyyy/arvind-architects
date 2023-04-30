import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div
            className='flex h-screen pt-[6rem] relative overflow-hidden flex-col 
            text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >
            <motion.h1
                className='absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl'
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2.5
                }}
            >
                Contact Us
            </motion.h1>
        </div>
    )
}

export default Contact