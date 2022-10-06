import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="mt-5 space-x-3 bg-white px-5 md:flex md:flex-row">
        <div className="md:w-[40%] md:pt-16">
          <p className="font-Cairo text-center text-3xl font-bold text-zinc-900">
            About FrutoDom
          </p>
          <p className="font-kanit py-2 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quod ratione recusandae omnis voluptates quasi alias! Non laudantium
            sit veniam architecto rerum eum accusantium aperiam, ea sunt eius
            maxime nulla aliquid suscipit dignissimos recusandae accusamus illo
            atque fugiat consectetur quibusdam, alias labore. Earum laborum
            sapiente assumenda facilis repudiandae quia in?
          </p>
        </div>
        <div className="flex flex-col gap-5 gap-y-4 sm:flex sm:flex-row md:w-[60%]">
          <div className="shadow-xl sm:w-[50%]">
            <div className="py-2 ">
              <Image
                src="/assets/images/farmland1.jpg"
                alt=""
                height={500}
                width={600}
                className="h-[250px] w-full object-cover transition duration-300 ease-in-out hover:scale-105 sm:h-[250px] sm:w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-8 mb-3 px-4">
              <p className="font-Cairo text-center text-3xl font-semibold tracking-wide">
                AlphaDom Farmland
              </p>
              <p className="font-kanit pt-2">
                Our Farmland <span className="text-red-500">500 acres</span>
              </p>
              <p>
                Located in <span className="cursor-pointer">Ada, Ghana</span>
              </p>
            </div>
          </div>
          <div className="shadow-xl sm:w-[50%]">
            <div className="py-2">
              <Image
                src="/assets/images/hq.jpg"
                alt=""
                height={500}
                width={600}
                className=" h-[250px] w-full object-cover transition duration-300 ease-in-out hover:scale-105 sm:h-[250px] sm:w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-8 mb-3 px-4">
              <p className="font-Cairo text-center text-3xl font-semibold tracking-wide md:tracking-widest">
                FrutoDom headquarters
              </p>
              <p className="pt-2">
                Located in <span className="cursor-pointer">Accra, Ghana</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
