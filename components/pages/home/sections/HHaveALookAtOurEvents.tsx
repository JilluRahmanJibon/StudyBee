"use client";
import Button from "@/components/shared/ui-kit/Button";
import Image from "next/image";
import { useState } from "react";
import { IoMdStopwatch } from "react-icons/io";
import { MdOutlineShareLocation } from "react-icons/md";

const HHaveALookAtOurEvents = () => {
  const [activeNav, setActiveNav] = useState("All Events");
  const HaveALookAtOurEventsNavData = [
    { id: 1, title: "All Events" },
    { id: 2, title: "Upcoming Events" },
  ];

  return (
    <div>
      <section className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto font-poppins! lg:pb-[85px] pb-[50px]">
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
                    className={`lg:text-[14px] sm2:text-[13px] text-[11px] sm4:px-[21px] px-[11px] sm4:py-2 py-[5px] ${
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

          <div className="w-full flex justify-center items-center mt-[30px] sm2:px-[15px] px-0">

            <div className="w-[300px] rounded-[15px] bg-white shadow-[0px_0px_8px_0px_#00000014]">
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
                  StudyBee' Study Abroad, Banani Branch Taneem Square (7th Fl),
                  158/E Kamal Ataturk Avenue, Banani, Dhaka-1213
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

          </div>
        </main>
      </section>
    </div>
  );
};

export default HHaveALookAtOurEvents;
