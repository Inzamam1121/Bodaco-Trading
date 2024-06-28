import React from 'react'

const values = () => {
  return (
    <div>
   <div className='bg-[#f5f3f0]'>
    <h3 className='text-[#2f803f] font-great md:text-6xl text-5xl text-center py-16'>Our values</h3>
    <div className='w-[90%] mx-auto py-5'>

 
    <div className=' grid lg:grid-cols-3  grid-cols-1 justify-center items-center'>
        <div className='flex flex-col gap-4'>
            <div className=' relative'>
                <h1 className='font-lato text-[#392a25;]  text-7xl font-semibold absolute left-0 bottom-30  opacity-15'>01</h1>
                <h2 className='text-2xl text2 py-5 pl-8'>Open and fair cooperation</h2>
                <p className='font-open z-30'>More than 25 years of operation in the industry have allowed us to gain a good reputation both as a reliable partner and as an honest employer. We value mutually honest and open cooperation with both our clients and state institutions.</p>
            </div>
            <div className=' relative'>
                <h1 className='font-lato text-[#392a25;]  text-7xl font-semibold absolute left-0 bottom-30  opacity-15'>02</h1>
                <h2 className='text-2xl text2 py-5 pl-8'> Environmental responsibility</h2>
                <p className='font-open z-30'>
                We are a responsible company that cares about the environment. Having earned the internationally recognized Global G.A.P. CoC  <b>  Global G.A.P. CoC     </b> certificate, we have proven that good operational practices and sustainability are the core values of the company.
                
                </p>
            </div>
        </div>
        <div className='flex flex-col  '>
            <img src='../Images/value.png' alt='prrofile'/>
        </div>
        <div className='flex flex-col gap-4'>
            <div className=' relative'>
                <h1 className='font-lato text-[#392a25;]  text-7xl font-semibold absolute right-0 bottom-30  opacity-15'>03</h1>
                <h2 className='text-2xl text2 py-5 pl-8 text-right'>Innovation</h2>
                <p className='font-open z-30'>We constantly invest in the development of our company and our employees by introducing the latest technological solutions for the ripening and storage of bananas, as well as investing into the training and growth of employees.Years of experience in the business allows us to provide our partners with high-quality fruits and vegetables all year round.</p>
            </div>
            <div className=' relative'>
                <h1 className='font-lato text-[#392a25;]  text-7xl font-semibold absolute right-0 bottom-30  opacity-15'>04</h1>
                <h2 className='text-2xl text2 py-5 pl-8 text-right'> Health and Safety
</h2>
                <p className='font-open z-30'>
                Health and safety of the products that we provide to our customers is important to us. This is guaranteed by our compliance with the ISO 22000:2018ISO 22000:2018 food safety management standard. At the same BIO certificate LV-BIO-01LV-BIO-01 certifies our company to distribute organically grown bananas.
                </p>
            </div>
        </div>
    </div>
   </div>
   </div>
    </div>
  )
}

export default values
