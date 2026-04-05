import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6"; // Correct plus icon

const InfoCard = () => {
  // 1. STATE & REFS for cursor tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // 2. Function to calculate cursor position inside the image container
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the element (0 to rect.width/height)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col   p-4 rounded-3xl  w-full max-w-sm">
      <div className="w-100 mt-10 md:mt-0 bg-white  p-4 rounded-3xl  shadow-2xl transition-shadow hover:shadow-cyan-100/30 ">
        {/* Upper Content Flex Group */}
        <div className="flex items-start md:items-center gap-6 mb-2">
          {/* === IMAGE CONTAINER with hover interaction === */}
          <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative rounded-2xl md:rounded-2xl overflow-hidden cursor-crosshair shrink-0"
            style={{ width: "140px", height: "140px" }} // Fixed base size
          >
            <img
              src="/src/assets/imgi_13_home-1-img-slide-300x300.jpg" // Your profile img
              alt="Profile of Almond D. Neilsi"
              className="w-full h-full object-cover transition-transform duration-100 ease-out"
              style={{
                // Zoom when hovered
                transform: isHovered ? "scale(1.4)" : "scale(1)",
                // Set the 'origin' to the cursor's location
                transformOrigin: isHovered
                  ? `${mousePosition.x}px ${mousePosition.y}px`
                  : "center center",
              }}
            />
          </div>

          {/* RIGHT TEXT GROUP (Correct layout) */}
          <div className="flex flex-col gap-5 py-1">
            {/* Name/Title */}
            <div>
              <p className="text-[11px] uppercase text-gray-400 font-extrabold tracking-widest leading-none mb-1">
                Head of Idea
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Almond D. Neilsi
              </h2>
            </div>

            {/* Correct 'Let's Talk' Button (Matches Image 1 exactly) */}
            <div className="group flex items-center gap-3 w-fit cursor-pointer">
              <div className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full transition-transform group-hover:scale-105">
                <FaPlus className="text-sm" />
              </div>
              <p className="uppercase text-xs font-bold text-black tracking-[0.15em]">
                Let's Talk
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t   pt-5">
        <p className="text-xs md:text-xl text-white/30 font-medium leading-relaxed max-w-[90%]">
          <span className="text-white text-2xl font-semibold">
            No cookie-cutter websites.
          </span>{" "}
          <br />
          Just real tools and smart strategies to grow your business and elevate
          your brand.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
