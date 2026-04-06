import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Importing React Icons
import image1 from '../../assets/imgi_27_home1-bg-img2-655x450.webp';
import image2 from '../../assets/imgi_29_home1-bg-img1-655x450.webp';
import image3 from '../../assets/imgi_31_home1-accordion-img1-300x250.webp';
import image4 from '../../assets/imgi_31_home1-accordion-img1-300x250.webp';

const services = [
  {
    title: "User Interface & Experience Design",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
    tags: ["BRANDING", "MAGAZINE", "PRODUCT"],
    image: image1, // Replace with your image path
  },
  {
    title: "Web Development",
    description:
      "Building scalable, high-performance web applications using modern frameworks.",
    tags: ["REACT", "NEXTJS", "TAILWIND"],
    image: image2,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating engaging and functional mobile applications for iOS and Android platforms.",
      tags: ["iOS", "Android", "React Native"],
      image: image3,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces that enhance the user experience.",
      tags: ["Figma", "Sketch", "Adobe XD"],
      image: image4,
    }

];

const ServiceAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="border-b border-gray-800 py-8">
            <div
              className="flex items-start cursor-pointer group"
              onClick={() => toggleAccordion(index)}
            >
              {/* Icon Toggle */}
              <div className="mr-6 mt-1">
                <div className="border border-gray-700 rounded-full p-2 group-hover:border-white transition-colors">
                  {activeIndex === index ? (
                    <FiMinus size={20} />
                  ) : (
                    <FiPlus size={20} />
                  )}
                </div>
              </div>

              {/* Title & Content */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-medium mb-4">
                  {service.title}
                </h2>

                {/* Expandable Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-125 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div>
                    <p className="text-gray-400  mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 border border-gray-700 rounded-full text-xs font-semibold tracking-widest bg-zinc-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex justify-end">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl object-cover w-full max-w-[400px] h-64 shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;
