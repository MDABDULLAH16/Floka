import React, { useEffect, useRef, useState } from "react";

const useCountUp = (target, duration = 2000, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
};

const ProgressBar = ({ label, value }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs text-gray-600 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
      <div
        className="h-full rounded-full flex items-center justify-end pr-2 text-xs font-semibold text-white transition-all duration-1000"
        style={{
          width: `${value}%`,
          backgroundColor: value === 90 ? "#111" : value === 100 ? "transparent" : "transparent",
          color: value === 90 ? "#fff" : "#111",
        }}
      >
        {value === 90 && "90%"}
      </div>
    </div>
  </div>
);

const StatsCard = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(25, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-2 relative   py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4 items-stretch">
        {/* LEFT CARD */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-80 col-span-1">
          <div>
            <div className="flex items-start leading-none">
              <span className="text-7xl font-bold text-gray-950">{count}</span>
              <span className="text-4xl font-light text-gray-300 mt-2">+</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Years of experience</p>
            <hr className="my-4 border-gray-100" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Explore how we transform ideas into extraordinary digital
              experiences.
            </p>
          </div>
          <div>
            <div className="flex -space-x-2 mb-2">
              {[
                "/src/assets/imgi_56_home1-team-img1-min-450x450.png",
                "/src/assets/imgi_57_home1-team-img2-min-450x450.png",
                "/src/assets/imgi_58_home1-team-img3-min-450x450.png",
                "/src/assets/imgi_59_home1-team-img4-min-450x450.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              1200+ happy users review
            </p>
          </div>
        </div>

        {/* CENTER CARD */}
        <div className=" relative rounded-3xl  min-h-80 bg-gray-900">
          <img
            data-aos="fade-down"
            src="/src/assets/home1-author-img1.webp"
            alt="CEO"
            className="w-full h-full object-cover object-top absolute inset-0 -top-12    "
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <img
              src="/src/assets/home-1-icon1.svg"
              alt="badge"
              className="w-16 opacity-90"
            />
            <img
              src="/src/assets/home-1-icon2.svg"
              alt="badge"
              className="w-16 opacity-90"
            />
          </div>

          {/* Quote */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-sm md:text-base leading-relaxed mb-3">
              " At Floka, we merge strategy, creativity, and technology to shape
              brands that people love. "
            </p>
            <p className="text-gray-300 text-xs">
              Merizo H. Yelso <span className="text-gray-500">/CEO</span>
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl p-6 flex flex-col gap-6 min-h-80">
          {/* Follow us */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Follow us</p>
            <p className="text-lg font-semibold text-gray-900 mb-3">
              For check updates
            </p>
            <div className="flex flex-wrap gap-2">
              {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map((s) => (
                <span
                  key={s}
                  className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Impressions */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Impressions</p>
            {[
              { label: "Solutions", value: 100 },
              { label: "UI/UX", value: 90 },
              { label: "Explore", value: 72 },
            ].map((item) => (
              <div key={item.label} className="mb-2">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold transition-all duration-1000"
                    style={{
                      width: visible ? `${item.value}%` : "0%",
                      backgroundColor: item.label === "UI/UX" ? "#111" : "gray",
                      color: item.label === "UI/UX" ? "#fffF" : "transparent",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
