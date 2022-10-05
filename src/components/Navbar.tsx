import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex w-screen items-center justify-center bg-zinc-900">
      <nav className="fixed top-0 left-0 right-0 z-10 flex w-screen items-center justify-center bg-zinc-900">
        <div className="w-full max-w-[1920px] items-center justify-between p-3 text-white lg:flex">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-3 text-sm sm:text-lg md:text-3xl">
              {/* TODO: Add image here */}
              <Image
                src="/assets/images/fruit.png"
                width={25}
                height={25}
                alt=""
                className="h-5 lg:h-10"
              />
              <a
                href="#home"
                className="font-dancing font-bold tracking-widest transition duration-[0.3s] hover:text-red-500"
              >
                FrutoDom
              </a>
            </div>
            <div>
              <button className="btn border-transparent text-3xl text-red-500 transition-all duration-[.3s] hover:rotate-90 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hide-links hidden flex-col items-center justify-center space-y-5 transition-all duration-500 lg:flex lg:h-auto lg:flex-row lg:gap-16">
            <ul className="links font-Cairo space-y-2 text-2xl uppercase tracking-wide md:text-[20px] lg:flex lg:items-center lg:justify-center lg:space-x-8 lg:text-[16px]">
              <li className="nav  mt-2">
                <a href="index.html">home</a>{" "}
              </li>
              <li className="nav hover:text-yellow-400">
                <a href="#">about</a>{" "}
              </li>
              <li className="nav">
                <a href="#">contact</a>{" "}
              </li>
              <li className="hover:text-yellow-400">
                <a href="#">login</a>{" "}
              </li>
            </ul>
            {/* Social Media */}
            <ul className="flex items-center space-x-8 pb-2 text-2xl lg:text-[16px]">
              <li className="nav-links transition duration-[0.3s]">
                <a href="#">
                  <i className="fa fa-facebook transition-all duration-500 hover:text-blue-600"></i>
                </a>
              </li>
              <li className="nav-links transition duration-[0.3s]">
                <a href="#">
                  <i className="fa fa-twitter transition-all duration-500 hover:text-blue-400"></i>
                </a>
              </li>
              <li className="nav-links transition duration-[0.3s]">
                <a href="#">
                  <i className="fa fa-instagram transition-all duration-500 hover:text-purple-500"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
