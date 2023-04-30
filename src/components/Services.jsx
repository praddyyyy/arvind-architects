import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const [ref, inView] = useInView({
        threshold: 0.5, // 50% of the element visible in viewport
        triggerOnce: true, // Reset the animation each time the element comes into view
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 }
        }
    };

    const serviceVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
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
            ref={ref}
            className='flex flex-col relative text-center md:text-left md:flex-row h-full md:h-screen pt-[6rem] max-w-7xl px-10 mx-auto justify-evenly items-center'
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
                Our Services
            </motion.h1>

            <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-[5rem] lg:pt-0"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'} // animate only when in view
            >
                <motion.div className="border border-gray-300 p-6" variants={serviceVariants}>
                    <h3 className="text-xl font-bold mb-2">Interior Design Consultation</h3>
                    <p className="text-gray-700">
                        We offer consultations to help you clarify your design
                        goals, develop a plan of action, and choose the right materials and finishes for your
                        project.
                    </p>
                </motion.div>
                <motion.div className="border border-gray-300 p-6" variants={serviceVariants}>
                    <h3 className="text-xl font-bold mb-2">Space Planning and Layout</h3>
                    <p className="text-gray-700">
                        We can help you optimize your space for functionality, flow,
                        and aesthetics, taking into account your specific needs and preferences.
                    </p>
                </motion.div>
                <motion.div className="border border-gray-300 p-6" variants={serviceVariants}>
                    <h3 className="text-xl font-bold mb-2">Concept Development and Visualization</h3>
                    <p className="text-gray-700">
                        Our designers use 3D modeling and rendering
                        software to create realistic visualizations of your project, allowing you to see the design
                        before it&apos;s even built.
                    </p>
                </motion.div>
                <motion.div className="border border-gray-300 p-6" variants={serviceVariants}>
                    <h3 className="text-xl font-bold mb-2">Project Management</h3>
                    <p className="text-gray-700">
                        We take care of all aspects of the project, from procurement to
                        installation, ensuring that everything is completed on time and within budget
                    </p>
                </motion.div>
                <motion.div className="border border-gray-300 p-6" variants={serviceVariants}>
                    <h3 className="text-xl font-bold mb-2">Custom Furniture and Decor</h3>
                    <p className="text-gray-700">
                        We can design and produce custom furniture, window
                        treatments, and decor to complement your design.
                    </p>
                </motion.div>
                <motion.div className="border border-gray-300 p-6" variants={serviceVariants}>
                    <h3 className="text-xl font-bold mb-2">Interior Styling</h3>
                    <p className="text-gray-700">
                        We can help you put the finishing touches on your space, from selecting
                        the right artwork and accessories to arranging furniture and decor
                    </p>
                </motion.div>
            </motion.div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-2">Interior Design Consultation</h3>
                    <p className="text-gray-700">We offer consultations to help you clarify your design
                        goals, develop a plan of action, and choose the right materials and finishes for your
                        project.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-2">Space Planning and Layout</h3>
                    <p className="text-gray-700">We can help you optimize your space for functionality, flow,
                        and aesthetics, taking into account your specific needs and preferences.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-2">Concept Development and Visualization</h3>
                    <p className="text-gray-700">Our designers use 3D modeling and rendering
                        software to create realistic visualizations of your project, allowing you to see the design
                        before it's even built.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-2">Project Management</h3>
                    <p className="text-gray-700">We take care of all aspects of the project, from procurement to
                        installation, ensuring that everything is completed on time and within budget</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-2">Custom Furniture and Decor</h3>
                    <p className="text-gray-700">We can design and produce custom furniture, window
                        treatments, and decor to complement your design.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-2">Interior Styling</h3>
                    <p className="text-gray-700">We can help you put the finishing touches on your space, from selecting
                        the right artwork and accessories to arranging furniture and decor</p>
                </div>
            </div> */}
        </motion.div >
    )
}

export default Services