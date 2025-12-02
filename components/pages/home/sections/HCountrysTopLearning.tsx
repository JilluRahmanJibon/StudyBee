"use client";

import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiEnlightenment } from "react-icons/gi";
import { GoStopwatch } from "react-icons/go";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuHandCoins } from "react-icons/lu";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

const HCountrysTopLearning = () => {
  const CountrysTopLearningData = [
    {
      id: 1,
      title: "IELTS",
      icon: <LiaClipboardListSolid className="md:text-[30px] text-[27px] md:leading-[30px] leading-[27px]" />,
    },
    {
      id: 2,
      title: "Study Abroad",
      icon: <TfiWorld className="md:text-[28px] text-[25px] md:leading-[30px] leading-[27px]" />,
    },
    {
      id: 3,
      title: "Course Fees",
      icon: <FaHandHoldingDollar className="md:text-[32px] text-[29px] md:leading-[30px] leading-[27px]" />,
    },
    {
      id: 4,
      title: "Online Learning",
      icon: <MdOutlineDocumentScanner className="md:text-[30px] text-[27px] md:leading-[30px] leading-[27px]" />,
    },
    {
      id: 5,
      title: "Batch Schedule",
      icon: <GoStopwatch className="md:text-[30px] text-[27px] md:leading-[30px] leading-[27px]" />,
    },
    {
      id: 6,
      title: "Corporate Training",
      icon: <GiEnlightenment className="md:text-[35px] text-[32px] md:leading-[30px] leading-[27px]" />,
    },
  ];

  return (
    <div>
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] xl:pt-[70px] md:pt-[30px] pt-0 flex lg:flex-row flex-col lg:justify-between justify-center font-poppins! lg:pb-[85px] pb-[50px]">
        <div className="lg:w-1/2 w-full lg:pr-[30px] pr-0">
          <h1 className="xl:text-[37px] md:text-[35px] sm3:text-[28px] text-[21px] text-black! font-bold font-poppins leading-[1.4] mb-[7px]">
            Country’s top learning and<br className="hidden"/> education platform
          </h1>
          <p className="xl:text-[16px] md:text-[15px] sm3:text-[14px] text-[13px] font-light font-poppins leading-normal mb-[11px]">
            Mentors’ is the premier online education platform offering a
            comprehensive suite of learning resources and tools with features
            like personalized learning paths, virtual classrooms, and
            collaborative tools, Mentors’ empowers learners to study at their
            own pace and engage with content in innovative ways. Whether
            preparing for exams, advancing career skills, or pursuing lifelong
            learning, it is the go-to destination for quality education and
            skill development
          </p>
        </div>
        <div className="lg:w-1/2 w-full h-full grid sm3:grid-cols-3 sm4:grid-cols-2 grid-cols-1 gap-5 lg:mt-0 sm3:mt-[25px] mt-[17px]">
          {CountrysTopLearningData.map((card) => {
            return (
              <div
                key={card.id}
                className="w-full md:h-[136px] sm4:h-[120px] h-[130px] bg-linear3 bg-size-[200%] bg-left hover:bg-right p-0.5 group rounded-[15px]"
              >
                <div className="w-full h-full bg-white group-hover:bg-transparent flex flex-col justify-center text-center items-center md:px-[15px] px-[7px] rounded-[13px] transition-all duration-1000">
                  <div className="text-black! group-hover:text-white! md:mb-[7px] mb-[5px] flex items-center transition-all duration-1000">
                    {card.icon}
                  </div>
                  <h3 className="md:text-[15px] text-[14px] text-black! group-hover:text-white! transition-all duration-1000">{card.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HCountrysTopLearning;
