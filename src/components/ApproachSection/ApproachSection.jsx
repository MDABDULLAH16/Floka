import React from "react";
import logo from "../../assets/hero.png";
const circularTextString = "PLAYFUL LUXURIOUS OR MORE WANT IT TO SO SOUND";

const ApproachSection = () => {
  return (
    <section className="px-2 py-6  ">
      <div className="flex flex-col   w-full justify-between gap-4 lg:flex-row lg:gap-20 items-center">
        {/* === LEFT: Circular Logo === */}
        <div className="flex flex-col">
          <div className="relative w-18 h-18 md:w-24 md:h-24 shrink-0 flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-14 h-14 md:w-14 md:h-14 object-contain"
            />

            <div className="absolute animate-spin-slow inset-0 flex items-center justify-center opacity-60">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full font-mono uppercase"
                style={{ fill: "#888" }}
              >
                <path
                  id="circlePath"
                  d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  fill="none"
                />
                <text fontSize="7" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    {circularTextString}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* === MIDDLE: Sub-Paragraph === */}
          <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium  text-center lg:text-left  ">
            We design every project with long- <br /> term success in mind.
          </p>
        </div>

        {/* === RIGHT: Large Title === */}
        <div data-aos="fade-left" className="p-6 ">
          <h2 className="text-3xl md:text-4xl   xl:text-[62px]  leading-[1.05]   text-center lg:text-left">
            Our approach is straight forward—
            <br /> prioritizing functionality, speed,
            <br />
            and clarity for solutions.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
