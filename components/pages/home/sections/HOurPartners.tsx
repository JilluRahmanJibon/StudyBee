"use client";
import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const HOurPartners = () => {
  const PartnersData = [
    { id: 1, img: "partner_1" },
    { id: 2, img: "partner_2" },
    { id: 3, img: "partner_3" },
    { id: 4, img: "partner_4" },
    { id: 5, img: "partner_5" },
    { id: 6, img: "partner_6" },
    { id: 7, img: "partner_7" },
    { id: 8, img: "partner_8" },
    { id: 9, img: "partner_9" },
    { id: 10, img: "partner_10" },
    { id: 11, img: "partner_11" },
    { id: 12, img: "partner_12" },
  ];
  return (
    <div>
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto sm:px-0 px-[15px] pt-[50px] sm2:pb-[70px] pb-[30px]">
        <div
          className={`w-full flex justify-center text-center font-poppins xl:mb-10 sm2:mb-[30px] mb-[15px]`}
        >
          <h2 className="xl:text-[55px]! lg:text-[40px]! sm2:text-[35px] text-[25px] text-black! font-bold leading-[1.2] mb-2">
            Our Partners
          </h2>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1500}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              420: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              990: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper cursor-default py-2.5! px-[7px]!"
          >
            {PartnersData.map((partner) => {
              return (
                <SwiperSlide>
                  <div
                    key={partner.id}
                    className={`w-full sm2:h-[100px] h-[140px] sm2:p-[20px_30px] p-0 bg-white rounded-lg flex items-center justify-center shadow-[0px_0px_8px_0px_#00000014] transition duration-700 `}
                  >
                    <div className={`sm2:w-[120px] w-[150px] sm2:h-[60px] h-[75px] relative m-auto`}>
                      <Image
                        src={`/assets/images/Home_Page/OurPartners/${partner.img}.png`}
                        width={600}
                        height={300}
                        className={`object-contain select-none`}
                        alt="partners Images"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HOurPartners;
