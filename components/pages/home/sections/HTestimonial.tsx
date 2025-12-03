"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";
import { useState } from "react";

type HTestimonialProps = {
  pageName?: string;
};
const HTestimonial: React.FC<HTestimonialProps> = ({ pageName }) => {
  const blogsData = [
    {
      id: 1,
      name: "Samiha Nazifa Ahasan",
      description:
        "I am currently pursuing the BSc (Hons) in Computing Systems program at Ulster University in the UK. Thanks to Mentors' Study Abroad for guiding me through the whole process of admission and visa.They were consistently available whenever I needed to reach out to them. They have really made my dreams of studying abroad into reality.",
      img: "user_1",
    },
    {
      id: 2,
      name: "Ayman Fayyaz",
      description:
        "My journey to study Bachelor of Information Technology (Cyber Security) at Macquarie University was made possible by Mentors' Study Abroad. From IELTS preparation to visa lodging, they provided a one-stop solution. Their expert guidance helped me achieve my dream of studying in Australia.",
      img: "user_2",
    },
    {
      id: 3,
      name: "Tasnuva Bashar Tanni",
      position: "PTE",
      description:
        "I chose the PTE program to migrate to Australia.I am happy to have scored an 86 overall in PTE. This achievement was only possible because of Mentors'. Mentors' is undoubtedly the best choice for PTE preparation.",
      img: "user_3",
    },
    {
      id: 4,
      name: "Rafid Tahsin Imam",
      position: "IBA BBA",
      description:
        "I’m a student of IBA BBA 32nd batch, and I prepared for my admission at Mentors' Kalabagan branch. The instructors were highly supportive, and the mock tests gave me a strong edge in the actual exam. I highly recommend Mentors' to future candidates aiming for IBA.",
      img: "user_2",
    },
  ];
  const [isExpanded, setIsExpanded] = useState("");

  return (
    <div className="bg-[#f4f2ff] lg:pt-[115px]! sm:pt-[70px] pt-[50px] lg:pb-[85px]! sm:pb-10 pb-5">
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto flex lg:flex-row flex-col items-center md:px-[15px]! sm:px-0 px-[15px]">
        <div className="lg:w-1/2 w-full text-left font-poppins md:px-[15px] px-0 mb-10 lg:order-1 order-2">
          <h5 className="inline-block xl:text-[22px]! lg:text-[16px] text-[18px] font-semibold -mb-0.5">
            TESTMONIAL
          </h5>
          <h2 className="xl:text-[60px]! lg:text-[40px]! sm:text-[42px] text-[30px] text-black! font-extrabold leading-[1.2] mb-2">
            What People Say About Us
          </h2>
          <p className="text-[15px] font-light font-poppins text-[#b7b7b7] leading-[25px]">
            Real feedback from real students. Their words inspire us to continue delivering the best service.
          </p>
        </div>
        <div className="lg:w-1/2 w-full md:px-[15px] px-0 relative lg:order-2 order-1 sm2:mb-0 mb-[15px]">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 55552500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            speed={2000}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper cursor-default flex! justify-center!"
          >
            {blogsData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="xl:w-[570px]! lg:w-[450px] w-full h-full lg:m-[15px] m-0 lg:p-0 p-[15px]">
                  <div className="xl:w-[525px]! lg:w-[405px] w-full sm:p-[35px]! sm2:p-5 p-[15px] bg-white rounded-sm! shadow-[1px_0_20px_#0000001a]">
                    <div className="flex">
                      <p
                        className={`sm:text-[18px] sm2:text-[15px] text-[14px] font-normal font-roboto italic leading-[1.6] mb-5`}
                      >
                        <span
                          className={`${
                            isExpanded === blog.name ? "" : "line-clamp-3"
                          }`}
                        >
                          {blog.description}
                        </span>
                        <span
                          onClick={() => {isExpanded === blog.name ? setIsExpanded(""): setIsExpanded(blog.name)}}
                          className={`text-primaryHover! sm:text-[18px] sm2:text-[15px] text-[14px] font-normal font-roboto italic underline cursor-pointer ${
                            isExpanded ? "pl-[5px]" : ""
                          }`}
                        >
                          {isExpanded === blog.name ? "See Less" : "Read More"}
                        </span>
                      </p>
                    </div>
                    <div className="flex md:items-center items-end justify-between">
                      <FaQuoteLeft className="md:text-[85px] sm2:text-[50px] text-[42px] text-primary leading-none opacity-[.4]" />
                      <div className="flex items-center">
                        <div className="text-right">
                          <h3 className="sm2:text-[18px] text-[13px] text-black! font-bold sm:leading-[26px] sm2:leading-5 leading-[15px] sm:mb-[5px] mb-0.5 font-poppins">
                            {blog.name}
                          </h3>
                          <p className="sm:text-[15px] sm2:text-[13px] text-[11px] font-normal font-roboto">
                            {blog.position}
                          </p>
                        </div>
                        <div
                          className={`sm:w-20 sm2:w-[60px] w-[50px] sm:min-w-20 sm2:min-w-[60px] min-w-[50px] sm:h-20 sm2:h-[60px] h-[50px] sm:min-h-20 sm2:min-h-[60px] min-h-[50px] sm2:border-[3px] border-2 border-primary relative sm2:ml-5 ml-[7px] rounded-full`}
                        >
                          <Image
                            src={`/assets/images/Home_Page/Testmonial/${blog.img}.jpg`}
                            fill
                            className="object-contain rounded-full"
                            alt="Testmonial User Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* ✅ Custom Navigation Buttons */}
          <div className="flex justify-center sm2:gap-5 gap-3 sm2:mt-5 mt-2.5">
            <button
              onClick={() => setIsExpanded("")}
              className="custom-prev bg-white hover:bg-primary text-primary hover:text-white sm2:w-[45px] w-[39px] sm2:h-[45px] h-[39px] rounded-full flex items-center justify-center shadow-[1px_0_20px_#0000001a] cursor-pointer transition-all duration-500"
            >
              <FaArrowLeft className="sm2:text-[16px] text-[15px]" />
            </button>
            <button
              onClick={() => setIsExpanded("")}
              className="custom-next bg-white hover:bg-primary text-primary hover:text-white sm2:w-[45px] w-[39px] sm2:h-[45px] h-[39px] rounded-full flex items-center justify-center shadow-[1px_0_20px_#0000001a] cursor-pointer transition-all duration-500"
            >
              <FaArrowRight className="sm2:text-[16px] text-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTestimonial;
