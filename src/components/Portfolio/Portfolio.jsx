

import img1 from "../../assets/imgi_71_home-8-featured-img1-800x800.jpg";
import img2 from "../../assets/imgi_63_home1-bg-img15-800x800.jpg";
import img3 from "../../assets/imgi_25_home1-bg-img3-1320x600.webp"
import img4 from "../../assets/imgi_27_home1-bg-img2-655x450.webp"
import img5 from "../../assets/imgi_29_home1-bg-img1-655x450.webp"

import PortfolioCard from "./PortfolioCard";
import { FaPlus } from "react-icons/fa6";

const projects = [
  { id: 1, label: "Logoipsum", img: img1, category: "Branding, UX" },
  { id: 2, label: "Meta V", img: img2, category: "Technology, XR" },
];

const projects2 = [
  { id: 1, label: "Cutting sizer", img: img3, category: "Branding, UX" },
   
];
const projects3 = [
    { id: 1, label: "Running Fast", img: img4, category: "Branding, UX" },
    { id: 1, label: "SunLight Enjoy", img: img5, category: "Branding, UX" },
]


const Portfolio = () => {
  return (
    <section className="bg-gray-100 px-2 py-16 ">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
        Portfolio
      </p>
      <hr className="border-gray-300 mb-10" />
      <h2 className="mx-auto max-w-max text-left text-4xl md:text-5xl font-semibold text-gray-900 mb-12 leading-tight">
        Strategy to build powerful <br /> digital solutions.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <PortfolioCard key={p.id} {...p} />
        ))}
      </div>

      <section className="py-6 flex justify-between items-center gap-4 ">
        <div className="flex w-full items-center justify-between bg-white rounded px-4 py-6 uppercase">
          <h1>Aldan Branding</h1> <p>2025</p>
        </div>
        <div className="flex w-full items-center justify-between bg-white rounded px-4 py-6 uppercase">
          <h1>Aldan Branding</h1> <p>2025</p>
        </div>
      </section>

      <section>
        {projects2.map((p) => (
          <PortfolioCard key={p.id} {...p} />
        ))}
      </section>
      <div className="flex w-full items-center justify-between bg-white rounded px-4 py-6 uppercase mt-6">
        <h1>Aldan Branding</h1> <p>2025</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects3.map((p) => (
          <PortfolioCard key={p.id} {...p} />
        ))}
      </div>
      <section className="py-6 flex justify-between items-center gap-4 ">
        <div className="flex w-full items-center justify-between bg-white rounded px-4 py-6 uppercase">
          <h1>Aldan Branding</h1> <p>2025</p>
        </div>
        <div className="flex w-full items-center justify-between bg-white rounded px-4 py-6 uppercase">
          <h1>Aldan Branding</h1> <p>2025</p>
        </div>
          </section>
          <div className="mx-auto flex items-center justify-center gap-4 w-fit cursor-pointer mt-10">
              <div className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full transition-transform group-hover:scale-105">
                              <FaPlus className="text-sm hover:animate-spin" />
                            </div>
                            <p className="uppercase text-xs font-bold text-black tracking-[0.15em]">
                              More Works
                            </p>
          </div>
    </section>
  );
};

export default Portfolio;
