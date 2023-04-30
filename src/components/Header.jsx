import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
// import { Link } from 'react-scroll';

const Header = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 80) {
                setColor('#ccc0ac')
            } else {
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <header style={{ backgroundColor: `${color}` }} className='fixed top-0 left-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-7xl m-auto flex justify-between items-center p-4 text-black'>
                <Link href='/'>

                    <motion.div
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1.5
                        }}
                    >
                        <h1 className='font-bold text-4xl text-black'>Site</h1>
                    </motion.div>
                </Link>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.5
                    }}
                >
                    <ul className='hidden sm:flex text-black'>
                        <li className='p-4'>
                            <Link href='/#home' scroll={false}>
                                <h1>Home</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/#about' scroll={false}>
                                <h1>About</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/#services' scroll={false}>
                                <h1>Services</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/#team' scroll={false}>
                                <h1>Team</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/#contact' scroll={false}>
                                <h1>Contact</h1>
                            </Link>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.0
                    }}
                    className='hidden items-center cursor-pointer sm:flex'>
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='#000'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-flex text-black'>Get in Touch</p>
                </motion.div>
                {/* Mobile Button */}
                <div className='block sm:hidden z-30'>
                    {nav ? (
                        <AiOutlineClose className='text-4xl text-white' onClick={handleNav} />
                    ) : (
                        <motion.div
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 1.0
                            }}
                        >
                            <AiOutlineMenu className='text-4xl text-black' onClick={handleNav} />
                        </motion.div>
                    )
                    }
                </div>
                {/* Mobile Menu */}
                <div className={nav
                    ? 'sm:hidden absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300 z-10'
                    :
                    'sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300 z-10'
                }>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>
                                <h1>Home</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#about'>
                                <h1>About</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#services'>
                                <h1>Services</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#team'>
                                <h1>Team</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#contact'>
                                <h1>Contact</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header