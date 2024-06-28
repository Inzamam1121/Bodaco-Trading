import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const UpperBanner = () => {
    return (
        <div className='UpperBanner'>
            <div className='bg-black/50 py-8 pb-20'>
                <div className="flex gap-4 justify-end font-major mr-4">
                    <div className="flex gap-4 py-2 px-4 rounded-full text-xl w-fit bg-white items-center">
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebookF />
                        <h3 className='text-lg font-medium'>Follow us</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-8 justify-center items-center font-major">
                    <div className="w-[50%] md:w-[15%] mx-auto">
                        <img src="../Images/Logo.png" alt="" className='object-cover' />
                    </div>
                    <h2 className='text-2xl md:text-4xl text-white font-major font-semibold'>Fruit & Vegetables</h2>
                </div>
            </div>
        </div>
    )
}

export default UpperBanner