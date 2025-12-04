"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaChevronDown,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Button from "../ui-kit/Button";
import { usePathname } from "next/navigation";

// Second level submenu
type SecondSubNavItem = {
  id: number;
  navName: string;
  link: string;
};

// First level submenu (optional secondSubNav)
type SubNavItem = {
  id: number;
  navName: string;
  link?: string; // optional because some items have secondSubNav instead of link
  secondSubNav?: SecondSubNavItem[];
};

// Main Navbar type
type NavbarItem = {
  id: number;
  navName: string;
  link?: string; // Home has a link, others don't
  subNav?: SubNavItem[];
};

// Whole Navbar Array type
type NavbarAPIType = NavbarItem[];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const NavbarAPI: NavbarAPIType = [
    { id: 1, navName: "Home", link: "/" },
    {
      id: 2,
      navName: "Courses",
      subNav: [
        { id: 1, navName: "Batch Schedule", link: "" },
        { id: 2, navName: "Course Fees", link: "" },
        { id: 3, navName: "IELTS", link: "" },
        { id: 4, navName: "Spoken English", link: "" },
        { id: 5, navName: "Advanced Writing", link: "" },
        { id: 6, navName: "Grammar & Writing", link: "" },
        { id: 7, navName: "After SSC English", link: "" },
        { id: 8, navName: "GED", link: "" },
        { id: 9, navName: "IBA-BBA", link: "" },
        { id: 10, navName: "IBA-MBA", link: "" },
        { id: 11, navName: "Kid's English", link: "" },
        { id: 12, navName: "PTE", link: "" },
        { id: 13, navName: "SAT", link: "" },
      ],
    },
    {
      id: 3,
      navName: "Test Centers",
      subNav: [
        {
          id: 1,
          navName: "IELTS",
          secondSubNav: [
            { id: 1, navName: "Kalabagan", link: "" },
            { id: 2, navName: "Uttara - 1", link: "" },
            { id: 3, navName: "Uttara - 2", link: "" },
            { id: 4, navName: "Mirpur", link: "" },
            { id: 5, navName: "Banani", link: "" },
            { id: 6, navName: "Wari", link: "" },
          ],
        },
        {
          id: 2,
          navName: "GED",
          secondSubNav: [
            { id: 1, navName: "Kalabagan", link: "" },
            { id: 2, navName: "Chittagong", link: "" },
          ],
        },
        {
          id: 3,
          navName: "PTE",
          secondSubNav: [{ id: 1, navName: "Chittagong", link: "" }],
        },
      ],
    },
    {
      id: 4,
      navName: "Study Abroad",
      subNav: [
        { id: 1, navName: "Course Finder", link: "" },
        { id: 2, navName: "USA", link: "" },
        { id: 3, navName: "Australia", link: "" },
        { id: 4, navName: "Malaysia", link: "" },
        { id: 5, navName: "UK", link: "" },
        { id: 6, navName: "Canada", link: "" },
        { id: 7, navName: "Japan", link: "" },
        { id: 8, navName: "New Zealand", link: "" },
        { id: 9, navName: "Sweden", link: "" },
        { id: 10, navName: "Denmark", link: "" },
        { id: 11, navName: "Ireland", link: "" },
      ],
    },
    {
      id: 5,
      navName: "Online Courses",
      subNav: [
        { id: 1, navName: "Live Courses", link: "" },
        { id: 2, navName: "Tests", link: "" },
        { id: 3, navName: "Recorded Courses", link: "" },
      ],
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [normalSlide, setNormalSlide] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNormalSlide(false); // normal navbar moves up
        setIsSticky(true); // sticky slides in
      } else {
        setNormalSlide(true); // normal navbar slides back
        setIsSticky(false); // sticky slides up
      }
    };
    window.addEventListener("scroll", handleScroll);
    // ✅ Call handleScroll once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showOneMobItem, setshowOneMobItem] = useState("");
  const [showOneMobSubItem, setshowOneMobSubItem] = useState("");
  const [showOneMobSubSecondItem, setshowOneMobSubSecondItem] = useState("");
  const handleMobileNavItems = (name: string) => {
    if (name === showOneMobSubItem) {
      setshowOneMobItem("");
    } else {
      setshowOneMobItem(name);
    }
  };
  const handleMobileSubNavItems = (name: string) => {
    if (name === showOneMobSubItem) {
      setshowOneMobSubItem("");
    } else {
      setshowOneMobSubItem(name);
    }
  };

  // Default Active Link
  const handleActiveLinks = () => {
    for (const mNav of NavbarAPI) {
      // --- Level 1 ---
      if (mNav.link === pathname) {
        setshowOneMobItem(mNav.navName);
        return;
      }

      // Skip if no subNav
      if (!mNav.subNav) continue;

      for (const subN of mNav.subNav) {
        // --- Level 2 ---
        if (subN.link === pathname) {
          setshowOneMobItem(mNav.navName); // parent
          setshowOneMobSubItem(subN.navName); // sub menu
          return;
        }

        // Skip if no 2nd sub nav
        if (!subN.secondSubNav) continue;

        for (const secondNav of subN.secondSubNav) {
          // --- Level 3 ---
          if (secondNav.link === pathname) {
            setshowOneMobItem(mNav.navName); // MAIN parent
            setshowOneMobSubItem(subN.navName); // SUB parent
            setshowOneMobSubSecondItem(secondNav.navName); // ACTIVE 2nd item
            return;
          }
        }
      }
    }
  };
  useEffect(() => {
    handleActiveLinks();
  }, [pathname]);

  return (
    <>
      {/* Normal navbar */}
      <div
        className={`bg-defaultBG ${
          normalSlide ? "" : " shadow-[0px_0px_5px_#7c7c7c27]"
        } ${
          isSticky
            ? " fixed top-0 left-0 z-100 w-full transition-all duration-[0.9s] StickyNavbarAnimation"
            : "relative z-100"
        }`}
      >
        <div
          className={`xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto md:px-[15px] sm:px-0 px-[15px] flex justify-between items-center  ${
            normalSlide
              ? "xl:h-[132px]! sm:h-[90px] h-[75px] transition-all duration-1000"
              : "sm:h-[90px] h-[75px]"
          } `}
        >
          <Link href={"/"}>
            <div className="sm:w-40 w-[130px] h-auto relative">
              <Image
                src={"/assets/icons/studybee_b.png"}
                width={320}
                height={73}
                className="w-[148px] h-auto"
                alt=""
              />
            </div>
          </Link>
          <div className="flex items-center">
            <ul className="lg:flex hidden items-center">
              {NavbarAPI.map((nav) => {
                const isSecondSubActive =
                  nav.subNav?.some((sub) =>
                    sub?.secondSubNav?.some(
                      (subNav) => subNav?.link === pathname
                    )
                  ) || false;
                const isSubActive =
                  nav.subNav?.some((sub) => sub?.link === pathname) || false;

                const isActive = isSecondSubActive || isSubActive;

                return (
                  <li
                    key={nav.id}
                    className={`text-[15px] text-black group font-medium ${
                      isSticky
                        ? "xl:p-[35px_15px] p-[35px_12px]"
                        : "xl:p-[55px_15px] p-[35px_12px]"
                    } cursor-pointer transition relative nav_manu`}
                  >
                    {nav?.subNav ? (
                      <p className="flex items-center gap-1.5 ">
                        <span
                          className={`nav_manu_text ${
                            isActive
                              ? "text-primaryHover!"
                              : "group-hover:text-primaryHover!"
                          }`}
                        >
                          {nav.navName}
                        </span>
                        <FaChevronDown
                          className={`text-[10px] nav_manu_text_icon ${
                            isActive ? "text-primaryHover!" : "text-defaultText"
                          }`}
                        />
                      </p>
                    ) : (
                      <Link
                        href={nav?.link ? nav?.link : ""}
                        className="flex items-center gap-1.5 "
                      >
                        <span
                          className={`nav_manu_text ${
                            isActive || nav?.link === pathname
                              ? "text-primaryHover!"
                              : "group-hover:text-primaryHover!"
                          } `}
                        >
                          {nav.navName}
                        </span>
                      </Link>
                    )}

                    <ul
                      className={`absolute left-0 ${
                        isSticky ? "top-[90px]" : "xl:top-[132px] top-[90px]"
                      } w-[200px] ${
                        nav?.subNav &&
                        nav?.subNav?.length > 7 &&
                        "h-[307px] min-h-[307px] overflow-y-auto"
                      } py-[5px] 
                    ${nav?.subNav ? "lg:flex hidden" : "hidden"}
                     flex-col bg-defaultBG shadow-[0px_2px_5px_#7c7c7c27] 
                      [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                    [&::-webkit-scrollbar-thumb:hover]:cursor-default nav_manu_subnav_container`}
                    >
                      {/* Sub Nav Item */}
                      {nav?.subNav?.map((sNav) => {
                        let secondSubActive =
                          sNav?.secondSubNav?.some(
                            (secondSub) => secondSub?.link === pathname
                          ) || false;

                        return (
                          <div key={sNav.id}>
                            {sNav?.link ? (
                              // WithOut Second Sub Nav
                              <Link href={sNav?.link ? sNav?.link : ""}>
                                <li
                                  className={`text-[15px] font-medium p-[10px_25px] relative transition flex items-center  ${
                                    pathname === sNav.link
                                      ? "text-primaryHover! bg-[#f3f3f3]!"
                                      : "text-defaultText"
                                  } nav_manu_subnav`}
                                >
                                  <div className="w-fit h-full flex items-center">
                                    <span
                                      className={`h-px -mt-1 ${
                                        pathname === sNav.link
                                          ? "w-2.5!"
                                          : "w-0"
                                      }  bg-primaryHover nav_manu_subnav_hover_effect`}
                                    ></span>
                                  </div>
                                  {sNav.navName}
                                </li>
                              </Link>
                            ) : (
                              // With Second Sub Nav
                              <li
                                className={`text-[15px] font-medium p-[10px_25px] relative transition flex items-center justify-between ${
                                  secondSubActive
                                    ? "text-primaryHover! bg-[#f3f3f3]!"
                                    : "text-defaultText!"
                                } relative nav_manu_subnav`}
                              >
                                <div className="w-full flex items-center">
                                  <div className="w-fit h-full flex items-center">
                                    <span
                                      className={`h-px -mt-1 ${
                                        secondSubActive ? "w-2.5!" : "w-0"
                                      }  bg-primaryHover nav_manu_subnav_hover_effect`}
                                    ></span>
                                  </div>
                                  {sNav.navName}
                                </div>
                                <FaChevronRight
                                  className={`text-[10px] nav_manu_subnav_text_icon ${
                                    secondSubActive
                                      ? "text-primaryHover!"
                                      : "text-defaultText"
                                  }`}
                                />

                                {/* Second Sub Nev */}
                                <ul
                                  className={`absolute left-[200px] top-[5px] w-[200px] ${
                                    sNav?.secondSubNav &&
                                    sNav?.secondSubNav?.length > 7 &&
                                    "h-[307px] min-h-[307px] overflow-y-auto"
                                  } py-[5px] bg-defaultBG shadow-[0px_2px_5px_#7c7c7c27] ${
                                    sNav?.secondSubNav
                                      ? "lg:flex hidden"
                                      : "hidden"
                                  } flex-col 
                                  [&::-webkit-scrollbar]:w-1.5
                                [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:bg-gray-300
                                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                                [&::-webkit-scrollbar-thumb:hover]:cursor-default nav_manu_secondsubnav_container`}
                                >
                                  {sNav?.secondSubNav?.map((secondSub) => {
                                    return (
                                      <Link
                                        href={
                                          secondSub?.link ? secondSub?.link : ""
                                        }
                                        key={secondSub.id}
                                      >
                                        <li
                                          className={`text-[15px] font-medium p-[10px_25px] relative transition flex items-center  ${
                                            pathname === secondSub?.link
                                              ? "text-primaryHover! bg-[#f3f3f3]!"
                                              : "text-defaultText"
                                          } nav_manu_second_subnav`}
                                        >
                                          <div className="w-fit h-full flex items-center">
                                            <span
                                              className={`h-px -mt-1 ${
                                                pathname === secondSub.link
                                                  ? "w-2.5!"
                                                  : "w-0"
                                              }  bg-primaryHover nav_manu_second_subnav_hover_effect`}
                                            ></span>
                                          </div>
                                          {secondSub.navName}
                                        </li>
                                      </Link>
                                    );
                                  })}
                                </ul>
                              </li>
                            )}
                          </div>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>

            <Button
              text="Join Free Courses"
              link=""
              padding="xl:p-[14px_37px]! lg:p-[14px_16px]! md:p-[12px_30px] p-[9px_20px]"
              customClassName="sm:w-fit w-full ml-5 sm:flex hidden"
              bgLinearGradient={true}
            />

            <button className="ml-[15px] lg:hidden flex">
              <LuAlignJustify
                className={`text-[25px] text-defaultText cursor-pointer ${
                  mobileNav ? "hidden" : ""
                }`}
                onClick={() => {
                  setMobileNav(!mobileNav);
                }}
              />
              <RxCross2
                className={`text-[25px] text-defaultBG relative z-52 ${
                  mobileNav ? "" : "hidden"
                }`}
                onClick={() => {
                  setMobileNav(!mobileNav);
                  handleActiveLinks();
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full ${
          normalSlide ? "h-0" : "xl:h-[90px]! sm:h-[90px] h-[75px]"
        }`}
      ></div>

      {/* Mobile Navbar */}
      <div
        className={`fixed w-full h-screen inset-0 flex justify-start bg-[#00000075] z-100 ${
          mobileNav ? "lg:hidden flex" : "hidden"
        }`}
      >
        <div className="relative w-full h-full">
          <div
            className={`w-[280px] h-full absolute left-0 top-0 z-51 bg-defaultBG shadow-[3px_0px_30px_0px_#272c2f] overflow-y-auto`}
          >
            <div className="sm:py-2.5 py-[5px]">
              <div className="sm:w-40 w-[130px] h-auto relative m-[25px_20px]">
                <Image
                  src={"/assets/icons/studybee_b.png"}
                  width={158}
                  height={28}
                  className="w-[158px] h-auto"
                  alt=""
                />
              </div>
            </div>
            <ul className="px-5">
              {NavbarAPI.map((mNav) => {
                const subNavLenght = mNav.subNav?.length;

                return (
                  <div key={mNav.id}>
                    {mNav?.subNav ? (
                      <li
                        className={`text-[14px] font-medium py-2 leading-[30px] flex items-center justify-between gap-1.5 cursor-pointer transition group relative`}
                        onClick={() => {
                          handleMobileNavItems(mNav.navName);
                        }}
                      >
                        <span
                          className={`${
                            showOneMobItem === mNav.navName
                              ? "text-primaryHover!"
                              : "group-hover:text-primaryHover!"
                          } transition-all duration-1000`}
                        >
                          {mNav.navName}
                        </span>

                        <div
                          className={`w-[30px] h-[30px] bg-linear3 bg-size-[200%] ${
                            showOneMobItem === mNav.navName
                              ? "bg-left"
                              : "group-hover:bg-left bg-right"
                          } text-white rounded-md flex items-center justify-center text-[10px] transition-all duration-1000 ${
                            mNav?.subNav ? "" : "hidden"
                          }`}
                        >
                          <FaChevronRight
                            className={`text-[13px] ${
                              showOneMobItem === mNav.navName ? "hidden" : ""
                            } `}
                          />
                          <FaChevronDown
                            className={`text-[13px] ${
                              showOneMobItem === mNav.navName ? "" : "hidden"
                            }  `}
                          />
                        </div>
                      </li>
                    ) : (
                      <Link href={mNav?.link || "/"}>
                        <li
                          className={`text-[14px] font-medium py-2 leading-[30px] flex items-center justify-between gap-1.5 cursor-pointer transition group relative`}
                          onClick={() => {
                            handleMobileNavItems(mNav.navName);
                            if (!mNav?.subNav) {
                              setMobileNav(!mobileNav);
                            }
                            handleActiveLinks();
                          }}
                        >
                          <span
                            className={` ${
                              mNav?.link === pathname
                                ? "text-primaryHover!"
                                : "group-hover:text-primaryHover!"
                            } transition-all duration-1000`}
                          >
                            {mNav.navName}
                          </span>
                        </li>
                      </Link>
                    )}

                    <div
                      className={`w-full h-px bg-[#838383] opacity-[0.1] ${
                        NavbarAPI.length === mNav.id ? "hidden" : ""
                      }`}
                    ></div>
                    {/* Sub Navbar */}
                    <ul
                      className={` ${
                        mNav?.subNav
                          ? `${
                              showOneMobItem === mNav.navName
                                ? "flex"
                                : "hidden"
                            }`
                          : `hidden`
                      } flex-col`}
                    >
                      {mNav?.subNav?.map((subN) => {
                        return (
                          <div key={subN.id}>
                            {subN?.link ? (
                              <>
                                <div
                                  className={`w-full h-px bg-[#838383] opacity-[0.1] ${
                                    NavbarAPI.length === mNav.id ? "" : "hidden"
                                  }`}
                                ></div>
                                <Link
                                  href={subN?.link ? subN?.link : ""}
                                  onClick={() => {
                                    setMobileNav(!mobileNav);
                                    handleActiveLinks();
                                  }}
                                >
                                  <li className="text-[14px] font-medium pl-[15px] py-2 leading-[30px] relative transition flex items-center group">
                                    <span
                                      className={`h-px ${
                                        subN?.link === pathname
                                          ? "w-2.5! mr-[5px]"
                                          : "w-0 group-hover:w-2.5! mr-0 group-hover:mr-[5px]"
                                      } transition-all duration-1000 bg-primaryHover`}
                                    ></span>
                                    <span
                                      className={`${
                                        subN?.link === pathname
                                          ? "text-primaryHover!"
                                          : "group-hover:text-primaryHover!"
                                      } transition-all duration-1000`}
                                    >
                                      {subN.navName}
                                    </span>
                                  </li>
                                </Link>
                                <div
                                  className={`w-full h-px bg-[#838383] opacity-[0.1] `}
                                ></div>
                              </>
                            ) : (
                              <>
                                <li
                                  className={`text-[14px] font-medium pl-[15px] py-2 leading-[30px] flex items-center justify-between gap-1.5 cursor-pointer transition group relative`}
                                  onClick={() => {
                                    if (subN.navName !== showOneMobSubItem) {
                                      handleMobileSubNavItems(subN.navName);
                                    }
                                  }}
                                >
                                  <div className="flex items-center">
                                    <span
                                      className={`h-px -mt-1 ${
                                        showOneMobSubItem === subN.navName
                                          ? "w-2.5! mr-[5px]"
                                          : "w-0 group-hover:w-2.5 mr-0 group-hover:mr-[5px]"
                                      } bg-primaryHover transition-all duration-1000`}
                                    ></span>
                                    <span
                                      className={`${
                                        showOneMobSubItem === subN.navName
                                          ? "text-primaryHover!"
                                          : "group-hover:text-primaryHover!"
                                      } transition-all duration-1000`}
                                    >
                                      {subN.navName}
                                    </span>
                                  </div>

                                  <div
                                    className={`w-[30px] h-[30px] bg-linear3 bg-size-[200%] ${
                                      showOneMobSubItem === subN.navName
                                        ? "bg-left"
                                        : "group-hover:bg-left bg-right"
                                    } text-white rounded-md flex items-center justify-center text-[10px] ${
                                      mNav?.subNav ? "" : "hidden"
                                    } transition-all duration-1000`}
                                  >
                                    <FaChevronRight
                                      className={`text-[13px] ${
                                        showOneMobSubItem === subN.navName
                                          ? "hidden"
                                          : ""
                                      } `}
                                    />
                                    <FaChevronDown
                                      className={`text-[13px] ${
                                        showOneMobSubItem === subN.navName
                                          ? ""
                                          : "hidden"
                                      }  `}
                                    />
                                  </div>
                                </li>

                                <div
                                  className={`w-full h-px bg-[#838383] opacity-[0.1] ${
                                    NavbarAPI.length === mNav.id ? "hidden" : ""
                                  }`}
                                ></div>
                              </>
                            )}

                            {/* Second Nav */}
                            {subN.secondSubNav?.map((secondSub) => {
                              return (
                                <div
                                  className={`${
                                    showOneMobSubItem === subN.navName
                                      ? ``
                                      : `hidden`
                                  }`}
                                  key={secondSub.id}
                                >
                                  <Link
                                    href={
                                      secondSub?.link ? secondSub?.link : ""
                                    }
                                    onClick={() => {
                                      setMobileNav(!mobileNav);
                                      handleActiveLinks();
                                    }}
                                  >
                                    <li className="text-[14px] font-medium pl-[30px] py-2 leading-[30px] relative transition flex items-center group">
                                      <span
                                        className={`h-px ${
                                          secondSub?.link === pathname
                                            ? "w-2.5! mr-[5px]"
                                            : "w-0 group-hover:w-2.5! mr-0 group-hover:mr-[5px]"
                                        } transition-all duration-1000 bg-primaryHover`}
                                      ></span>
                                      <span
                                        className={`${
                                          secondSub?.link === pathname
                                            ? "text-primaryHover!"
                                            : "group-hover:text-primaryHover!"
                                        }  transition-all duration-1000`}
                                      >
                                        {secondSub.navName}
                                      </span>
                                    </li>
                                  </Link>
                                  <div
                                    className={`w-full h-px bg-[#838383] opacity-[0.1] ${
                                      subNavLenght === subN.id ? "hidden" : ""
                                    }`}
                                  ></div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
            <div className="pt-[30px] pb-5 flex items-center justify-center">
              <div className="w-10 h-10 leading-[38px] rounded-full text-white bg-linear3 bg-size-[200%] bg-left hover:bg-right flex justify-center items-center mx-1 cursor-pointer transition-all duration-1000">
                <Link href={"facebook.com"} target="_blank">
                  <FaFacebookF className="text-[15px]" />
                </Link>
              </div>
              <div className="w-10 h-10 leading-[38px] rounded-full text-white bg-linear3 bg-size-[200%] bg-left hover:bg-right flex justify-center items-center mx-1 cursor-pointer transition-all duration-1000">
                <Link href={"x.com"} target="_blank">
                  <FaTwitter className="text-[15px]" />
                </Link>
              </div>
              <div className="w-10 h-10 leading-[38px] rounded-full text-white bg-linear3 bg-size-[200%] bg-left hover:bg-right flex justify-center items-center mx-1 cursor-pointer transition-all duration-1000">
                <Link href={"linkedin.com"} target="_blank">
                  <FaLinkedinIn className="text-[15px]" />
                </Link>
              </div>
              <div className="w-10 h-10 leading-[38px] rounded-full text-white bg-linear3 bg-size-[200%] bg-left hover:bg-right flex justify-center items-center mx-1 cursor-pointer transition-all duration-1000">
                <Link href={"instagram.com"} target="_blank">
                  <FaInstagram className="text-[15px]" />
                </Link>
              </div>
            </div>
          </div>
          {/* Cross Button */}
          <div className="absolute right-0 top-0 w-full flex justify-center">
            <div
              className={`xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full sm:h-[90px] h-[75px] flex justify-end items-center mx-auto md:px-[15px] sm:px-0 px-[15px] `}
            >
              <RxCross2
                className={`text-[25px] text-[#ffffff] relative z-52 cursor-pointer ${
                  mobileNav ? "" : "hidden"
                }`}
                onClick={() => {
                  setMobileNav(!mobileNav);
                  handleActiveLinks();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
