import { useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
const PortfolioCard = ({ img, label, category }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ perspective: "800px" }}
    >
      {/* Image with tilt */}
      <img
        src={img}
        alt={label}
        className="w-full h-72 md:h-112 object-cover block"
        style={{
          transform: `rotateY(${transform.x}deg) rotateX(${-transform.y}deg) scale(${hovered ? 1.05 : 1})`,
          transition: hovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s ease",
        }}
      />

      {/* Dark overlay on hover */}
      <div
        className="absolute inset-0 bg-black/30 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Logo badge — top left */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
        <span className="w-4 h-4 bg-white rounded-sm inline-block" />
        {label}
      </div>

      {/* Arrow icon — top right, shows on hover */}
      <div
        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.6)",
        }}
      >
        <FiArrowUpRight className="text-black text-lg" />
      </div>

      {/* Category — bottom left, shows on hover */}
      <div
        className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {category}
      </div>
    </div>
  );
};
export default PortfolioCard;
