import React from "react";
import ServiceAccordion from "./Accordion";
import { FaPlus } from "react-icons/fa6";
import TestimonialMarquee from "./TestimonialMarquee";

const CompanyExpertise = () => {
  return (
    <div className="bg-black px-2 py-16 rounded-2xl">
      <h1 className="text-7xl font-semibold text-white text-center">
        Company <br /> <span className="text-[#4d4d4d]">expertise</span>
      </h1>
      <section>
        <ServiceAccordion></ServiceAccordion>
      </section>
      <div className="  ml-16 flex items-center justify-center gap-4 w-fit cursor-pointer mt-10">
        <div className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full transition-transform group-hover:scale-105">
          <FaPlus className="text-sm hover:animate-spin" />
        </div>
        <p className="uppercase text-xs Ffont-bold text-white tracking-[0.15em]">
          Hire Us
        </p>
          </div>
          
              <TestimonialMarquee></TestimonialMarquee>
           
    </div>
  );
};

export default CompanyExpertise;
