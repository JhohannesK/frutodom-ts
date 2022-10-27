import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div id="contact">
      <section className=" mt-10 w-full px-[1rem] sm:flex">
        <div className="flex skew-y-3 items-center justify-center sm:w-[50%]">
          {/* <Image src="/public/images/mobile3.png" alt="" className="pt-10"> */}
        </div>
        <div className="p-3 pt-5 sm:w-[50%] sm:pt-16">
          <p className="font-kanit text-center text-2xl text-red-600">
            We&apos;ve got you..Also available on mobile too
          </p>
          <p className="font-Cairo text-zinc-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            obcaecati dolore soluta magnam perferendis repellat nemo atque quos
            sunt blanditiis.
          </p>
          <div className="flex items-center justify-center gap-y-4 gap-x-4 pt-8">
            <Image
              src="/assets/images/Play-Store-Logo-2.png"
              alt=""
              height={40}
              width={80}
              className="w-40 cursor-pointer md:w-40"
            />
            <Image
              src="/assets/images/appstore.png"
              alt=""
              height={30}
              width={80}
              className="w-40 cursor-pointer md:w-40"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
