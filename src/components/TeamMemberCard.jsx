import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamMemberCard = (props) => {
    return (
        <article
            className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm group hover:shadow-xl transition-shadow duration-300">
            <img src={props.image} alt="hi" className="w-40 h-40 rounded-full" />
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{props.name}</h3>
                <p className="text-gray-600">{props.designation}</p>
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