import React from 'react';
// import { FaBanana, FaRegClock, FaMapMarkedAlt, FaTruck } from 'react-icons/fa';
import { GiBananaBunch } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";
const PurchaseProcess = () => {
  return (
    <div className="bg-[#f5f3f0] py-16">
      <h1 className="text-center font-great text-[#2f803f] text-6xl">Bananas</h1>
      <h2 className="text-center text-[#2f2f2f] md:text-5xl text-2xl font-lato font-bold mt-4">PURCHASE PROCESS</h2>

      <div className="flex flex-col flex-wrap md:flex-row justify-center gap-16 items-center mt-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="bg-white group-hover:bg-[#2f803f]  h-44 w-44 rounded-full shadow-lg flex items-center justify-center">
              <GiBananaBunch className="text-[#2f803f] group-hover:text-white text-8xl" />
            </div>
            <h2 className="absolute  -top-3 right-5 bg-white text-[#2f803f] hover:bg-[#2f803f] hover:text-white text-center w-8 h-8 rounded-full flex items-center justify-center">
              1
            </h2>
          </div>
          <h3 className="text-center text-base font-mono font-bold mt-4">STEP 01:</h3>
          <p className="text-center font-lato text-gray-700">Choose your banana</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="bg-white group-hover:bg-[#2f803f] h-44 w-44 rounded-full shadow-lg flex items-center justify-center">
              <FaRegClock className="text-[#2f803f] group-hover:text-white text-8xl" />
            </div>
            <h2 className="absolute -top-1 right-2 bg-white text-[#2f803f] hover:bg-[#2f803f] hover:text-white text-center w-8 h-8 rounded-full flex items-center justify-center">
              2
            </h2>
          </div>
          <h3 className="text-center text-lg font-mono font-bold mt-4">STEP 02:</h3>
          <p className="text-center font-lato text-gray-700">Get quickest ready time</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="bg-white group-hover:bg-[#2f803f] h-44 w-44 rounded-full shadow-lg flex items-center justify-center">
              <FaMapMarkedAlt className="text-[#2f803f] group-hover:text-white text-8xl" />
            </div>
            <h2 className="absolute  -top-1 right-2 bg-white text-[#2f803f] hover:bg-[#2f803f] hover:text-white text-center w-8 h-8 rounded-full flex items-center justify-center">
              3
            </h2>
          </div>
          <h3 className="text-center font-mono text-lg font-bold mt-4">STEP 03:</h3>
          <p className="text-center font-lato text-gray-700">Share your location</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="bg-white group-hover:bg-[#2f803f] h-44 w-44 rounded-full shadow-lg flex items-center justify-center">
              <FaTruckMedical className="text-[#2f803f] group-hover:text-white text-8xl" />
            </div>
            <h2 className="absolute -top-1 -right-2 bg-white text-[#2f803f] hover:bg-[#2f803f] hover:text-white text-center w-8 h-8 rounded-full flex items-center justify-center">
              4
            </h2>
          </div>
          <h3 className="text-center font-mono text-lg font-bold mt-4">STEP 04:</h3>
          <p className="text-center font-lato text-gray-700">Get delivered fast</p>
        </div>

      </div>
      <div className=' py-20 m-auto flex justify-center items-center'>
        <button className='bg-[#392a25] text-white text-base font-lato  pl-9 pe-9 pt-3 pb-3'> GET STARTED NOW</button>
      </div>
    </div>
  );
};

export default PurchaseProcess;
