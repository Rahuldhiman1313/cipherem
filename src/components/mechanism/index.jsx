import React from "react";
import Image from "next/image";
import TokenDiagrams from "@/images/Token-Diagrams.svg";
import { PercentageCart } from "./Chart";

export const Mechanism = () => {
  return (
    <div className="xde Flagship mt-36">
      <h2
        className=" font-medium text-[50px] text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        CIP Token Mechanism
      </h2>
      <div
        className="Metrics max-w-screen-xl mx-auto mt-0"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <Image src={TokenDiagrams} className="w-full" alt="native" />
        <PercentageCart />
      </div>
    </div>
  );
};
