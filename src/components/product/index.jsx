"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import bxx from "@/images/x1.png";
import bxx2 from "@/images/x2.png";
import bxx3 from "@/images/x3.png";
import cmo from "@/images/cxx.png";
import cmo2 from "@/images/cxx2.png";
import cmo3 from "@/images/cxx3.png";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
export const Product = () => {
  return (
    <div className="Flagship">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <h2 className=" font-medium text-[50px] text-center">
          Cipherem Flagship Products
        </h2>
        <p className="text-[#A9A9BB] text-[18px] font-normal tracking-wider mt-2.5 text-center">
          The flagship products will play a part of Cipherem’s Token Utility
        </p>
        <div className="See-x p-1 block rounded-full">
          <a href="#" className="p-1 block rounded-full px-6 py-2 text-[18px]">
            See Products
          </a>
        </div>
      </div>
      <div className="py-20 vbrk" data-aos="fade-up">
        <Swiper
          loop={true}
          // modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={40}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1023: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1450: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1750: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 4.5,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide className="relative">
            <Image
              src={bxx3}
              className="bx-x absolute left-0 right-0 top-0 bottom-0"
              alt="bxx"
            />
            <div className="ecosystem relative z-10">
              <Image src={cmo} className="cmo" alt="bxx" />
              <h3 className=" font-semibold text-[30px] py-6">RIFT</h3>
              <p className=" font-normal text-[20px]">
                Your gateway to the Cipherem ecosystem, combining social
                engagement, secure messaging, and a vibrant marketplace in one
                intuitive platform.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={bxx2}
              className="bx-x absolute left-0 right-0 top-0 bottom-0"
              alt="bxx"
            />
            <div className="ecosystem relative z-10">
              <Image src={cmo2} className="cmo" alt="bxx" />
              <h3 className=" font-semibold text-[30px] py-6">Abacus</h3>
              <p className=" font-normal text-[20px]">
                Trade and manage your digital assets across diverse blockchains
                with our user-friendly, Omnichain compatible perpetual
                decentralised exchange.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={bxx}
              className="bx-x absolute left-0 right-0 top-0 bottom-0"
              alt="bxx"
            />
            <div className="ecosystem relative z-10">
              <Image src={cmo3} className="cmo" alt="bxx" />
              <h3 className=" font-semibold text-[30px] py-6">Low-Code IDE</h3>
              <p className=" font-normal text-[20px]">
                Empowering developers of all skill levels to build innovative
                blockchain applications with our drag-and-drop interface and
                pre-built templates.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={bxx}
              className="bx-x absolute left-0 right-0 top-0 bottom-0"
              alt="bxx"
            />
            <div className="ecosystem relative z-10">
              <Image src={cmo} className="cmo" alt="bxx" />
              <h3 className=" font-semibold text-[30px] py-6">QuestFinder</h3>
              <p className=" font-normal text-[20px]">
                Your gateway to the Cipherem ecosystem, combining social
                engagement, secure messaging, and a vibrant marketplace in one
                intuitive platform.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={bxx}
              className="bx-x absolute left-0 right-0 top-0 bottom-0"
              alt="bxx"
            />
            <div className="ecosystem relative z-10">
              <Image src={cmo2} className="cmo" alt="bxx" />
              <h3 className=" font-semibold text-[30px] py-6">Abacus</h3>
              <p className=" font-normal text-[20px]">
                Your gateway to the Cipherem ecosystem, combining social
                engagement, secure messaging, and a vibrant marketplace in one
                intuitive platform.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
