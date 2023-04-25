import Image from "next/image";
import React from "react";
import ParallaxText from "../parallaxText";

const Clients = () => {
  return (
    <div>
      <section className=" mt-10 w-full px-3">
        <div className="flex items-center gap-x-2 px-5">
          <div className="w-10 border border-yellow-400"></div>
          <div className="font-dancing text-2xl text-red-700">Clients</div>
        </div>
        {/* BUG: Fix this immediately */}
        <ParallaxText baseVelocity={3}>
          <div className="flex w-max flex-wrap items-center justify-between gap-16">
            <Image
              src="/assets/images/clients/aquasafari.jpg"
              alt=""
              height={60}
              width={60}
              className="w-32"
              loading="lazy"
            />
            <Image
              src="/assets/images/clients/google.png"
              alt=""
              height={50}
              width={60}
              className="w-32"
              loading="lazy"
            />
            <Image
              src="/assets/images/clients/kalyppo_logo.png"
              alt=""
              height={40}
              width={60}
              className="w-32"
              loading="lazy"
            />
            <Image
              src="/assets/images/clients/DONSIMON.png"
              alt=""
              height={40}
              width={70}
              className="w-32"
              loading="lazy"
            />
            <Image
              src="/assets/images/clients/movenpick.png"
              alt=""
              height={40}
              width={70}
              className="w-32"
              loading="lazy"
            />
            <Image
              src="/assets/images/clients/frutelli.png"
              alt=""
              height={30}
              width={80}
              className="w-32"
              loading="lazy"
            />
          </div>
        </ParallaxText>
      </section>
    </div>
  );
};

export default Clients;
