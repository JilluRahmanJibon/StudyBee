import Image from "next/image";
import Link from "next/link";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "../ui-kit/Button";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      name: "Test Centers",
      subLinks: [
        { id: 1, name: "Kalabagan", link: "" },
        { id: 2, name: "Banani", link: "" },
        { id: 3, name: "Mirpur", link: "" },
        { id: 4, name: "Uttara Campus 1", link: "" },
        { id: 5, name: "Uttara Campus 2", link: "" },
        { id: 6, name: "Chattogram", link: "" },
      ],
    },
    {
      id: 2,
      name: "StudyBee'",
      subLinks: [
        { id: 1, name: "Fees", link: "" },
        { id: 2, name: "Events", link: "" },
        { id: 3, name: "Franchise", link: "" },
        { id: 4, name: "Partners", link: "" },
        { id: 5, name: "Videos", link: "" },
        { id: 6, name: "Contact Us", link: "" },
        { id: 7, name: "Feedback", link: "" },
      ],
    },
    {
      id: 3,
      name: "Apply",
      subLinks: [
        { id: 1, name: "Admission Online (Education)", link: "" },
        { id: 2, name: "Apply Online (Study Abroad)", link: "" },
      ],
      withOtherSection: {
        id: 1,
        name: "Legal",
        subLinks: [
          { id: 1, name: "Privacy Policy", link: "" },
          { id: 2, name: "Rules and Regulation", link: "" },
          { id: 3, name: "Mission Statement", link: "" },
          { id: 4, name: "About Us", link: "" },
        ],
      },
    },
  ];
  return (
    <div>
      {/* <div
        className="w-full py-10 relative"
        style={{
          background: "url('/assets/images/Footer/footer_top_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-[.5] z-0"></div>
        <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full flex md:flex-row flex-col md:justify-between justify-center md:text-left text-center items-center mx-auto  relative z-10">
          <h1 className="xl:text-[38px] sm3:text-[28px] text-[23px] md:w-[80%] w-full font-bold font-poppins text-white! py-2 sm2:px-[15px] px-0 leading-[1.2]">
            YOU WANT TO SHOWCASE
            <br className="md:hidden flex" /> YOUR WEBSITE
          </h1>
          <div className="md:w-[20%] w-full flex md:justify-end justify-center">
            <Button
              text="Join Now"
              customClassName=""
              padding="xl:p-[14px_37px]! md:p-[13px_27px] sm3:p-[9px_25px] p-[6px_20px]"
              bgLinearGradient={true}
            />
          </div>
        </div>
      </div> */}
      <div
        className="relative"
        style={{
          background: "url('/assets/images/footer_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#110f0f",
        }}
      >
        <footer className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full items-center mx-auto md:p-[70px_0_30px] p-[50px_0_20px]">
          <div className="flex flex-wrap justify-between text-left">
            <div className="xl:w-1/4! lg:w-[33.33333%]! sm:w-[50%] w-full md:px-[15px]! sm:px-0 px-[15px] pb-[30px]">
              <div className="sm:w-40 w-[130px] h-auto mb-[30px] relative">
                <Link href={"/"}>
                  <Image
                    src={"/assets/icons/studybee_w.png"}
                    width={320}
                    height={73}
                    className="w-[148px] h-auto"
                    alt=""
                  />
                </Link>
              </div>
              <div className="">
                <p className="text-[15px] text-[#ffffffc0]! leading-6 mb-4">
                  StudyBee — We Create Ideas and Deliver Results
                </p>

                <h3 className="text-[15px] font-normal text-[#ffffffc0]! mb-2">
                  Office Location :
                </h3>
                <div className="pl-2.5">
                  <div className="flex items-center gap-[7px] group mb-[5px]">
                    <Image
                      src={"https://flagcdn.com/bd.svg"}
                      width={147}
                      height={88}
                      className="w-[27px] h-auto"
                      alt=""
                    />
                    <p className="text-[15px] text-[#ffffffc0]! group-hover:text-white! cursor-pointer transition-all duration-1000">
                      Bangladesh
                    </p>
                  </div>
                  <div className="flex items-center gap-[7px] group">
                    <Image
                      src={"https://flagcdn.com/us.svg"}
                      width={147}
                      height={88}
                      className="w-[27px] h-auto"
                      alt=""
                    />
                    <p className="text-[15px] text-[#ffffffc0]! group-hover:text-white! cursor-pointer transition-all duration-1000">
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[7px] mt-5">
                  <div className="w-8 h-8 leading-8 bg-transparent text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                    <MdEmail className="text-[14px]" />
                  </div>
                  <div className="w-8 h-8 leading-8 bg-transparent text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                    <FaYoutube className="text-[14px]" />
                  </div>
                  <div className="w-8 h-8 leading-8 bg-transparent text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                    <FaLinkedinIn className="text-[14px]" />
                  </div>
                  <div className="w-8 h-8 leading-8 bg-transparent text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                    <FaFacebookF className="text-[14px]" />
                  </div>
                  <div className="w-8 h-8 leading-8 bg-transparent text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                    <FaInstagram className="text-[14px]" />
                  </div>
                </div>
              </div>
            </div>
            {footerData.map((fData) => {
              return (
                <div
                  key={fData.id}
                  className={`${
                    fData.name === "StudyBee'"
                      ? "lg:w-[16.66667%]! sm:w-[50%] w-full"
                      : fData.name === "Test Centers"
                      ? "lg:w-[21%]! sm:w-[50%] w-full"
                      : "lg:w-[27%]! sm:w-[50%] w-full"
                  } px-[15px]`}
                >
                  <div className={`w-full pb-[30px]`}>
                    <h2 className="text-[24px] font-bold text-white! leading-[1.2] pb-2.5 m-[0_0_25px] font-poppins relative">
                      {fData.name}
                      <div className="absolute left-0 bottom-0 flex items-center gap-[5px]">
                        <div className="w-[15px] bg-primary h-1 rounded-[20px]"></div>
                        <div className="w-[45px] bg-primary h-1 rounded-[20px]"></div>
                      </div>
                    </h2>
                    <ul className="">
                      {fData.subLinks.map((fDLink) => {
                        return (
                          <li key={fDLink.id} className="">
                            <Link
                              href={fDLink.link}
                              className="flex items-center text-[#ffffffc0] hover:text-white transition-all duration-1000 p-[.5rem_0rem_.5rem_.9375rem] leading-5 capitalize relative"
                            >
                              <div className="absolute left-[-3px] -top-px h-full flex items-center">
                                <FaAngleRight className="text-[15px]" />
                              </div>
                              <h6 className="text-[15px] font-normal font-roboto">
                                {fDLink.name}
                              </h6>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className={`${
                      fData?.withOtherSection ? "" : "hidden"
                    } w-full pb-[30px]`}
                  >
                    <h2 className="text-[24px] font-bold text-white! leading-[1.2] pb-2.5 m-[0_0_25px] font-poppins relative">
                      {fData?.withOtherSection?.name}
                      <div className="absolute left-0 bottom-0 flex items-center gap-[5px]">
                        <div className="w-[15px] bg-primary h-1 rounded-[20px]"></div>
                        <div className="w-[45px] bg-primary h-1 rounded-[20px]"></div>
                      </div>
                    </h2>
                    <ul className="">
                      {fData?.withOtherSection?.subLinks.map((fD2Link) => {
                        return (
                          <li key={fD2Link.id} className="">
                            <Link
                              href={fD2Link.link}
                              className="flex items-center text-[#ffffffc0] hover:text-white transition-all duration-1000 p-[.5rem_0rem_.5rem_.9375rem] leading-5 capitalize relative"
                            >
                              <div className="absolute left-[-3px] -top-px h-full flex items-center">
                                <FaAngleRight className="text-[15px]" />
                              </div>
                              <h6 className="text-[15px] font-normal font-roboto">
                                {fD2Link.name}
                              </h6>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </footer>
      </div>
      <div className="w-full bg-[#1e1e1e] p-[15px_0] text-center font-roboto">
        <p className="text-[15px] text-[#ffffffa2]! leading-[1.6]">
          © <span className="text-white!">StudyBee</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
