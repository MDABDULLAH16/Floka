import React from "react";
import logo1 from '../../assets/imgi_43_home-1-icon8.svg';
import logo2 from '../../assets/imgi_44_home-1-icon9.svg';
import logo3 from '../../assets/imgi_45_home-1-icon10.svg';
import logo4 from '../../assets/imgi_48_home-1-icon13.svg';
import logo5 from '../../assets/imgi_49_home-1-icon14.svg';
import logo6 from "../../assets/imgi_44_home-1-icon9.svg";
import logo7 from "../../assets/imgi_43_home-1-icon8.svg";
// import logo8 from "../../assets/imgi_48_home-1-icon13.svg";

const logoAssets = [
  { id: 1, src: logo1, alt: "Company 1" },
  { id: 2, src: logo2, alt: "Company 2" },
  { id: 3, src: logo3, alt: "Company 3" },
  { id: 4, src: logo4, alt: "Company 4" },
  { id: 5, src: logo5, alt: "Company 5" },
  { id: 6, src: logo6, alt: "Company 6" },
  { id: 7, src: logo7, alt: "Company 7" },
];
const LogoGallery = () => {
  return (
    <section>
      <div className="flex w-full items-center justify-between bg-white rounded px-4 py-6 uppercase mt-6">
        <h1>happy users</h1> <p>©2025 Case-Themes™ Studio</p>
      </div>
      <section className="bg-white py-20 mt-6 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          {/* Grid Container with thin borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100">
            {/* Logo Mapping */}
            {logoAssets.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-10 h-48 border-r border-b border-gray-100 group hover:bg-gray-50 transition-colors"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>
            ))}

            {/* Call to Action Cell */}
            <div className="flex flex-col items-center justify-center p-10 h-48 border-r border-b border-gray-100">
              <span className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-2">
                Next can be you.
              </span>
              <a
                href="#contact"
                className="text-sm font-black text-black border-b-2 border-black leading-tight hover:text-gray-600 hover:border-gray-600 transition-all"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LogoGallery;
