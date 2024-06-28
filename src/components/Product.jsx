// import React from 'react'

// const Product = () => {
//   return (
//     <div>
//       <div className='min-h-[15vh]   w-[90%] mx-auto bg-[#2f803f;] flex justify-between items-center rounded-md'>
      
// <div className='flex flex-col justify-center items-start px-12 basis-[30%] gap-1 w-max'>
//   <h1 className=' uppercase font-bold text-base font-lato text-white'>	
//   FLEXIBLE STORAGE</h1>
//   <p className='font-lato text-base text-white opacity-[.7]'>using climate control</p>
// </div>
// <div className='flex flex-col justify-center items-start basis-[30%] gap-1 w-max'>
//   <div className='border-l  border-white pl-5'>
//     <h1 className='uppercase font-bold text-base font-lato text-white'>	
   	
// 29 LATEST GENERATION
//     </h1>
//     <p className='font-lato text-base text-white opacity-[.7]'>large ripening chambers</p>
//   </div>
// </div>
// <div className='flex flex-col justify-center items-start basis-[30%] gap-1 w-max'>
//   <div className='border-l  border-white pl-5'>
//     <h1 className='uppercase font-bold text-base font-lato text-white'>	
    	
// RIPENING CAPACITY
//     </h1>
//     <p className='font-lato text-base text-white opacity-[.7]'>up to 45 000 boxes each week</p>
//   </div>
// </div>
//       </div>
//       <div className='bg-yellow-50  w-full h-150vh] bg-img relative'>
// <h1 className='text-center font-great text-[#2f803f] text-6xl pt-20 pb-10'>Our Products</h1>
// <h1 className=' uppercase w-[70%] text-center text-4xl text-black font-open font-semibold tracking-wider'>green</h1>
// <h2 className='font-great text-[#2f803f] w-[80%] text-9xl absolute  right-1 top-64'>Banana</h2> 
// <div class="flex justify-center items-center h-[50vh] mt-20">
//     <div class="flex w-[60%] border-4 border-white p-8 z-40">
//       <div class="flex flex-col w-[60%] pr-8">
     
//         <div class="mt-4">
//           <h4 class="text-black font-lato  text-2xl p-1 inline-block font-bold">Cavendish</h4>
//           <p class="mt-2 text-gray-700 font-open text-base leading-relaxed">
//             Green Bananas are the leading internationally traded fresh fruit in terms of volume and one of the best-selling fresh fruit. 
//             You probably know that bananas are grown in sunny, tropical areas and most of ours comes from Central and South America, 
//             what allows us to offer green bananas all year round.
//           </p>
//         </div>
//       </div>
//   <div class="flex items-center w-[40%] relative">
//         <img src="../Images/product.png" alt="Green Bananas" class="custom-img"/>
//       </div>
//     </div>
//   </div>

//       </div>
//     </div>
//   )
// }

// export default Product
import React from 'react';


const Product = () => {
  return (
    <div>
      <div className="min-h-[15vh] w-[90%] mx-auto bg-[#2f803f] flex flex-col md:flex-row justify-between items-center rounded-md mt-4 md:mt-0 py-5">
        <div className="flex flex-col justify-center items-start md:px-12 px-6 basis-[100%] md:basis-[30%] gap-1 mt-4 md:mt-0 w-full md:w-max">
          <h1 className="uppercase font-bold text-base font-lato text-white">FLEXIBLE STORAGE</h1>
          <p className="font-lato text-base text-white opacity-[.7]">using climate control</p>
        </div>
        <div className="flex flex-col justify-center items-start basis-[100%] md:basis-[30%] gap-1 mt-4 md:mt-0 w-full md:w-max">
          <div className="border-l border-white pl-5">
            <h1 className="uppercase font-bold text-base font-lato text-white">29 LATEST GENERATION</h1>
            <p className="font-lato text-base mb-2 text-white opacity-[.7]">large ripening chambers</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start basis-[100%] md:basis-[30%] gap-1 mt-4 md:mt-0 w-full md:w-max">
          <div className="border-l border-white pl-5">
            <h1 className="uppercase font-bold text-base font-lato text-white">RIPENING CAPACITY</h1>
            <p className="font-lato text-base text-white opacity-[.7]">up to 45 000 boxes each week</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 w-full h-auto bg-img relative pt-20 pb-10">
        <h1 className="text-center font-great text-[#2f803f] md:text-6xl text-5xl">Our Products</h1>
        <h1 className="uppercase w-[70%]  text-center md:text-4xl text-3xl text-black font-open font-semibold tracking-wider mt-10">green</h1>
        <h2 className="font-great text-[#2f803f] w-[80%] md:text-9xl text-6xl absolute right-1  md:top-56 top-64">Banana</h2> 
        <div className="flex justify-center items-center h-auto mt-20">
          <div className="flex flex-col md:flex-row w-[90%] md:w-[60%] border-4 border-white p-8  relative ">
            <div className="flex flex-col w-full md:w-[60%] pr-0 md:pr-8">
              <div className="mt-4">
                <h4 className="text-black font-lato text-2xl p-1 inline-block font-bold">Cavendish</h4>
                <p className="mt-2 text-gray-700 font-open text-base leading-relaxed">
                  Green Bananas are the leading internationally traded fresh fruit in terms of volume and one of the best-selling fresh fruit.
                  You probably know that bananas are grown in sunny, tropical areas and most of ours comes from Central and South America,
                  what allows us to offer green bananas all year round.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full md:w-[40%] relative mt-4 md:mt-0">
              <img src="..\Images\banans.png" alt="Green Bananas" className="custom-img scale-150 h-full rotate-90 -translate-y-[60%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
