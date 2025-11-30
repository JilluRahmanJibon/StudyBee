import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

type HGetInTouchProps = {
  pageName: string;
  textStyle?: string;
  linkName?: string;
  bgImage?: number;
  contentAlign?: string;
};

const GlobalBanner: React.FC<HGetInTouchProps> = ({
  pageName,
  textStyle = 'uppercase',
  linkName,
  bgImage = 1,
  contentAlign = "left",
}) => {
  const TeamDetails = pageName === "Team Details";
  return (
    <div className="w-full ">
      {/* xl:pt-[132px] lg:pt-[92px] pt-[75px] */}
      <div
        className="w-full lg:h-[300px] h-[250px] bg-[#fffbf7] relative overflow-hidden"
        style={{
          background: `url('/assets/images/Global_Banner_Main_Image${bgImage}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
{/*  bg-[linear-gradient(to_right,#dee023_0%,#b0df57_100%)] bg-size-[200%] */}
{/* bg-[#000000bf] */}
        <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_right,#dee023_0%,#b0df57_100%)] bg-size-[200%] opacity-[.2] z-0"></div>
        <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full h-full mx-auto md:px-[15px] sm:px-0 px-[15px] flex items-center relative text-white! z-10">
          <div
            className={`w-full ${TeamDetails ? "hidden" : ""} ${
              contentAlign === "left"
                ? "md:text-left text-center"
                : contentAlign === "center"
                ? "text-center"
                : "md:text-left text-center"
            } `}
          >
            <h1 className={`lg:text-[70px]! md:text-[52px] sm:text-[42px] text-[30px] font-extrabold lg:leading-[70px]! md:leading-[55px] sm:leading-[45px] leading-[1.2] font-poppins text-white! ${textStyle} sm:mb-[15px] mb-[5px]`}>
              {pageName}
            </h1>
            <ul className={`lg:text-[18px] text-[15px] font-normal font-poppins flex items-center ${
              contentAlign === "left"
                ? "md:justify-start justify-center"
                : contentAlign === "center"
                ? "justify-center"
                : "md:justify-start justify-center"
            } `}>
              <li className="mr-[3px]">
                <Link href={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="pl-2 flex items-center mr-[3px]">
                <FaChevronRight className="lg:text-[14px] text-[13px] mr-2" />
                <p className="text-white!">{linkName ? linkName : pageName}</p>
              </li>
            </ul>
          </div>


          <div
            className={`w-full ${
              TeamDetails ? "flex" : "hidden"
            } sm:items-start items-center justify-center `}
          >
            <Image
              src={"/assets/images/Team_Details/Team_User_1.jpg"}
              width={150}
              height={150}
              className="sm:w-[150px] w-[110px] sm:h-[150px] h-[110px] ml-2.5 rounded-full object-cover sm:shadow-[0_0_0_10px_#fff,0_0_0_20px_#fff3] shadow-[0_0_0_8px_#fff,0_0_0_16px_#fff3]"
              alt="Team Image"
            />
            <div className="sm:ml-10 ml-7 sm:mt-[5px] mt-0">
              <h2 className="sm:text-[32px] text-[22px] text-nowrap text-white! font-bold font-poppins mb-px">
                PAMELA KEY
              </h2>
              <p className="sm:text-[16px] text-[13px] leading-[1.3] text-white! font-poppins font-light sm:mb-5 mb-2.5">
                info@example.com
              </p>

              <div className="flex items-center sm:gap-0 gap-1">
                <div className="sm:w-[37px] w-7 sm:h-[37px] h-7 text-[#000000d6]! hover:text-white! bg-white rounded-full flex justify-center items-center sm:m-0.5 m-0 transition-all duration-1000 cursor-pointer hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                  <FaFacebookF className="sm:text-[14px] text-[12px]" />
                </div>
                <div className="sm:w-[37px] w-7 sm:h-[37px] h-7 text-[#000000d6]! hover:text-white! bg-white rounded-full flex justify-center items-center sm:m-0.5 m-0 transition-all duration-1000 cursor-pointer hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                  <FaInstagram className="sm:text-[16px] text-[12px]" />
                </div>
                <div className="sm:w-[37px] w-7 sm:h-[37px] h-7 text-[#000000d6]! hover:text-white! bg-white rounded-full flex justify-center items-center sm:m-0.5 m-0 transition-all duration-1000 cursor-pointer hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                  <FaTwitter className="sm:text-[14px] text-[12px] ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBanner;
