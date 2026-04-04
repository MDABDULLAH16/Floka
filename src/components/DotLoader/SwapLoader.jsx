"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SwapLoader = () => {
  const dotsRef = useRef([]);
  const orderRef = useRef([0, 1, 2, 3, 4]); // track current positions
  const isAnimating = useRef(false);

  const positions = [
    { x: 0, y: 0 }, // center
    { x: 0, y: -20 }, // top
    { x: 20, y: 0 }, // right
    { x: 0, y: 20 }, // bottom
    { x: -20, y: 0 }, // left
  ];

  // 👉 Set initial positions
  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      gsap.set(dot, positions[i]);
    });
  }, []);

  const handleHover = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // rotate order (swap logic)
    orderRef.current = [orderRef.current[4], ...orderRef.current.slice(0, 4)];

    // animate to new positions
    dotsRef.current.forEach((dot, i) => {
      const posIndex = orderRef.current[i];

      gsap.to(dot, {
        duration: 0.4,
        x: positions[posIndex].x,
        y: positions[posIndex].y,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    });
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="relative w-20 h-20 flex items-center justify-center cursor-pointer"
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
