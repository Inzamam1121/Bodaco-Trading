import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="bg-white relative">
      <div className="text-black font-bold w-[60%]  wide  leading-tight  absolute   opacity-5 z-1 ">SINCE 1990</div>
        <div className="flex flex-col  py-28 gap-12 items-center z-30">
          <h2 className=" md:text-6xl text-5xl font-great text-[#2f803f]">Welcome</h2>
          <p className="font-open md:w-[60%] w-[90%]">"Banalat" SIA has been supplying fresh fruits and vegetables to Latvia and abroad since 1998. The company provides its customers with a full service cycle - from fruit and vegetable import to their delivery to its partners. “Banalat” SIA specializes in banana trade and ripening, investing significant resources in modern banana ripening technologies and professional knowledge of its employees.</p>
          <div className="w-[90%] mx-auto flex justify-center">
            <img src="../Images/welcome.png" alt="profile" className="w-[90%]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
