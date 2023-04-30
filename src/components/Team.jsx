import React from 'react'
import { motion } from 'framer-motion'
import TeamMemberCard from './TeamMemberCard'
import { useInView } from 'react-intersection-observer';

const Team = () => {
    const members = [
        {
            name: "Pradeeshwar",
            title: "SDE",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            socials: [
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
            ],
        },
        {
            name: "Pradeeshwar",
            title: "SDE",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            socials: [
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
            ],
        },
        {
            name: "Pradeeshwar",
            title: "SDE",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            socials: [
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
            ],
        },
        {
            name: "Pradeeshwar",
            title: "SDE",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            socials: [
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
            ],
        },
        {
            name: "Pradeeshwar",
            title: "SDE",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            socials: [
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
            ],
        },
        {
            name: "Pradeeshwar",
            title: "SDE",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            socials: [
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const [ref, inView] = useInView({
        threshold: 0.5, // 50% of the element visible in viewport
        triggerOnce: false, // Reset the animation each time the element comes into view
    });

    return (
        <div
            className='flex h-full md:h-screen pt-[6rem] relative overflow-hidden flex-col 
            text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
            ref={ref}
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
                Meet Our Team
            </motion.h1>
            <div className='max-w-md'>
                <p className='text-base text-justify'>
                    Meet the talented and passionate team behind our
                    interior design company. Ourteam is composed of
                    highly skilled professionals with backgrounds in
                    interior design, architecture, and construction. With
                    their extensive experience, innovative thinking, and
                    commitment to excellence, they&apos;re dedicated to
                    bringing your vision to life and creating a space that
                    perfectly reflects your style and personality. Get to
                    know ourteam and discover how their expertise can
                    help you achieve the living space of your dreams
                </p>
            </div>
            <motion.div variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'} // animate only when in view 
                className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:pt-[5rem] md:pt-[20rem] lg:pt-0 "
            >
                {members.map((member) => (
                    <motion.div
                        key={member.name}
                        variants={cardVariants}
                    >
                        <TeamMemberCard
                            name={member.name}
                            designation={member.title}
                            image={member.image}
                            socials={member.socials}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Team