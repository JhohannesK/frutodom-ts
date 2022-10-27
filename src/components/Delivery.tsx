import Image from "next/image";
import React from "react";

const Delivery = () => {
  return (
    <div>
      <section className="mt-16 w-full bg-white px-5">
        <div className="font-Comfortaa">
          <p className="text-center font-Comfortaa text-3xl text-zinc-500">
            Make a delivery for yourself or your loved ones
          </p>
          <p className="font-kanit py-2 text-center text-5xl font-bold capitalize">
            our delivery service
          </p>
        </div>
        <div className="flex flex-col gap-5 gap-y-4 sm:flex sm:flex-row">
          <div className="shadow-xl sm:w-[50%]">
            <div className="py-2 ">
              <Image
                height={400}
                width={600}
                src="/assets/images/delivery1.jpg"
                alt=""
                className="h-[250px] w-full object-cover sm:h-[250px] sm:w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="shadow-xl sm:w-[50%]">
            <div className="py-2">
              <Image
                height={400}
                width={600}
                src="/assets/images/delivery2.jpg"
                alt=""
                className=" h-[250px] w-full object-cover sm:h-[250px] sm:w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="shadow-xl sm:w-[50%]">
            <div className="py-2">
              <Image
                height={400}
                width={600}
                src="/assets/images/delivery3.jpg"
                alt=""
                className=" h-[250px] w-full object-cover sm:h-[250px] sm:w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
