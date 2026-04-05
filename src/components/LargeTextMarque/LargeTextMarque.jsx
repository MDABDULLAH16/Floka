import React from "react";
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default ?? MarqueeLib;

const LargeTextMarque = () => {
  return (
    <div className="relative w-full overflow-hidden  py-20">
      {/* Side Fades */}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-linear-to-r from-[#f5f5f5] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-32 bg-linear-to-l from-[#f5f5f5] to-transparent pointer-events-none" />

      <Marquee speed={100} gradient={false}>
        <div className="flex items-center space-x-10 whitespace-nowrap overflow-hidden">
          <h1 className="text-8xl md:text-[9rem]   tracking-tighter flex items-center">
            <span className="text-gray-300">v our</span>
            <span className="text-gray-700 ml-6">team</span>
            <span className="text-black ml-6">combines</span>
            <span className="text-gray-300 ml-6">cre</span>
          </h1>
          {/* Spacer to keep the loop seamless */}
          <div className="w-20" />
        </div>
      </Marquee>
    </div>
  );
};

export default LargeTextMarque;
