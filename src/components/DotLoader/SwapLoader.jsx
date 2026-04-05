"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SwapLoader = () => {
  const dotsRef = useRef([]);
  const isAnimating = useRef(false);
  const isSwapped = useRef(false); // 👈 track state

  const positions = [
    { x: 0, y: 0 }, // 0 center
    { x: 0, y: -14 }, // 1 top
    { x: 14, y: 0 }, // 2 right
    { x: 0, y: 14 }, // 3 bottom
    { x: -14, y: 0 }, // 4 left
  ];

  // swap mapping
  const swapMap = [0, 3, 4, 1, 2];
  // center same, top↔bottom, left↔right

  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      gsap.set(dot, positions[i]);
    });
  }, []);

  const handleHover = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    dotsRef.current.forEach((dot, i) => {
      const targetIndex = isSwapped.current ? i : swapMap[i];
      const pos = positions[targetIndex];

      gsap.to(dot, {
        duration: 0.4,
        x: pos.x,
        y: pos.y,
        ease: "power2.inOut",
      });
    });

    // toggle state
    isSwapped.current = !isSwapped.current;

    setTimeout(() => {
      isAnimating.current = false;
    }, 400);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute w-1 h-1 bg-black rounded-full"
        />
      ))}
    </div>
  );
};

export default SwapLoader;
