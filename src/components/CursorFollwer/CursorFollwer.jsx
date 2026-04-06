import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.3,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.3,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX - 20);
      yTo(e.clientY - 20);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 border border-black rounded-full pointer-events-none z-9999"
    >
      {/* inner dot */}
      <div className="w-2 h-2 bg-black rounded-full m-auto mt-3.5" />
    </div>
  );
};

export default CursorFollower;
