"use client";
import Image from "next/image";
import logo from "@/images/Logo.png";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Github } from "lucide-react";
export const Footer = () => {
  return (
    <div>
      <div className="bgx xsw">
        <div className="mlx relative mt-36">
          <div className="Metrics max-w-screen-xl mx-auto">
            <div class="grid grid-cols-2 gap-2">
              <div>
                <Image src={logo} alt="cps" />
              </div>
              <div className="flex justify-end">
                <ul className="flex items-center gap-8 scoial text-[20px]">
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">Build</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bnch grid grid-cols-1 gap-1 relative vrs">
        <div className="mlx relative">
          <div className="Metrics max-w-screen-xl mx-auto">
            <div class="grid grid-cols-2 gap-2">
              <div>
                <span className=" text-white opacity-70">© 2024 Cipherem</span>
              </div>
              <div className="flex justify-end">
                <ul className="bxgq flex items-center gap-8 scoial text-[20px]">
                  <li>
                    <a href="#">
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Github />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
