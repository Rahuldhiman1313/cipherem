import React from "react";
import Image from "next/image";
import vhat from "@/images/vhat.png";

export const Piechat = () => {
  return (
    <div className="mlx relative mt-36">
      <div className="Metrics max-w-screen-xl mx-auto">
        <div class="grid grid-cols-2 gap-2">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3 className="font-semibold text-[40px]">CIP Economics</h3>
            <p className="text-[20px]">
              Cipherem is the native coin of the Aleph Zero platform and is used
              to secure the network through staking, pay for fees, and provide a
              basic unit of account between the multiple subnetworks created on
              the Cipherem platform.
            </p>
          </div>
          <div className="cxa flex justify-end">
            <Image
              src={vhat}
              alt="cps"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 relative mt-20">
          <div
            className="wqzz flex flex-wrap"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#3655D8]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Seed
              </strong>
            </div>
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#00FFEC]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Strategic Sale
              </strong>
            </div>
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#039FFF]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Community Incentives
              </strong>
            </div>
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#FC9AFA]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Partners & Advisors
              </strong>
            </div>
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#1B81AA]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Core Team & Future Hires
              </strong>
            </div>
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#FFB420]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Private Sales
              </strong>
            </div>
            <div className="vfxo flex items-start gap-3">
              <span className="cp-c bg-[#FFFFFF]"></span>
              <strong className="text-[#ADA8C3] text-[18px] font-normal">
                Foundation (Network and Ecosystem Growth, Market Making)
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
