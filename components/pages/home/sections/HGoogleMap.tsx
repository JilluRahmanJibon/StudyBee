import Link from "next/link";
import { IoMegaphone } from "react-icons/io5";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";

const HGoogleMap = () => {
  const GoogleMapData = [
    {
      id: 1,
      title: "Wari",
      location: "7 Folder Street (Wari Abed High School Building) Wari, Dhaka",
      number: "09610883388",
      email: "info@mentors.com.bd",
    },
    {
      id: 2,
      title: "Wari",
      location: "7 Folder Street (Wari Abed High School Building) Wari, Dhaka",
      number: "09610883388",
      email: "info@mentors.com.bd",
    },
    {
      id: 3,
      title: "Wari",
      location: "7 Folder Street (Wari Abed High School Building) Wari, Dhaka",
      number: "09610883388",
      email: "info@mentors.com.bd",
    },
    {
      id: 4,
      title: "Wari",
      location: "7 Folder Street (Wari Abed High School Building) Wari, Dhaka",
      number: "09610883388",
      email: "info@mentors.com.bd",
    },
    {
      id: 5,
      title: "Wari",
      location: "7 Folder Street (Wari Abed High School Building) Wari, Dhaka",
      number: "09610883388",
      email: "info@mentors.com.bd",
    },
  ];
  return (
    <div>
      <div className="w-full h-auto relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.884443175983!2d75.81853095!3d25.128214449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1615281171136!5m2!1sen!2sin"
          className="w-full h-full border-0 absolute left-0 top-0 z-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-full h-full bg-linear-to-r md:to-transparent to-[#afdf57c9] md:from-primaryHover from-[#afdf57c9] from-40%  relative z-1">
          <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full h-full mx-auto flex justify-start items-center">
            <div className="w-full pt-10 pb-[25px]">
              <div className="w-full md:text-left text-center pb-[15px]">
                <h2 className="sm2:text-[35px] text-[29px] text-white! font-medium font-poppins">
                  Find Us Here
                </h2>
              </div>
              <div className="md:w-[600px] w-full grid md:grid-cols-2 grid-cols-1">
                {GoogleMapData.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="w-[285px] h-fit mb-[15px] md:mx-0 mx-auto"
                    >
                      <Link
                        href={
                          "https://www.google.com/maps/place/Wari+Abed+High+School/@23.720267,90.415324,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755b85307512065:0x383b8cd77308ff75!8m2!3d23.7202621!4d90.4178989!16s%2Fg%2F1td2f837?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                        }
                        target="_blank"
                      >
                        <div className="w-full h-full p-[21px] rounded-[11px] font-poppins bg-white hover:-translate-y-1 shadow-[0px_0px_8px_0px_#00000014] transition-all duration-500">
                          <h3 className="text-[15px] text-black! font-normal pb-[3px]">
                            {card.title}
                          </h3>
                          <p className="text-[13px] mb-[5px]">
                            <span>
                              <MdOutlineShareLocation className="text-[17px] text-primaryHover inline -mt-px" />
                            </span>{" "}
                            {card.location}
                          </p>
                          <p className="text-[13px] mb-[5px]">
                            <span>
                              <IoMegaphone className="text-[16px] text-primaryHover inline -mt-[3px]" />
                            </span>{" "}
                            {card.number}
                          </p>
                          <p className="text-[13px]">
                            <span>
                              <MdEmail className="text-[15px] text-primaryHover inline -mt-[3px]" />
                            </span>{" "}
                            {card.email}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                <div className="w-[285px] h-fit mb-[15px] md:mx-0 mx-auto">
                  <Link href={"#OurOtherBranches"}>
                    <div className="w-full h-full p-[21px] rounded-[11px] font-poppins bg-white hover:-translate-y-1 shadow-[0px_0px_8px_0px_#00000014] transition-all duration-500">
                      <h3 className="text-[15px] text-black! font-normal pb-[3px]">
                        Others Branch
                      </h3>
                      <p className="text-[13px]">
                        {" "}
                        <span>
                          <MdOutlineShareLocation className="text-[17px] text-primaryHover inline -mt-px" />
                        </span>{" "}
                        See our other branches...
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HGoogleMap;
