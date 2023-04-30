// import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const Header = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 80) {
                setColor('#ccc0ac')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('black')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <header style={{ backgroundColor: `${color}` }} className='fixed top-0 left-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-7xl m-auto flex justify-between items-center p-4 text-black'>
                <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    className='cursor-pointer'
                >
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
                        <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>Site</h1>
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
                    <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                        <li className='p-4'>
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className='cursor-pointer'
                            >
                                <h1>Home</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className='cursor-pointer'
                            >
                                <h1>About</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className='cursor-pointer'
                            >
                                <h1>Services</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link
                                activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className='cursor-pointer'
                            >
                                <h1>Team</h1>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className='cursor-pointer'
                            >
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
                        fgColor={`${textColor}`}
                        bgColor='transparent'
                    />
                    <p style={{ color: `${textColor}` }} className='uppercase hidden md:inline-flex text-flex text-black'>Get in Touch</p>
                </motion.div>
                {/* Mobile Button */}
                <div className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose className='text-4xl' onClick={handleNav} />
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
                            <AiOutlineMenu style={{ color: `${textColor}` }} className='text-4xl' onClick={handleNav} />
                        </motion.div>
                    )
                    }
                </div>
                {/* Mobile Menu */}
                <div className={nav
                    ? 'sm:hidden absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300 z-50'
                    :
                    'sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300 z-50'
                }>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/' >
                                <h1>Home</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#about' >
                                <h1>About</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#services' >
                                <h1>Services</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#team' >
                                <h1>Team</h1>
                            </Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#contact' >
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