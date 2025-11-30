import WebLogo from "@/public/WebLogo";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Button from "../ui-kit/Button";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      name: "OUR LINKS",
      subLinks: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Services", link: "/services" },
        { id: 3, name: "Portfolio", link: "/" },
        { id: 4, name: "Team", link: "/team" },
        { id: 5, name: "Pricing", link: "/pricing" },
        { id: 5, name: "Blog", link: "/blog-grid" },
        { id: 5, name: "Contact", link: "/contact-us" },
      ],
    },
    {
      id: 2,
      name: "OUR SERVICES",
      subLinks: [
        { id: 1, name: "Strategy & Research", link: "/" },
        { id: 2, name: "Web Development", link: "/" },
        { id: 3, name: "Web Solution", link: "/" },
        { id: 4, name: "Digital Marketing", link: "/" },
        { id: 5, name: "App Design", link: "/" },
      ],
    },
    {
      id: 3,
      name: "OTHER LINKS",
      subLinks: [
        { id: 1, name: "FAQ", link: "/" },
        { id: 2, name: "Portfolio", link: "/" },
        { id: 3, name: "Privacy Policy", link: "/" },
        { id: 4, name: "Terms & Conditions", link: "/" },
        { id: 5, name: "Support", link: "/" },
      ],
    },
  ];
  return (
    <div>
      <div
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
            YOU WANT TO SHOWCASE<br className="md:hidden flex"/> YOUR WEBSITE
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
      </div>
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
        <footer className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full items-center mx-auto flex flex-col md:p-[70px_0_30px] p-[50px_0_20px]">
          <div className="w-full md:px-[15px]! sm:px-0 px-[15px] mb-[30px]">
            <div className="w-full flex md:flex-row flex-wrap items-center justify-between border-b border-[#ffffff24] pb-2.5">
              <div className="xl:w-[41.66667%]! md:w-[33.33333%] w-full mb-2.5">
                <div className="sm:w-40 w-[140px] h-[50px] flex items-center relative">
                  <Link href={"/"}>
                    <Image
                      src={"/assets/icons/logo_w.png"}
                      width={158}
                      height={28}
                      className="w-[158px] h-auto"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="xl:w-[25%]! md:w-[33.33333%] sm:w-[50%] w-full flex items-center mb-2.5 md:px-[15px] px-0">
                <div className="w-20 h-20 flex justify-center items-center mr-2.5">
                  <div className="lg:w-[60px]! w-[50px] h-[70px] relative">
                    <Image
                      src="/assets/images/Footer/footer_icon_email.png"
                      fill
                      className="object-contain"
                      alt="Picture of Footer Icon"
                    />
                  </div>
                </div>
                <div className="font-roboto">
                  <h3 className="text-[16px] leading-[1.6] text-[#ffffffc0]! font-semibold">
                    +01618047276
                  </h3>
                  <p className="xl:text-[16px] text-[15px] text-[#ffffffc0]!">
                    info@example.com
                  </p>
                </div>
              </div>
              <div className="md:w-[33.33333%]! sm:w-[50%] w-full flex items-center mb-2.5 md:pl-[15px] pl-0">
                <div className="min-w-20 h-20 flex justify-center items-center mr-2.5">
                  <div className="lg:w-[60px]! md:w-[50px] w-[60px] h-[70px] relative">
                    <Image
                      src="/assets/images/Footer/footer_icon_map.png"
                      fill
                      className="object-contain"
                      alt="Picture of Footer Icon"
                    />
                  </div>
                </div>
                <div className="font-roboto">
                  <p className="xl:text-[16px] text-[15px] text-[#ffffffc0]!">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap text-left">
              <div className="xl:w-1/4! lg:w-[33.33333%]! sm:w-[50%] w-full md:px-[15px]! sm:px-0 px-[15px] pb-[30px]">
                <h2 className="text-[24px] font-bold text-white! leading-[1.2] pb-2.5 m-[0_0_30px] font-poppins relative">
                  ABOUT US
                  <div className="absolute left-0 bottom-0 flex items-center gap-[5px]">
                    <div className="w-[15px] bg-primary h-1 rounded-[20px]"></div>
                    <div className="w-[45px] bg-primary h-1 rounded-[20px]"></div>
                  </div>
                </h2>
                <div>
                  <p className="text-[15px] text-[#ffffffc0]! leading-6 mb-5">
                    StudyBee — We Create Ideas and Deliver Results
                  </p>
                  <div className="flex items-center gap-[7px]">
                    <div className="w-8 h-8 leading-8 bg-transparent hover:text-black text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                      <FaFacebookF className="text-[14px]" />
                    </div>
                    <div className="w-8 h-8 leading-8 bg-transparent hover:text-black text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                      <FaInstagram className="text-[14px]" />
                    </div>
                    <div className="w-8 h-8 leading-8 bg-transparent hover:text-black text-white border border-white hover:border-transparent rounded-full flex justify-center items-center transition-all duration-1000 cursor-pointer  hover:bg-[linear-gradient(to_right,#dee023_0%,#b0df57_51%,#dee023_100%)] bg-size-[200%] ease-in-out bg-right hover:bg-left">
                      <FaTwitter className="text-[14px]" />
                    </div>
                  </div>
                </div>
              </div>
              {footerData.map((fData) => {
                return (
                  <div
                    key={fData.id}
                    className={`${
                      fData.name === "OUR LINKS"
                        ? "xl:w-1/4! lg:w-[16.66667%]! sm:w-[50%] w-full"
                        : "lg:w-1/4! sm:w-[50%] w-full"
                    } px-[15px] pb-[30px]`}
                  >
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
                );
              })}
            </div>
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
