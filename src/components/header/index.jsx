"use client";
import { Twitter, Facebook, Github, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/Logo.svg";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className="nww fixed w-full z-20 top-7 start-0">
      <div className="border-x">
        <div className="vbx max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} width={150} height={150} alt="Cipherem" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ul className="pi flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-center">
              <li>
                <a href="#" className="text-white md:hover:text-blue">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-white md:hover:text-blue">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-white md:hover:text-blue">
                  <Github />
                </a>
              </li>
            </ul>

            <button
              onClick={() => setNavActive(!navActive)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={navActive}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              navActive ? "navbar-active" : "navbar-inactive"
            }`}
            id="navbar-sticky"
          >
            {navActive && (
              <X className="cross-icon" onClick={() => setNavActive(false)} />
            )}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-center">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white hover:transition-all"
                >
                  Learn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white hover:transition-all"
                >
                  Build
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white hover:transition-all"
                >
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
