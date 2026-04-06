import React from "react";
import { FaPlus } from "react-icons/fa6";
import InfoCard from "./InfoCard";
 
 

const VideoBanner = () => {
  return (
    <section className="relative h-screen w-full px-6 rounded-2xl my-6 overflow-hidden">
      {/* 1. The Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/banner-vdo.mkv" type="video/x-matroska" />
        Your browser does not support the video tag.
      </video>

      {/* 2. The Dark Overlay (Optional - improves text readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 3. The Content Layer */}
      <div className="relative z-10 flex h-full w-full items-end pb-12 mt-4 md:pb-20 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-10">
          {/* LEFT SIDE: Logo/Title Area */}
          <div className="text-left">
            <h1 className="text-white text-7xl md:text-[160px] lg:text-[200px] font-bold tracking-tighter leading-[0.8]">
              Floka
            </h1>
            <p className="text-white/30 text-right text-5xl md:text-7xl font-semibold tracking-wide md:ml-2">
              Studio
            </p>
          </div>

          {/* RIGHT SIDE: Floating Info Card */}
          <div className="w-full md:w-auto flex justify-end">
            <InfoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
