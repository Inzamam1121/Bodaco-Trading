import React from 'react';

const Banner = () => {
    return (
        <div className='w-screen h-auto relative'>
            <div className="absolute w-full h-full z-30">
                <img src="../Images/image1.png" alt="" className='object-cover w-full h-full' />
            </div>
            <div className="relative z-50 py-20 flex flex-col gap-6 items-center justify-center font-lato">
                <div className="flex gap-4 items-center font-mono text-white font-medium text-xl lg:text-2xl">
                    <h3 >Since</h3>
                    <img src="../Images/flower.png" alt="" />
                    <h3>1994</h3>
                </div>
                <h2 className='text-6xl lg:text-8xl text-white font-semibold'>BANALAT</h2>
                <img src="../Images/trust.png" alt="" className='w-[40%]' />
            </div>
        </div>
    );
}

export default Banner;
