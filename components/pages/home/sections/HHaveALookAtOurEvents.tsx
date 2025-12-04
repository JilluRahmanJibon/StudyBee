"use client";
import Button from "@/components/shared/ui-kit/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdStopwatch } from "react-icons/io";
import { MdOutlineShareLocation } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HHaveALookAtOurEvents = () => {
  const [activeNav, setActiveNav] = useState("All Events");
  const HaveALookAtOurEventsNavData = [
    { id: 1, title: "All Events" },
    { id: 2, title: "Upcoming Events" },
  ];
  const HaveALookAtOurEventsData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set slides per view dynamically
  const slidesPerView =
    windowWidth >= 990
      ? 3
      : windowWidth >= 768
      ? 2
      : windowWidth >= 600
      ? 1
      : 1;

  return (
    <div>
      <section className="w-full mx-auto h-auto font-poppins! lg:pb-[85px] pb-[50px]">
        <div
          className={`w-full flex justify-center text-center px-[15px] sm3:mb-[25px] mb-[15px]`}
        >
          <h2 className="xl:text-[55px]! lg:text-[40px]! sm2:text-[35px] text-[25px] text-black! font-bold leading-[1.2]">
            Have A Look At Our Events
          </h2>
        </div>
        <main className="w-full">
          <ul className="w-full flex md:flex-row flex-wrap justify-center items-center sm3:gap-[11px] gap-[5px] px-[15px]">
            {HaveALookAtOurEventsNavData.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.title);
                  }}
                  className={`p-px bg-linear3 bg-size-[200%] bg-left hover:bg-right cursor-pointer group rounded-full`}
                >
                  <p
                    className={`lg:text-[14px] sm2:text-[13px] text-[11px] sm4:px-[21px] px-[15px] sm4:py-2 py-[5px] ${
                      activeNav === item.title
                        ? "bg-transparent text-white!"
                        : "bg-white group-hover:bg-transparent text-black! group-hover:text-white!"
                    } rounded-full transition-all duration-700`}
                  >
                    {item.title}
                  </p>
                </li>
              );
            })}
          </ul>

          <div
            className={`${
              activeNav === "Upcoming Events" && "hidden"
            } lg:w-[1000px]! md:w-[670px] sm2:w-[375px] w-full flex justify-center items-center mt-[30px] sm4:px-[15px] px-0 mx-auto relative`}
          >
            <Swiper
              slidesPerView={slidesPerView}
              slidesPerGroup={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              speed={2000}
              modules={[FreeMode, Autoplay, Navigation]}
              className="mySwiper flex! justify-center! py-[5px]!"
            >
              {HaveALookAtOurEventsData.map((card) => {
                return (
                  <SwiperSlide key={card.id}>
                    <div className="w-[295px] rounded-[15px] bg-white shadow-[0px_0px_8px_0px_#00000014] mx-auto">
                      <div className="w-full h-[170px] flex justify-center items-center rounded-[15px] p-[5px] overflow-hidden">
                        <Image
                          src={`/assets/images/Home_Page/HaveALookAtOurEvents/event_1.jpg`}
                          width={440}
                          height={230}
                          className="w-full h-full object-cover rounded-[15px]"
                          alt="Our Events Image"
                        />
                      </div>
                      <div className="w-full px-[15px] pb-[57px] pt-[5px] font-poppins relative">
                        <h3 className="text-[15px] text-black! font-normal pb-[3px]">
                          Seminar & Spot Assessment: Macquarie University
                        </h3>
                        <p className="text-[13px] mb-[5px]">
                          {" "}
                          <span>
                            <MdOutlineShareLocation className="text-[17px] text-primaryHover inline -mt-px" />
                          </span>{" "}
                          StudyBee' Study Abroad, Banani Branch Taneem Square
                          (7th Fl), 158/E Kamal Ataturk Avenue, Banani,
                          Dhaka-1213
                        </p>
                        <p className="text-[13px] mb-[15px]">
                          {" "}
                          <span>
                            <IoMdStopwatch className="text-[17px] text-primaryHover inline -mt-[3px]" />
                          </span>{" "}
                          2025-07-08, 03:00 PM
                        </p>

                        <div className="absolute left-0 bottom-[15px] w-full px-[15px]">
                          <Button
                            text="Learn More"
                            padding="py-[9px]"
                            borderLinearGradientPadding="py-[7px]"
                            borderLinearGradient={true}
                            uppercase={false}
                            customClassName="w-full"
                            customTextSize="sm2:text-[13px] text-[11px] text-defaultText!"
                            customIconSize="sm3:text-[15px] text-[13px] mt-[1px]! text-defaultText group-hover:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* ✅ Custom Navigation Buttons */}
            {/* <div className="absolute xl:left-[-30px] left-[-15px] top-0 z-40 w-fit h-full md:flex hidden  justify-center items-center">
              <button className="custom-prev bg-[#00000033] hover:bg-primary text-white w-[45px] h-[45px] flex items-center justify-center rounded-sm shadow-md cursor-pointer transition-all duration-1000">
                <FaArrowLeft />
              </button>
            </div> */}
            <div className="absolute xl:left-[-30px] lg:left-[-3px] left-[-30px] top-0 z-40 w-fit h-full sm:flex hidden  justify-center items-center">
              <button className="custom-prev bg-linear3 bg-size-[200%] bg-left hover:bg-right text-defaultText hover:text-white w-[42px] h-[42px] rounded-md shadow-[0px_0px_8px_0px_#00000014] cursor-pointer p-px group transition-all duration-1000">
                <div className="w-full h-full flex items-center justify-center bg-white group-hover:bg-transparent rounded-[7px] transition-all duration-1000">
                <FaArrowLeft className="text-[15px]" />
                </div>
              </button>
            </div>
            <div className="absolute xl:right-[-30px] lg:right-[-3px] right-[-30px] top-0 z-40 h-full sm:flex hidden justify-center items-center">
              <button className="custom-next bg-linear3 bg-size-[200%] bg-left hover:bg-right text-defaultText hover:text-white w-[42px] h-[42px] rounded-md shadow-[0px_0px_8px_0px_#00000014] cursor-pointer p-px group transition-all duration-1000">
                <div className="w-full h-full flex items-center justify-center bg-white group-hover:bg-transparent rounded-[7px] transition-all duration-1000">
                  <FaArrowRight className="text-[15px]" />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`${
              activeNav === "All Events" && "hidden"
            } w-full text-center mt-[30px]`}
          >
            <p className="text-[14px] font-poppins font-normal">
              Not Available
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default HHaveALookAtOurEvents;
