
import React from "react";

const Natural = () => {
  return (
    <div className="h-auto bg3-img">
      <div className="flex  md:flex-row flex-col">
        <div className="w-full md:w-60%">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-center text-[#FFD314] text-6xl font-great pt-24">
              Yellow
            </h4>
            <h5 className="text-center text-[#f8f1d9] font-bold uppercase text-4xl">
              NATURAL FRESH
            </h5>
            <div className="flex flex-col justify-center items-start px-4 md:px-28">
              <p className="pt-7 text-white font-lato text-base">
                The most common banana is the Cavendish - the one we all know
                and love to eat fresh or in smoothies, yogurts and cakes. When
                yellow with green tips, it has a lovely, balanced sweetness and
                texture. When very ripe (and very sweet) the yellow skin will
                be dotted with brown spots this is the natural sugars bursting
                out!
              </p>
              <h4 className="pt-6 text-white text-xl font-lato font-semibold">
                NUTRITION FACTS
              </h4>
              <p className="text-[#5E5A54] text-base">Serving size grams (100g)</p>
              <div className="flex pt-4 justify-between md:gap-16 gap-10">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[#2f803f] md:text-7xl text-4xl font-bold font-lato">
                    89
                  </h1>
                  <p className="text-[#444444] text-sm font-lato">CALORIES</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#2f803f] md:text-7xl text-4xl font-bold font-lato">
                    0.1
                  </h1>
                  <p className="text-[#444444] text-sm font-lato">SATURATED FAT (G)</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#2f803f] md:text-7xl text-4xl font-bold font-lato">
                    358
                  </h1>
                  <p className="text-[#444444] text-sm font-lato">POTASSIUM (MG)</p>
                </div>
              </div>
              <div className="m-auto flex justify-center items-center mt-3 mb-12 rounded-lg">
                <button className="bg-[#392a25] text-white text-base p-4 pl-8 pr-8 hover:text-[#2f803f] font-semibold md:mb-10 mb-0">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-40% flex md:block hidden justify-center items-center">
          <img src="..\Images\naturalimg.png" alt="banana" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Natural;
