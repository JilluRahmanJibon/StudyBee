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
          <h1 className="xl:text-[48px]! md:text-[50px] sm:text-[40px] text-[32px] font-bold font-poppins text-black! leading-[1.2] mb-3">
            Welcome To <span className="text-primary!">StudyBee'</span>{" "}
            <br className="lg:flex hidden" />
            Strive Learn. Upgrade - Explore new horizons with us!
          </h1>

          <p className="md:text-[16px] text-[15px] font-light font-poppins  leading-normal mb-5">
            StudyBee' is the most reputed educational institution and admission
            consulting house dedicated to preparing students in their
            admissions, standardized tests, and academic studies. We are a
            student-focused institution that offers a vibrant and inspirational
            learning environment.
          </p>
          <div className="flex sm2:flex-row flex-col items-center sm3:gap-[15px] gap-[7px]">
            <Button
              text="Our Courses"
              padding="xl:p-[14px_37px]! md:p-[14px_35px] p-[10px_20px]"
              customClassName="sm:w-fit w-full"
              bgLinearGradient={true}
            />
            <Button
              text="Study Abroad"
              padding="xl:p-[14px_37px]! md:p-[14px_35px] p-[10px_20px]"
              borderLinearGradientPadding="xl:p-[12px_35px]! md:p-[12px_33px] p-[8px_18px]"
              customClassName="sm:w-fit w-full"
              borderLinearGradient={true}
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-full flex justify-between relative">
          <div
            className={`w-[280px] h-auto ${
              showAnimationInBannerImage ? "banner_caption_img1" : ""
            } absolute left-[35px] top-[-22px] z-5`}
          >
            <Image
              src={`/assets/images/Home_Page/Banner/caption_${showAnimationInBannerImageChange.current}_1.png`}
              width={402}
              height={128}
              className="w-full h-auto object-contain"
              alt="caption image"
            />
          </div>
          <div className="w-full flex justify-center translate-y-[95px] absolute left-0 bottom-0 z-5">
            <div
              className={`w-[290px] h-auto ${
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
            className={`w-[258px] h-auto ${
              showAnimationInBannerImage ? "banner_main_img1" : ""
            } translate-y-[82px] relative z-0`}
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
            className={`w-[310px] h-auto ${
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
