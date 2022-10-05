import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: "url('/assets/images/bg2.jpg')" }}
        id="ss"
        className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-top bg-no-repeat transition-all duration-500 md:bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="container absolute flex items-center justify-center  md:m-16">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-7 p-3 text-center text-white">
              <h3>
                <span className="text-sm uppercase tracking-widest lg:text-2xl">
                  New place to get your fruits
                </span>
              </h3>
              <p className="font-Cairo text-center text-5xl font-bold capitalize tracking-wide lg:text-6xl">
                Get them fresh <br />
                and cheaper
              </p>
              <div className="flex items-center justify-center gap-10">
                <a href="#">
                  <span className="uppercase transition duration-300 hover:text-red-600">
                    get started
                  </span>
                </a>
                <button className="rounded-md border-2 border-yellow-400 p-5 uppercase tracking-wider transition duration-[400ms] hover:bg-white hover:text-red-600">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* <div className="opacity-10">
            <Image
              src="/assets/images/flame.png"
              alt=""
              height={"100%"}
              width={"100%"}
              className="hidden h-[430px] lg:block"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
