import React from 'react'

const AtService = () => {
    const data=[
        "../Images/Fruits/image1.png",
        "../Images/Fruits/image2.png",
        "../Images/Fruits/image3.png",
        "../Images/Fruits/image4.png",
        "../Images/Fruits/image5.png",
        "../Images/Fruits/image6.png",
        "../Images/Fruits/image7.png",
        "../Images/Fruits/image8.png",
        "../Images/Fruits/image9.png",
        "../Images/Fruits/image10.png",
        "../Images/Fruits/image11.png",
        "../Images/Fruits/image12.png",
        "../Images/Fruits/image13.png",
        "../Images/Fruits/image14.png",
        "../Images/Fruits/image15.png",
    ]
    return (
        <div className='flex flex-col gap-6 border-b-2 border-black pb-10'>
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between font-major my-10 items-center gap-8">
                <div className="flex flex-col basis-[45%] gap-4">
                    <h3 className='text-lg md:text-xl font-semibold'>At your service</h3>
                    <h1 className='font-bold leading-[2rem] md:leading-[3rem] text-xl md:text-3xl'>Our wholesalers pride themselves on having the first of the season and making it available to you before everyone else.</h1>
                </div>
                <p className='md:text-lg basis-[45%]'>Our world-class wholesalers have global connections and an ultra-efficient supply chain model that ensures your business can stay ahead of the curve, by having products your competitors simply don’t have access to. What's more, by working with us, you'll tap into premium quality fresh products that taste better and last longer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {data.map((item,index)=>(
                    <div className='' key={index}>
                        <img src={item} alt="" className='rounded-xl' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AtService