import React from "react";
import Image from "next/image";
import native from "@/images/native.png";
import arrwx from "@/images/Arrow.png";
import bix from "@/images/brakes.png";

export const Thenative = () => {
  return (
    <div className="Flagship dxx">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <h2 className=" font-medium text-[50px] text-center">
          CIP is the native utility token
        </h2>
        <p className="text-[#A9A9BB] text-[18px] font-normal tracking-wider mt-2.5 text-center">
          CIP coin will be the base currency that powers the Cipherem
          <br />
          ecosystem and it will be used for:
        </p>
      </div>
      <div className="Metrics max-w-screen-xl mx-auto mt-20">
        <div class="grid grid-cols-3 gap-3 relative">
          <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <div className="relative bnxp mb-10">
              <Image
                src={native}
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0"
                alt="native"
              />
              <div className="flex items-center relative justify-between">
                <div className="cxm">
                  <h4 className="text-[#ffffff85] text-[28px] font-semibold mb-2">
                    01
                  </h4>
                  <p className="text-[#fff] text-[20px] font-semibold">
                    Validator node staking
                  </p>
                </div>
                <div className="cxm2 self-end">
                  <a href="#">
                    <Image src={arrwx} className=" mr-4 mb-2" alt="arrwx" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bnxp mb-10">
              <Image
                src={native}
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0"
                alt="native"
              />
              <div className="flex items-center relative justify-between">
                <div className="cxm vbf">
                  <h4 className="text-[#ffffff85] text-[28px] font-semibold mb-2">
                    02
                  </h4>
                  <p className="text-[#fff] text-[20px] font-semibold">
                    In-platform purchases
                    <br /> and trading fees
                  </p>
                </div>
                <div className="cxm2 self-end">
                  <a href="#">
                    <Image src={arrwx} className=" mr-4 mb-2" alt="arrwx" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bnxp">
              <Image
                src={native}
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0"
                alt="native"
              />
              <div className="flex items-center relative justify-between">
                <div className="cxm">
                  <h4 className="text-[#ffffff85] text-[28px] font-semibold mb-2">
                    03
                  </h4>
                  <p className="text-[#fff] text-[20px] font-semibold">
                    Native collateral in Cipherem
                  </p>
                </div>
                <div className="cxm2 self-end">
                  <a href="#">
                    <Image src={arrwx} className=" mr-4 mb-2" alt="arrwx" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cfes relative left-8">
            <Image
              src={bix}
              className="w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="relative" data-aos="fade-up" data-aos-duration="3000">
            <div className="relative bnxp mb-10">
              <Image
                src={native}
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0"
                alt="native"
              />
              <div className="flex items-center relative justify-between">
                <div className="cxm">
                  <h4 className="text-[#ffffff85] text-[28px] font-semibold mb-2">
                    04
                  </h4>
                  <p className="text-[#fff] text-[20px] font-semibold">
                    Network Fees and mechanisms
                  </p>
                </div>
                <div className="cxm2 self-end">
                  <a href="#">
                    <Image src={arrwx} className=" mr-4 mb-2" alt="arrwx" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bnxp mb-10">
              <Image
                src={native}
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0"
                alt="native"
              />
              <div className="flex items-center relative justify-between">
                <div className="cxm">
                  <h4 className="text-[#ffffff85] text-[28px] font-semibold mb-2">
                    05
                  </h4>
                  <p className="text-[#fff] text-[20px] font-semibold">
                    Governance voting processes
                  </p>
                </div>
                <div className="cxm2 self-end">
                  <a href="#">
                    <Image src={arrwx} className=" mr-4 mb-2" alt="arrwx" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
