import React from "react";

const HeroStripe = () => {
  return (
    <section className="items-center justify-center space-y-6 bg-zinc-900 p-7 text-white md:flex">
      <div className="flex flex-col items-center justify-center space-y-6 md:w-[50%] md:p-10">
        <p className="font-kanit text-center text-4xl font-bold capitalize md:text-2xl">
          <span>become a frutodomster</span>
        </p>
        <p className="font-kanit text-2xl md:text-xl">
          <span>
            You would be granted a 2 months free membership (GHS 50.99 per
            month)
          </span>
        </p>
        <p className="font-kanit text-xl text-gray-400 md:text-sm">
          Skip the selling stress and become a FrutoDomster. Sit back and make
          money whiles we cover up for you. Feel free and join. Start makeing
          more money.
        </p>
        <button className="font-kanit w-full bg-red-600 p-5 text-xl capitalize tracking-wide text-white transition duration-[300ms] hover:bg-white hover:text-red-600">
          Become a frutodomster today
        </button>
      </div>

      <div className="space-y-2 border-slate-600 md:w-[50%] md:border-l md:pl-24">
        <p className="font-kanit bg-gradient-to-r from-rose-600 via-blue-300 to-yellow-500 bg-clip-text text-center text-3xl capitalize text-transparent">
          Current countries we are working in
        </p>
        <ul className="font-kanit space-y-2 text-lg">
          <li className="cursor-pointer bg-gradient-to-r from-red-400 via-yellow-500 to-green-500 bg-clip-text transition-all duration-500 hover:text-transparent">
            Ghana
          </li>
          <li className="cursor-pointer bg-gradient-to-r from-red-600 to-white bg-clip-text transition-all duration-500 hover:text-transparent">
            USA
          </li>
          <li className="cursor-pointer bg-gradient-to-r from-blue-600 to-red-900 bg-clip-text transition-all duration-500 hover:text-transparent">
            United Kingdom
          </li>
          <li className="cursor-pointer bg-gradient-to-r from-green-400 to-white bg-clip-text transition-all duration-500 hover:text-transparent">
            Nigeria
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroStripe;
