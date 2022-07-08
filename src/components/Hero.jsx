import React from 'react'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-40">AIR 2023</h1>
        <p className=" mb-8 text-4xl font-normal text-black lg:text-4xl sm:px-16 xl:px-10">6th International Conference of The Robotics Society <br/>(5  – 8 July, 2023)</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/" className="hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 font-medium text-center text-blacl rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-yellow-200 text-2xl">
                Learn more <BsChevronDoubleRight className='text-4xl'/>
            </Link> 
        </div>
    </div>
</section>
  )
}

export default Hero