"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/ui-kit/Button";
import { useEffect, useRef, useState } from "react";

const HHero = () => {
  const [showAnimationInBannerImage, setShowAnimationInBannerImage] =
    useState(true);
  const showAnimationInBannerImageChange = useRef(1);
  const MainBannerChangeNumber = 3; // or 3

  useEffect(() => {
    const animationDuration = 2000;
    const intervalDelay = 5000;

    const triggerAnimation = () => {
      // Turn OFF first (this will run after the initial animation)
      setShowAnimationInBannerImage(false);

      // Re-enable the animation on the next tick
      setTimeout(() => {
        setShowAnimationInBannerImage(true);
        setTimeout(
          () => setShowAnimationInBannerImage(false),
          animationDuration
        );
      }, 20);
    };

    const interval = setInterval(() => {
      // Update banner index
      if (showAnimationInBannerImageChange.current >= MainBannerChangeNumber) {
        showAnimationInBannerImageChange.current = 1;
      } else {
        showAnimationInBannerImageChange.current++;
      }

      triggerAnimation();
    }, intervalDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-[200px]">
      {/* Main Contant */}
      <section className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto h-auto px-[15px] 2xl:pt-[50px]! lg:pt-10! sm:pt-[30px] pt-5 flex lg:flex-row flex-wrap justify-between lg:items-start items-center font-poppins! sm:pb-0 pb-[30px]">
        <div className="lg:w-[50%] w-full lg:pb-0 sm:pb-[50px] pb-10">
          <h1 className="xl:text-[48px]! md:text-[39px] sm:text-[40px] sm2:text-[32px] text-[24px] font-bold font-poppins text-black! leading-[1.2] mb-3">
            Welcome To <span className="text-primary!">StudyBee'</span>{" "}
            <br className="lg:flex hidden" />
            Strive Learn. Upgrade - Explore new horizons with us!
          </h1>

          <p className="xl:text-[16px] sm2:text-[15px] text-[13px] font-light font-poppins  leading-normal mb-5">
            StudyBee' is the most reputed educational institution and admission
            consulting house dedicated to preparing students in their
            admissions, standardized tests, and academic studies. We are a
            student-focused institution that offers a vibrant and inspirational
            learning environment.
          </p>
          <div className="flex sm4:flex-row flex-col items-center sm3:gap-[15px] gap-[7px]">
            <Button
              text="Our Courses"
              padding="xl:p-[14px_37px]! md:p-[14px_35px] sm2:p-[11px_30px] p-[9px_30px]"
              customClassName="sm2:w-fit sm4:w-1/2 w-full"
              bgLinearGradient={true}
              customTextSize="xl:text-[14px] sm2:text-[13px] text-[11px]"
            />
            <Button
              text="Study Abroad"
              padding="xl:p-[14px_37px]! md:p-[14px_35px] sm2:p-[11px_30px] p-[9px_30px]"
              borderLinearGradientPadding="xl:p-[12px_35px]! md:p-[12px_33px] sm2:p-[9px_28px] p-[7px_28px]"
              customClassName="sm2:w-fit sm4:w-1/2 w-full"
              borderLinearGradient={true}
              customTextSize="xl:text-[14px] sm2:text-[13px] text-[11px]"
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-full flex justify-between relative xl:pt-0 pt-[30px]">
          <div
            className={`xl:w-[280px] sm4:w-[48%] w-[50%] h-auto ${
              showAnimationInBannerImage ? "banner_caption_img1" : ""
            } absolute sm3:left-[35px] sm4:left-[25px] left-2.5 xl:top-[-22px] sm2:top-2.5 top-0 z-5`}
          >
            <Image
              src={`/assets/images/Home_Page/Banner/caption_${showAnimationInBannerImageChange.current}_1.png`}
              width={402}
              height={128}
              className="w-full h-auto object-contain"
              alt="caption image"
            />
          </div>
          <div className="w-full flex justify-center lg:translate-y-[95px] md:translate-y-[120px] sm3:translate-y-[92px] sm2:translate-y-[62px] translate-y-[42px] absolute left-0 bottom-0 z-5">
            <div
              className={`xl:w-[290px] sm4:w-[49%] w-[52%] h-auto ${
                showAnimationInBannerImage ? "banner_caption_img2" : ""
              }`}
            >
              <Image
                src={`/assets/images/Home_Page/Banner/caption_${showAnimationInBannerImageChange.current}_2.png`}
                width={387}
                height={128}
                className="w-full h-auto object-contain"
                alt="caption image"
              />
            </div>
          </div>

          <div
            className={`md:w-[45%] w-[258px] h-auto ${
              showAnimationInBannerImage ? "banner_main_img1" : ""
            } lg:translate-y-[82px] md:translate-y-[100px] sm3:translate-y-[73px] sm2:translate-y-[53px] sm4:translate-y-[33px] translate-y-[23px] relative z-0`}
          >
            <Image
              src={`/assets/images/Home_Page/Banner/main_img_${showAnimationInBannerImageChange.current}_1.png`}
              width={634}
              height={808}
              className="w-full h-auto object-contain"
              alt="banner main image"
            />
          </div>
          <div
            className={`md:w-[52%] w-[310px] h-auto ${
              showAnimationInBannerImage ? "banner_main_img2" : ""
            } translate-y-[-42px] relative z-0`}
          >
            <Image
              src={`/assets/images/Home_Page/Banner/main_img_${showAnimationInBannerImageChange.current}_2.png`}
              width={744}
              height={602}
              className="w-full h-auto object-contain"
              alt="banner main image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HHero;
