import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Ripening = () => {
  return (
    <div>
      <h1 className="text-center my-24 text-[#2f803f] font-great text-4xl md:text-5xl lg:text-6xl">
        Ripening of bananas
      </h1>
      <div className="w-[95%] sm:w-[90%] mx-auto">
        <p className="my-10 font-lato text-sm sm:text-base md:text-lg">Upon receipt of the produce at our warehouse, it is subjected to a quality inspection in a specially equipped conditioned inspection area. The banana ripening process is monitored throughout the week by our professional staff, who monitor the color changes and perform regular temperature measurements. Bananas are ripened to the color required by the customer.</p>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="basis-full lg:basis-1/2">
            <img
              src="../Images/Rip.png"
              alt="profile"
              className="w-full h-auto"
            />
          </div>
          <div className="basis-full lg:basis-1/2">
            <div className="flex flex-col gap-5">
              <h2 className="text-[#2f803f] font-lato font-semibold text-xl md:text-2xl">
                Expert opinion
              </h2>
              <p className="text-[#5e5a54] font-open text-sm sm:text-base md:text-lg">
                "Banana ripening is a fully automated process, but it must be
                monitored to ensure that the appropriate temperature and
                humidity levels are maintained. Bananas are ripened with the
                help of natural ethylene gas and a uniform ripeness level is
                achieved in five to six days, which keeps the bananas fresh for
                longer and increases their shelf life.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                It is the customer who determines the ripeness of the bananas he
                wants to receive, so quality control is carried out throughout
                the banana ripening process and regular inspections are carried
                out”.
              </p>
            </div>
            <h3 className="text-right uppercase mt-7 lg:mt-12 text-[#5fbd74] font-bold text-base font-lato">
              MIHAILS EGLE
            </h3>
          </div>
        </div>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../Images/slider1.png"
              alt="slider"
              className="w-200px h-200px"
            />
          </SwiperSlide>

          {/* Navigation buttons */}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </Swiper>
      </div>
    </div>
  );
};

export default Ripening;
