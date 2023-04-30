import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}

                className='flex flex-col relative text-center md:text-left md:flex-row h-screen pt-[6rem] max-w-7xl px-10 mx-auto justify-evenly items-center'
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
                    About Us
                </motion.h1>

                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                        scale: 0.5
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    viewport={{ once: true }}
                    src='https://w7.pngwing.com/pngs/700/305/png-transparent-building-architectural-engineering-logo-unique-company-triangle-skyscraper.png'
                    className='-mb-20 md:mb-0 w-56 h-56 flex-shrink-0 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
                />
                <div className='p-y-10 px-0 md:px-10'>
                    <p className='text-base text-justify'>
                        At Arvind Architects, we believe that a beautifully designed space can transform the way you live and work. Our team of experienced designers is
                        dedicated to creating customized interiors that are not only functional but also aesthetically pleasing.
                    </p>
                    <p className='text-base mt-5 text-justify'>
                        We offer a range of services to cater to your needs, whether it be a complete home or office renovation, a single room makeover, or even just
                        interior styling. We work closely with our clients to understand their unique vision and preferences, and we strive to exceed their expectations
                        every step of the way.
                    </p>
                    <p className='text-base mt-5 text-justify'>
                        Thank you for considering Arvind Architects for your interior design needs. We look forward to the opportunity to work with you and bring your
                        vision to life.
                    </p>
                </div>

            </motion.div >
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}

                className='flex flex-col relative text-center md:text-left md:flex-row h-screen pt-[6rem] max-w-7xl px-10 mx-auto justify-evenly items-center'
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
                    Our Vision
                </motion.h1>
                <div>
                    <p className='text-base text-justify'>
                        Our goal is to be a leader in the industry, and to do that, we prioritize innovation, sustainability, and excellence in all aspects of our
                        work. We aim to exceed our clients' expectations by providing exceptional customer service, using the latest technologies and
                        materials, and staying up to date with the latest trends in interior design.
                    </p>
                    <p className='text-base mt-5 text-justify'>
                        At the core of our vision is the belief that every space should be both beautiful and functional. We strive to create designs that not only
                        look amazing but also serve a purpose, whether it be to improve productivity in the workplace or create a relaxing oasis in the home.
                    </p>
                </div>
            </motion.div>
        </>
    )
}

export default About