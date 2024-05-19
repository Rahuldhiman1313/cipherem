"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import fd from "@/images/cp.png";
import lefx from "@/images/Union-v.png";
import lefx2 from "@/images/Union-v2.png";

export const Technology = () => {
  return (
    <div className="r-tech Flagship mt-36 py-40 relative">
      <div className="bue absolute left-20 top-0">
        <Image src={lefx} alt="fd" />
      </div>
      <div className="bg-x-crical" data-aos="zoom-in" data-aos-duration="1000">
        <Image src={fd} alt="fd" />
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <h2 className=" font-medium text-[50px] text-center">
          Technology title goes here and can
          <br /> take 3 lines or so.
        </h2>
        <p className="text-[#A9A9BB] text-[18px] font-normal tracking-wider mt-2.5 text-center">
          Brief description about technology goes here and can take about 4
          lines.
          <br />
          Brief description about technology goes here and can take about 4
          lines.
        </p>
        <div className="Tech flex items-center justify-center gap-9 mt-8">
          <div className="See-x p-1 block rounded-full">
            <a
              href="#"
              className="p-1 block rounded-full px-6 py-2 text-[18px]"
            >
              See Technology
            </a>
          </div>
          <a href="#" className="flex items-center gap-3 ccc">
            See Documentation <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="buex absolute right-0">
        <Image src={lefx2} alt="fd" />
      </div>
    </div>
  );
};
