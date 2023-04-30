import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamMemberCard = () => {
    return (
        <article
            className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm group hover:shadow-xl transition-shadow duration-300">
            <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="hi" className="w-40 h-40 rounded-full" />
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">Pradeeshwar</h3>
                <p className="text-gray-600">SDE</p>
            </div>
            <div className="absolute bottom-0 flex items-center justify-center rounded-lg w-full h-full  bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg transition-opacity duration-500 opacity-0 group-hover:opacity-90">
                <div className="flex justify-center">
                    <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FaTwitter className="text-gray-600 hover:text-blue-500 transition-colors duration-300 group-hover:text-blue-500" size={30} />
                    </a>
                    <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FaInstagram className="text-gray-600 hover:text-pink-500 transition-colors duration-300 group-hover:text-pink-500" size={30} />
                    </a>
                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FaLinkedin className="text-gray-600 hover:text-blue-700 transition-colors duration-300 group-hover:text-blue-700" size={30} />
                    </a>
                </div>
            </div>
        </article>
    )
}

export default TeamMemberCard