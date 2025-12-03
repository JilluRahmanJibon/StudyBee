"use client";
import Button from "@/components/shared/ui-kit/Button";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const HLearningPlatform = () => {
  const LearningPlatformData = [
    { id: 1, img: "img.png" },
    { id: 2, img: "img.png" },
    { id: 3, img: "img.png" },
    { id: 4, img: "img.png" },
    { id: 5, img: "img.png" },
    { id: 6, img: "img.png" },
    { id: 7, img: "img.png" },
    { id: 8, img: "img.png" },
  ];
  return (
    <div className="bg-primaryHover">
      <section className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] lg:py-[50px] py-[30px] font-poppins! relative">
        <Marquee
          pauseOnHover={false}
          className="[--duration:20s] sm2:p-1 p-[3px] sm2:[--gap:8px] [--gap:6px]"
        >
          {LearningPlatformData.map((item) => (
            <Image
              key={item.id}
              src={`/assets/images/Home_Page/LearningPlatform/${item.img}`}
              width={249}
              height={141}
              className="sm2:w-[140px] w-[110px] h-auto rounded-[6px]"
              alt="Learning Platform Logo"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={false}
          className="[--duration:30s] sm2:p-1 p-[3px] sm2:[--gap:8px] [--gap:6px]"
        >
          {LearningPlatformData.map((item) => (
            <Image
              key={item.id}
              src={`/assets/images/Home_Page/LearningPlatform/${item.img}`}
              width={249}
              height={141}
              className="sm2:w-[140px] w-[110px] h-auto rounded-[6px]"
              alt="Learning Platform Logo"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={false}
          className="[--duration:20s] sm2:p-1 p-[3px] sm2:[--gap:8px] [--gap:6px]"
        >
          {LearningPlatformData.map((item) => (
            <Image
              key={item.id}
              src={`/assets/images/Home_Page/LearningPlatform/${item.img}`}
              width={249}
              height={141}
              className="sm2:w-[140px] w-[110px] h-auto rounded-[6px]"
              alt="Learning Platform Logo"
            />
          ))}
        </Marquee>
        <div className="absolute left-0 top-0 h-full sm2:w-[100px] w-[50px] bg-linear-to-r to-transparent from-primaryHover"></div>
        <div className="absolute right-0 top-0 h-full sm2:w-[100px] w-[50px] bg-linear-to-l to-transparent from-primaryHover"></div>
        {/* Main Section */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center text-left bg-linear-to-r md:to-transparent to-[#afdf57c9] md:from-primaryHover from-[#afdf57c9] from-30% font-poppins">
          <div className="w-full my-auto md:text-left text-center sm2:px-0 px-[15px]">
            <h3 className="sm2:text-[16px] text-[15px] text-[#ffffffe7]! font-normal">
              Introducing
              <br /> New Online Learning Platform
            </h3>
            <h1 className="sm2:text-[35px] text-[29px] text-white! font-semibold">
              StudyBee' Learning
            </h1>
            <p className="sm2:text-[16px] text-[14px] text-[#ffffffe7]! font-normal mb-[11px]">
              Plan your journey with our expert guidance and resources
            </p>
            <button className="w-fit xl:text-[14px] sm2:text-[13px] text-[11px] text-white! hover:text-black! border-2 border-white hover:bg-white md:p-[12px_30px] sm2:p-[11px_30px] p-[9px_30px] flex items-center rounded-[15px] cursor-pointer button_icon_effect transition-all duration-1000 md:mx-0 mx-auto">
              Learn More{" "}
              <div className={`w-[9px] h-[18px] sm3:ml-[9px] ml-[5px]`}>
                <FaAngleRight className="sm3:text-[17px] text-[13px] sm3:mt-0 mt-0.5 button_icon" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HLearningPlatform;
