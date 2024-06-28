import React from 'react'

const CommonSec = ({img,head,para,subhead, direction}) => {
  return (
    <div className='py-16 border-b-2 border-black'>
        <div className={`flex ${direction=="reverse"? "lg:flex-row-reverse flex-col-reverse":" lg:flex-row flex-col-reverse"}  justify-between gap-4`}>
            <div className="basis-[40%]">
                <img src={img} alt="" className={`object-cover w-full ${direction=="reverse"? "rounded-l-2xl pl-20":" rounded-r-2xl pr-20"} `} />
            </div>
            <div className={`basis-[45%]  ${direction=="reverse"? "pl:6 md:pl-20":"pr:6 md:pr-20"} mx-4 md:mx-10 flex flex-col gap-2 font-major`}>
                <h3 className='text-lg md:text-xl font-semibold'>{subhead}</h3>
                <h1 className='font-bold leading-[2rem] md:leading-[3rem] text-xl md:text-3xl'>{head}</h1>
                <p className='md:text-lg'>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default CommonSec