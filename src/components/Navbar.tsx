import React, { useState } from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex w-screen items-center justify-center bg-zinc-900">
      <nav className="fixed top-0 left-0 right-0 z-10 flex w-screen items-center justify-center bg-zinc-900 px-5 md:px-10">
        <div className="w-full max-w-[1500px] items-center justify-between p-3 text-white lg:flex">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-3 text-sm sm:text-lg md:text-3xl">
              <Image
                src="/assets/images/fruit.png"
                width={25}
                height={25}
                alt=""
                className="h-5 lg:h-10"
              />
              <Link
                to="#home"
                className="font-dancing font-bold tracking-widest transition duration-[0.5s] hover:text-red-500"
              >
                FrutoDom
              </Link>
            </div>
            <div>
              <button
                className="border-transparent text-3xl text-red-500 transition-all duration-[.5s] ease-out hover:rotate-90 lg:hidden"
                onClick={() => setShow(!show)}
              >
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
          <div
            className={
              show
                ? `flex -translate-y-1 flex-col items-center justify-center space-y-5 transition-all duration-500 ease-in`
                : ` hidden flex-col items-center justify-center lg:inline-flex lg:h-auto lg:flex-row lg:gap-16`
            }
          >
            <ul className="links space-y-2 font-Cairo text-2xl uppercase tracking-wide md:text-[20px] lg:flex lg:items-center lg:justify-center lg:space-x-8 lg:text-[16px]">
              <li className="nav mt-2 transition-all duration-500 hover:text-red-500">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  home
                </Link>
              </li>
              <li className="nav transition duration-500 hover:text-yellow-400">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  about
                </Link>{" "}
              </li>
              <li className="nav transition duration-500 hover:text-red-500">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={700}
                >
                  contact
                </Link>{" "}
              </li>
              <li className="transtion duration-500 hover:text-yellow-400">
                <Link to="#">login</Link>{" "}
              </li>
            </ul>
            {/* Social Media */}
            <ul className="flex items-center space-x-8 text-2xl lg:text-[16px]">
              <li className="cursor-pointer transition duration-[0.5s] ease-linear hover:text-blue-500">
                <BsFacebook />
              </li>
              <li className="cursor-pointer transition duration-[0.5s] ease-linear hover:text-blue-400">
                <BsTwitter />
              </li>
              <li className="cursor-pointer transition duration-[0.5s] ease-linear hover:text-fuchsia-500">
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
