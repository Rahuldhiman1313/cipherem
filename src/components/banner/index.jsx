import React from "react";
import Image from "next/image";
import bop from "@/images/token.png";

export const Banner = () => {
  return (
    <div className="main-banner flex items-center relative w-full h-screen">
      <Image src={bop} className="w-full h-screen" alt="Cipherem" />
      <div
        className="get-v absolute left-50% top-50% text-center w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="font-bold text-[70px]">Utility and Tokenomics</h1>
        <p className="text-[#fff] text-[28px] font-normal tracking-wider mt-2.5">
          Accessible & Secure Blockchain with Cipherem
        </p>
        <div className="Get-x flex items-center justify-center gap-6 mt-10">
          <div className="Started-x p-1 block rounded-full">
            <a
              href="#"
              className="font-bold text-[16px] p-2.5 px-10 block rounded-full text-white"
            >
              Get Started
            </a>
          </div>
          <div className="Started-x2">
            <a
              href="#"
              className="font-bold text-[16px] p-2.5 px-10 block rounded-full text-white "
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
