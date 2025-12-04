import { FaBookOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";

const OurOtherBranches = () => {
  const OurOtherBranchesData = [
    {
      id: 1,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 2,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 3,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 4,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 5,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 6,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 7,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 8,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
  ];
  const OverseasOffice = [
    {
      id: 1,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
    {
      id: 2,
      title: "Noakhali",
      location: `StudyBee' Building (Opposite Niramoy Hospital), Maijdee, Noakhali`,
      education: "01321207486",
      email: "info@StudyBee.com.bd",
    },
  ];
  return (
    <div>
      {/* Our Other Branches */}
      <section id="OurOtherBranches" className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] lg:pt-[70px] pt-[50px] font-poppins! lg:pb-[85px] pb-[50px]">
        <div className={`w-full flex justify-center text-center xl:mb-10 mb-[30px]`}>
          <h2 className="xl:text-[55px]! lg:text-[40px]! sm2:text-[35px] text-[25px] text-black! font-bold leading-[1.2] mb-2">
            Our Other Branches
          </h2>
        </div>

        <main className="w-full flex flex-wrap sm2:gap-[25px] gap-5 justify-center">
          {OurOtherBranchesData.map((card) => {
            return (
              <div
                key={card.id}
                className="sm3:w-[365px] w-full p-0.5 bg-linear3 bg-size-[200%] bg-left hover:bg-right group rounded-[15px]"
              >
                <div className="w-full h-full text-[#000000d1]! group-hover:text-white! bg-white group-hover:bg-transparent sm2:p-[25px] p-[15px] rounded-[13px] transition-all duration-1000">
                  <h1 className="sm2:text-[21px] text-[17px] text-[#000000d1]! group-hover:text-white! font-normal font-poppins mb-[7px] transition-all duration-1000">
                    {card.title}
                  </h1>

                  <div className="flex mb-[7px]">
                    <div className="sm2:w-[19px] w-[17px] sm2:min-w-[19px] min-w-[17px] pt-1">
                      <MdOutlineShareLocation className="sm2:text-[18px] text-[14px] text-primaryHover group-hover:text-white transition-all duration-1000 -mt-0.5" />
                    </div>
                    <p className="sm2:text-[14px] text-[13px] group-hover:text-[#ffffffd7]! transition-all duration-1000">
                      {card.location}
                    </p>
                  </div>
                  <div className="flex items-center mb-[7px]">
                    <div className="sm2:w-[19px] w-[17px] sm2:min-w-[19px] min-w-[17px]">
                      <IoBookOutline className="sm2:text-[15px] text-[13px] text-primaryHover group-hover:text-white transition-all duration-1000" />
                    </div>
                    <p className="sm2:text-[14px] text-[13px] group-hover:text-[#ffffffd7]! transition-all duration-1000">
                      <span className="group-hover:text-[#ffffffd7]! font-medium mr-[5px] transition-all duration-1000">
                        Education:
                      </span>
                      {card.education}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="sm2:w-[19px] w-[17px] sm2:min-w-[19px] min-w-[17px]">
                      <HiOutlineMail className="sm2:text-[17px] text-[15px] text-primaryHover group-hover:text-white -ml-px transition-all duration-1000" />
                    </div>
                    <p className="sm2:text-[14px]! text-[13px] group-hover:text-[#ffffffd7]! transition-all duration-1000">
                      <span className="group-hover:text-[#ffffffd7]! font-medium mr-[5px] transition-all duration-1000">
                        Email:
                      </span>
                      {card.email}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </section>
      {/* Overseas Office */}
      <section className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] font-poppins! lg:pb-[85px] pb-[50px]">
        <div className={`w-full flex justify-center text-center xl:mb-10 mb-[30px]`}>
          <h2 className="xl:text-[55px]! lg:text-[40px]! sm2:text-[35px] text-[25px] text-black! font-bold leading-[1.2] mb-2">
            Overseas Office
          </h2>
        </div>

        <main className="w-full flex flex-wrap sm2:gap-[25px] gap-5 justify-center">
          {OverseasOffice.map((card) => {
            return (
              <div
                key={card.id}
                className="sm3:w-[365px] w-full p-0.5 bg-linear3 bg-size-[200%] bg-left hover:bg-right group rounded-[15px]"
              >
                <div className="w-full h-full text-[#000000d1]! group-hover:text-white! bg-white group-hover:bg-transparent sm2:p-[25px] p-[15px] rounded-[13px] transition-all duration-1000">
                  <h1 className="sm2:text-[21px] text-[17px] text-[#000000d1]! group-hover:text-white! font-normal font-poppins mb-[7px] transition-all duration-1000">
                    {card.title}
                  </h1>

                  <div className="flex mb-[7px]">
                    <div className="sm2:w-[19px] w-[17px] sm2:min-w-[19px] min-w-[17px] pt-1">
                      <MdOutlineShareLocation className="sm2:text-[18px] text-[14px] text-primaryHover group-hover:text-white transition-all duration-1000 -mt-0.5" />
                    </div>
                    <p className="sm2:text-[14px] text-[13px] group-hover:text-[#ffffffd7]! transition-all duration-1000">
                      {card.location}
                    </p>
                  </div>
                  <div className="flex items-center mb-[7px]">
                    <div className="sm2:w-[19px] w-[17px] sm2:min-w-[19px] min-w-[17px]">
                      <IoBookOutline className="sm2:text-[15px] text-[13px] text-primaryHover group-hover:text-white transition-all duration-1000" />
                    </div>
                    <p className="sm2:text-[14px] text-[13px] group-hover:text-[#ffffffd7]! transition-all duration-1000">
                      <span className="group-hover:text-[#ffffffd7]! font-medium mr-[5px] transition-all duration-1000">
                        Education:
                      </span>
                      {card.education}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="sm2:w-[19px] w-[17px] sm2:min-w-[19px] min-w-[17px]">
                      <HiOutlineMail className="sm2:text-[17px] text-[15px] text-primaryHover group-hover:text-white -ml-px transition-all duration-1000" />
                    </div>
                    <p className="sm2:text-[14px]! text-[13px] group-hover:text-[#ffffffd7]! transition-all duration-1000">
                      <span className="group-hover:text-[#ffffffd7]! font-medium mr-[5px] transition-all duration-1000">
                        Email:
                      </span>
                      {card.email}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </section>
    </div>
  );
};

export default OurOtherBranches;
