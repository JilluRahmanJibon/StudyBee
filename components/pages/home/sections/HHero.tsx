import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";

const HHero = () => {
  const ValueBullets = [
    { id: 1, title: "Strategy-first approach with clear roadmaps" },
    { id: 2, title: "Full-stack design, development, and growth" },
    { id: 3, title: "Transparent communication and consistent delivery" },
  ];
  return (
    <div className="relative mb-[200px]">
      {/* Partical --- */}

      {/* Main Contant */}
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] 2xl:pt-[50px]! lg:pt-10! sm:pt-[30px] pt-5 flex lg:flex-row flex-wrap justify-between lg:items-start items-center font-poppins! sm:pb-0 pb-[30px]">
        <div className="lg:w-[58.33333%] w-full lg:pb-0 sm:pb-[50px] pb-10">
          {/* <h3 className="text-[22px] text-[#bbbbbb] font-semibold sm:mb-3 mb-2.5">
            WE CREATE IDEAS
          </h3> */}
          {/* <h1 className="xl:text-[60px]! md:text-[50px] sm:text-[40px] text-[32px] font-bold font-poppins text-black! leading-[1.2] mb-3">
            Welcome To StudyBee' Strive <br className="lg:flex hidden" />
            <span className="text-primary!">into Impact</span>
          </h1> */}

          <h1 className="xl:text-[57px]! md:text-[50px] sm:text-[40px] text-[32px] font-bold font-poppins text-black! leading-[1.2] mb-3">
            Welcome To <span className="text-primary!">StudyBee'</span>{" "}
            <br className="lg:flex hidden" />
            Strive Learn. Upgrade - Explore new horizons with us!
          </h1>

          <p className="md:text-[18px] text-[15px] font-light font-poppins  leading-normal mb-5">
            StudyBee' is the most reputed educational institution and admission
            consulting house dedicated to preparing students in their
            admissions, standardized tests, and academic studies. We are a
            student-focused institution that offers a vibrant and inspirational
            learning environment.
          </p>

          {/* <div className="w-full mb-5">
            {ValueBullets?.map((card) => (
              <div
                key={card.id}
                className="w-fit flex items-center relative group"
              >
                <div className="absolute left-0 top-0 h-full flex items-start pt-[11px] transition-transform duration-1000 ease-in-out transform sm:group-hover:translate-x-2.5 group-hover:translate-x-1.5">
                  <BsChevronDoubleRight className="text-primary sm:text-[17px] text-[15px]" />
                </div>
                <p className="sm:p-[8px_5px_8px_35px] p-[8px_5px_8px_25px] sm:text-[15px] text-[14px] leading-[1.6]">
                  {card.title}
                </p>
              </div>
            ))}
          </div> */}
          <div className="flex sm2:flex-row flex-col items-center sm3:gap-[15px] gap-[7px]">
            <Button
              text="Our Courses"
              customClassName="sm:w-fit w-full"
              bgLinearGradient={true}
            />
            <Button
              text="Study Abroad"
              customClassName="sm:w-fit w-full"
              borderLinearGradient={true}
            />
          </div>

          {/* <div className="md:text-[18px] text-[15px]  font-light font-poppins leading-normal flex pt-6">
            <PiMedal className="text-[25px] text-primary md:mt-0.5 mt-px w-[37px]" /> <span className="inline pl-[5px]"> Trusted by startups and
            established businesses across Bangladesh and beyond.</span>
          </div> */}
        </div>
        <div className="lg:w-[41.66667%] w-full xl:h-[400px]! lg:h-[274px] h-auto relative">
          <Image
            src="/assets/images/Home_Page/Home_Main_Image.png"
            width={1000}
            height={878}
            className="w-full h-auto object-contain Image-Transform-Animation"
            alt="home main image"
          />
        </div>
      </div>
    </div>
  );
};

export default HHero;
