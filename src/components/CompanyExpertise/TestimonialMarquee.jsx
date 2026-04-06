import React from "react";
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default ?? MarqueeLib;
import image1 from '../../assets/imgi_51_home1-highlight2.jpg';
import image2 from '../../assets/imgi_52_home1-highlight3.jpg';
import image3 from '../../assets/imgi_55_home1-bg-img12-600x600.jpg';
import image4 from '../../assets/imgi_60_home3-author-4-450x450.png';

const testimonials = [
  {
    avatar: image1,
    quote: "Best design communicator",
  },
  {
    avatar: image2,
    quote: "10/10 well recommanded",
  },
  {
    avatar: image3,
    quote: "Creative and professional",
  },
  {
    avatar: image4,
    quote: "Exceptional quality",
  },
];

const TestimonialMarquee = () => {
  return (
    <section className="bg-black py-20 overflow-hidden">
      {/* gradient={false} removes the side shadows.
        speed controls the pixels per second.
        pauseOnHover is a nice UX touch.
      */}
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        className="flex items-center"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 mx-16 select-none"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-800">
              <img
                src={item.avatar}
                alt="user"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Quote */}
            <p className="text-white text-3xl md:text-5xl font-light tracking-tight">
              “ <span className="mx-2">{item.quote}</span> ”
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TestimonialMarquee;
