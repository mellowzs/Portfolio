import React, { useState, useRef, useLayoutEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
import ModernDropdown from "../../components/ModernDropdown";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [height, setHeight] = useState("auto");
  const contentRef = useRef(null);

  // Measure height after content changes
  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
    }
  }, [selectedItemIndex, fadeKey]);

  const handleSelect = (index) => {
    if (index !== selectedItemIndex) {
      setFadeKey((prev) => prev + 1);
      setSelectedItemIndex(index);
    }
  };

  return (
    <div id="experiences" className="py-12 lg:py-16">
      <div className="mb-8 lg:mb-12">
        <SectionTitle title="Experience" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Experience selection - Desktop: Left sidebar, Mobile: Dropdown */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="lg:border-l-2 lg:border-[#135e4c82] sm:border-b-2 sm:border-[#135e4c82] sm:pb-6 lg:pl-8">
            {/* Mobile Dropdown */}
            <div className="sm:block lg:hidden">
              <ModernDropdown
                options={experiences}
                value={selectedItemIndex}
                onChange={handleSelect}
                getOptionLabel={(experience) => experience.period}
                ariaLabel="Select experience"
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col gap-3">
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`experience-tab group relative text-left px-4 py-3 rounded-lg transition-all duration-300
                    ${
                      selectedItemIndex === index
                        ? "text-tertiary bg-[#1a7f5a24] border-l-4 border-tertiary shadow-lg shadow-tertiary/20"
                        : "text-white/70 hover:text-white hover:bg-[#1a7f5a12]"
                    }`}
                  aria-label={`Select ${experience.period} experience`}
                  aria-pressed={selectedItemIndex === index}
                >
                  <span className="text-lg font-medium relative z-10">
                    {experience.period}
                  </span>
                  {selectedItemIndex === index && (
                    <span className="absolute inset-0 bg-gradient-to-r from-tertiary/10 to-transparent rounded-lg"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Animated height wrapper */}
        <div
          style={{
            height,
            transition: "height 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className="flex-1 min-w-0"
        >
          <div
            ref={contentRef}
            key={fadeKey}
            className="flex flex-col gap-4 lg:gap-6 text-justify"
          >
            <h1
              className="text-secondary text-2xl lg:text-3xl font-bold opacity-0 animate-fadeInLeft sm:text-xl"
              style={{
                animation: "fadeInLeft 0.7s forwards",
                animationDelay: "0.1s",
              }}
            >
              {experiences[selectedItemIndex].title}
            </h1>
            <h2
              className="text-tertiary text-xl lg:text-2xl font-semibold opacity-0 animate-fadeInLeft sm:text-lg"
              style={{
                animation: "fadeInLeft 0.7s forwards",
                animationDelay: "0.4s",
              }}
            >
              {experiences[selectedItemIndex].company}
            </h2>
            <p
              className="text-white text-base lg:text-lg leading-relaxed opacity-0 animate-fadeInLeft sm:text-sm"
              style={{
                animation: "fadeInLeft 0.7s forwards",
                animationDelay: "0.7s",
              }}
            >
              {experiences[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
