import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#265946] py-10'>
            <div className='w-[90%] mx-auto flex flex-col gap-6'>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className='w-[80%] basis-[35%] mx-auto'>
                        <img src="../Images/Logo2.png" alt="" />
                    </div>
                    <div className="flex gap-6 flex-col md:flex-row text-white justify-between font-major">
                        <h2 className='text-white basis-[45%] text-3xl font-bold'>The Garden Wall</h2>
                        <div className="flex text-sm basis-[45%] flex-col gap-4">
                            <p>Celebrate our 50th anniversary with a personalised plaque on 'The Garden Wall'.</p>
                            <a href="">www.funditnow.co.uk/thegardenwall</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    <div className="flex flex-col gap-4 basis-[35%] font-major">
                        <h3 className='text-lg font-semibold text-white'>Subscribe to Market Times</h3>
                        <div className="flex flex-col gap-2">
                            <h2 className='text-white text-lg'>Name</h2>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Enter your name'
                                className='bg-white rounded-full py-2 px-4 outline-none border-none'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className='text-white text-lg'>Contact</h2>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Enter your name'
                                className='bg-white rounded-full py-2 px-4 outline-none border-none'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className='text-white text-lg'>Email</h2>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Enter your name'
                                className='bg-white rounded-full py-2 px-4 outline-none border-none'
                            />
                        </div>
                        <button
                            className='bg-black py-2 px-4 rounded-full font-major text-white w-fit'
                        >
                            Submit
                        </button>
                    </div>
                    <div className='flex flex-col basis-[30%] gap-4'>
                        <div className="flex flex-col text-white font-major gap-2">
                            <h2 className='text-lg font-semibold'>Address</h2>
                            <p>New Covent Garden MarketLondon, SW8 5BH</p>
                        </div>
                        <div className="flex flex-col text-white font-major gap-2">
                            <h2 className='text-lg font-semibold'>Contact CGMA</h2>
                            <p>New Covent Garden Market <br />
                                020 7720 2211
                                <br />hello@cgma.co.uk</p>
                        </div>
                        <div className="flex flex-col text-white font-major gap-2">
                            <h2 className='text-lg font-semibold'>Address</h2>
                            <p>07966 521779<br />
                                press@cgma.co.uk</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row  justify-between font-major">
                    <p className='text-white basis-[50%]'>© 2024 Covent Garden Market Authority</p>
                    <div className="flex basis-[50%] text-white justify-between">
                        <div className="flex flex-col gap-2 font-major">
                            <h2>Fruit & Vegetables</h2>
                            <div className="flex gap-2">
                                <FaInstagram />
                                <FaTwitter />
                                <FaFacebookF />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 font-major">
                            <h2>Flowers</h2>
                            <div className="flex gap-2">
                                <FaInstagram />
                                <FaTwitter />
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer