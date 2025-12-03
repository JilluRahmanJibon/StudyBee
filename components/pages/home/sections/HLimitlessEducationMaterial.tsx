"use client";
import { useState } from "react";
import Button from "@/components/shared/ui-kit/Button";
import Image from "next/image";
import { FaGraduationCap, FaHandsHoldingChild } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";

const HLimitlessEducationMaterial = () => {
  const LimitlessEducationMaterialData = [
    {
      id: 1,
      navTitle: "IELTS",
      img: "IELTS.jpg",
      imgDescription: "Achieve your desired score with our help.",
      width: 640,
      height: 360,
      title: "IELTS Preparation",
      description:
        "Ensure your desired score with the biggest preparation support provider in Bangladesh!",
      features: [
        {
          id: 1,
          title: "Practice Tests",
          icon: (
            <RiBankFill className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 2,
          title: "Study Materials",
          icon: (
            <FaGraduationCap className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 3,
          title: "Expert Guidance",
          icon: (
            <FaHandsHoldingChild className="sm2:text-[19px] text-[16px] text-primaryHover -mt-0.5" />
          ),
        },
      ],
    },
    {
      id: 2,
      navTitle: "BBA-MBA",
      img: "BBA-MBA.jpg",
      imgDescription: "Shape your future with our programs.",
      width: 640,
      height: 360,
      title: "BBA & MBA Programs",
      description:
        "Join our top-tier BBA and MBA programs for those who wish to learn in-depth knowledge of business functions and practices. Highly esteemed by employers of all levels, this prestigious degree opens several paths for professionals and new graduates to kick or to advance start their careers.",
      features: [
        {
          id: 1,
          title: "Industry Exposure",
          icon: (
            <RiBankFill className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 2,
          title: "Experienced Faculty",
          icon: (
            <FaGraduationCap className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 3,
          title: "Global Curriculum",
          icon: (
            <FaHandsHoldingChild className="sm2:text-[19px] text-[16px] text-primaryHover -mt-0.5" />
          ),
        },
      ],
    },
    {
      id: 3,
      navTitle: "Australia",
      img: "Australia.jpg",
      imgDescription: "Shape your future with our programs.",
      width: 484,
      height: 473,
      title: "Study in Australia",
      description:
        "Immerse yourself in the vibrant culture and stunning landscapes of Australia with our study abroad program.",
      features: [
        {
          id: 1,
          title: "Industry Exposure",
          icon: (
            <RiBankFill className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 2,
          title: "Experienced Faculty",
          icon: (
            <FaGraduationCap className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 3,
          title: "Global Curriculum",
          icon: (
            <FaHandsHoldingChild className="sm2:text-[19px] text-[16px] text-primaryHover -mt-0.5" />
          ),
        },
      ],
    },
    {
      id: 4,
      navTitle: "Canada",
      img: "Canada.jpg",
      imgDescription: "Find your path in Canada.",
      width: 640,
      height: 360,
      title: "Study in Canada",
      description:
        "As the second-largest country in the world, Canada offers access to one of the best educational systems globally. Students can choose from a wide range of courses, including marine biology, accountancy, and aviation. Additionally, the relatively low cost of education and living makes studying in Canada even more valuable.",
    },
    {
      id: 5,
      navTitle: "Kid's English",
      img: "KidsEnglish.png",
      imgDescription: "Build a strong foundation in English.",
      width: 411,
      height: 413,
      title: "Kid's English",
      description:
        "A program for kids aged 5 to 12 years, set in a friendly environment that encourages interaction with peers. Group games are designed to stimulate brain development and enhance cognitive function from an early age.",
      features: [
        {
          id: 1,
          title: "Interactive Lessons",
          icon: (
            <RiBankFill className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 2,
          title: "Certified Teachers",
          icon: (
            <FaGraduationCap className="sm2:text-[21px] text-[18px] text-primaryHover -mt-0.5" />
          ),
        },
        {
          id: 3,
          title: "Progress Tracking",
          icon: (
            <FaHandsHoldingChild className="sm2:text-[19px] text-[16px] text-primaryHover -mt-0.5" />
          ),
        },
      ],
    },
    {
      id: 6,
      navTitle: "Batch Schedule",
      SelectLocation: [
        { id: 1, title: "Kalabagan" },
        { id: 2, title: "Banani" },
        { id: 3, title: "Mirpur" },
        { id: 4, title: "Mouchak" },
        { id: 5, title: "Uttara 1" },
        { id: 6, title: "Uttara 2" },
        { id: 7, title: "Wari" },
        { id: 8, title: "Online" },
      ],
      SelectCourse: [
        { id: 1, title: "BBA" },
        { id: 2, title: "BBA Crash" },
        { id: 3, title: "Foundation Grammar &amp; Writing" },
        { id: 4, title: "GED" },
        { id: 5, title: "IELTS Crash" },
        { id: 6, title: "IELTS Executive" },
        { id: 7, title: "IELTS Regular" },
        { id: 8, title: "Kid's English" },
        { id: 8, title: "MBA" },
        { id: 8, title: "Spoken English And Phonetics" },
      ],
    },
  ];
  const [activeNav, setActiveNav] = useState("IELTS");
  const [activeNavData, setActiveNavData] = useState(
    LimitlessEducationMaterialData[0]
  );

  return (
    <div>
      <section className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] xl:pt-[70px] md:pt-[30px] pt-0 md:pb-[50px] sm2:pb-[50px] pb-[41px] font-poppins!">
        <div
          className={`w-full flex justify-center text-center sm4:mb-[23px] mb-[15px]`}
        >
          <h2 className="xl:text-[51px]! lg:text-[40px]! sm2:text-[35px] sm4:text-[25px] text-[22px] text-black! font-bold leading-[1.2]">
            One platform for limitless
            <br className="sm2:flex hidden" /> education material
          </h2>
        </div>
        <main className="w-full ">
          <ul className="w-full flex md:flex-row flex-wrap justify-center items-center gap-[5px]">
            {LimitlessEducationMaterialData.map((list) => {
              return (
                <li
                  key={list.id}
                  onClick={() => {
                    setActiveNav(list.navTitle);
                    setActiveNavData(list);
                  }}
                  className={`p-px sm2:mt-0.5 mt-px bg-linear3 bg-size-[200%] bg-left hover:bg-right cursor-pointer group rounded-full`}
                >
                  <p
                    className={`lg:text-[14px] sm2:text-[13px] text-[11px] sm4:px-[17px] px-[11px] sm4:py-1.5 py-[5px] ${
                      activeNav === list.navTitle
                        ? "bg-transparent text-white!"
                        : "bg-white group-hover:bg-transparent text-black! group-hover:text-white!"
                    } rounded-full transition-all duration-700`}
                  >
                    {list.navTitle}
                  </p>
                </li>
              );
            })}
          </ul>
          <div
            className={`${
              activeNavData.navTitle === "Batch Schedule" ? "hidden" : "flex"
            } w-full md:flex-row flex-col sm4:mt-[35px] mt-[27px]`}
          >
            <div className="md:w-1/2 w-full">
              <Image
                src={`/assets/images/Home_Page/LimitlessEducationMaterial/${
                  activeNavData?.img
                    ? activeNavData?.img
                    : LimitlessEducationMaterialData[0].img
                }`}
                width={activeNavData?.width ? activeNavData?.width : 0}
                height={activeNavData?.height ? activeNavData?.height : 0}
                className="w-full h-auto object-contain rounded-[11px]"
                alt="Limitless Education Material Image"
              />
              <p className="xl:text-[16px] sm2:text-[14px] text-[13px] text-[#000000e7]! font-normal mt-[5px]">
                {activeNavData?.imgDescription}
              </p>
            </div>
            <div className="md:w-1/2 w-full md:pl-[30px] pl-0 md:pt-0 pt-[15px]">
              <h1 className="xl:text-[35px] lg:text-[31px] sm2:text-[24px] text-[18px] text-black! font-semibold lg:mb-[5px] mb-0">
                {activeNavData?.title}
              </h1>
              <p className="xl:text-[16px] sm2:text-[14px] text-[13px] text-[#000000e7]! font-normal lg:mb-[11px] mb-[5px]">
                {activeNavData?.description}
              </p>
              <ul
                className={`${
                  activeNavData?.features ? "" : "hidden"
                } lg:mb-[15px] mb-[9px]`}
              >
                {activeNavData?.features?.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="flex items-center sm2:py-[5px] py-[3px] xl:pl-[15px] sm2:pl-[11px] pl-[7px]"
                    >
                      <div className="sm2:w-[25px] w-[21px] flex justify-start items-center mr-[3px]">
                        {item.icon}
                      </div>
                      <p className="xl:text-[16px] sm2:text-[14px] text-[13px] text-[#000000e7]! font-normal">
                        {item.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <Button
                text="Learn More"
                padding="xl:p-[12px_37px]! sm2:p-[11px_30px] p-[9px_33px]"
                border="sm2:p-[2px] p-px"
                borderLinearGradientPadding="xl:p-[10px_35px]! sm2:p-[9px_28px] p-[7px_31px]"
                customClassName="w-fit"
                borderLinearGradient={true}
                customTextSize="sm2:text-[13px] text-[11px]"
              />
            </div>
          </div>
          {/* Batch Schedule */}
          <div
            className={`${
              activeNavData.navTitle === "Batch Schedule" ? "grid" : "hidden"
            } md:grid-cols-3 sm2:grid-cols-2 grid-cols-1 gap-2.5 w-full sm4:mt-[35px] mt-[27px]`}
          >
            {/* Select Location */}
            <div className="relative w-full md:h-[45px] sm2:h-[41px] h-[38px] flex items-center bg-linear3 bg-size-[200%] bg-left p-px rounded-full">
              <select
                id="location-select"
                name="location"
                className="block w-full h-full md:text-[14px] text-[12px] appearance-none rounded-full bg-white md:pl-[38px] pl-[33px] shadow-sm border-0 outline-0 focus:border-transparent! focus:ring-transparent! select-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Location
                </option>
                {activeNavData.SelectLocation?.map((item) => {
                  return (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
              <div className="absolute md:left-[15px] left-[11px] top-0 h-full flex items-center">
                <RiBankFill className="md:text-[19px] text-[17px] text-primaryHover -mt-px" />
              </div>

              {/* Custom Down Arrow */}
              <div className="pointer-events-none absolute right-0 top-0 h-full p-px">
                <div className="w-full h-full flex items-center bg-white md:pl-0 pl-1 md:pr-3 pr-1.5 rounded-r-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600 md:w-[18px] w-[15px]"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Select Course */}
            <div className="relative w-full md:h-[45px] sm2:h-[41px] h-[38px] flex items-center bg-linear3 bg-size-[200%] bg-left p-px rounded-full">
              <select
                id="location-select"
                name="location"
                className="block w-full h-full md:text-[14px] text-[12px] appearance-none rounded-full bg-white md:pl-[38px] pl-[33px] shadow-sm border-0 outline-0 focus:border-transparent! focus:ring-transparent! select-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Course
                </option>
                {activeNavData.SelectCourse?.map((item) => {
                  return (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
              <div className="absolute md:left-[15px] left-[11px] top-0 h-full flex items-center">
                <MdMenuBook className="md:text-[19px] text-[17px] text-primaryHover -mt-px" />
              </div>

              {/* Custom Down Arrow */}
              <div className="pointer-events-none absolute right-0 top-0 h-full p-px">
                <div className="w-full h-full flex items-center bg-white md:pl-0 pl-1 md:pr-3 pr-1.5 rounded-r-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600 md:w-[18px] w-[15px]"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <Button
              text="Check Now"
              padding="rounded-full"
              customClassName="md:col-span-1 sm2:col-span-2 col-span-1 w-full md:h-[45px] sm2:h-[41px] h-[38px]"
              bgLinearGradient={true}
              customTextSize="md:text-[13px] sm2:text-[12px] text-[11px] rounded-full"
              customIconSize="md:text-[16px] sm2:text-[15px] text-[14px]"
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default HLimitlessEducationMaterial;
