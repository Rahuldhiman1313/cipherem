import React from "react";
import Image from "next/image";
import cps from "@/images/cpsxx.png";
import cps2 from "@/images/Union.png";

export const Metrics = () => {
  return (
    <div className="mlx relative">
      <Image src={cps2} alt="cps" className=" absolute top-60 left-0" />
      <div className="Metrics max-w-screen-xl mx-auto">
        <div class="unit grid grid-cols-2 gap-2">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h3 className="font-semibold text-[40px]">Basic metrics</h3>
          </div>
          <div>
            <p
              className="text-[20px]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Cipherem is the native coin of the Cipherem platform and is used
              to secure the network through staking, paying for fees, and to
              provide a basic unit of account between the multiple subnetworks
              created on the Cipherem platform.
            </p>
          </div>
        </div>
        <div className="unit grid grid-cols-2 gap-2 relative mt-36">
          <div className="fgxx" data-aos="zoom-in" data-aos-duration="1000">
            <Image src={cps} alt="cps" />
          </div>
          <div>
            <ul className="text-[#fff] no-x ">
              <li className="flex justify-between">
                <span>Ticker</span> <span>CIPHEREM (CIP)</span>
              </li>
              <li className="flex justify-between">
                <span>Type</span> <span>Utility</span>
              </li>
              <li className="flex justify-between">
                <span>Circulating supply</span> <span>-</span>
              </li>
              <li className="flex justify-between">
                <span>Total supply</span> <span>300,000,000</span>
              </li>
              <li className="flex justify-between">
                <span>% Staked</span> <span>-</span>
              </li>
              <li className="flex justify-between">
                <span># of Wallets</span> <span>-</span>
              </li>
              <li className="flex justify-between">
                <span>Inflation</span> <span>-</span>
              </li>
              <li className="flex justify-between">
                <span>Volume</span> <span>-</span>
              </li>
              <li className="flex justify-between">
                <span>Market cap</span> <span>-</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
