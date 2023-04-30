import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover'>
            {/* Overlay */}
            {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
            <div className='p-5 text-black z-[2] '>
                <h2 className='text-5xl font-bold'>Arvind Architects</h2>
                <p className='py-5 text-xl'>Crafting Dreams into Reality</p>
                <button className='px-8 py-2 bg-[#8d7358] border border-[#8d7358] text-white hover:bg-transparent
                 hover:text-black hover:border hover:border-[#8d7358] ease-in duration-300 '>
                    Book Now
                </button>
            </div>
            {/* <div>
                <img src="/dj-3.jpg" alt="My Image" className="hidden md:block rounded-t-[150px] h-[20rem] w-64 object-cover" />
            </div> */}
        </div>
    )
}

export default Hero