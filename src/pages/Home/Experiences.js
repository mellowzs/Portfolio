import React, { useState, useRef, useLayoutEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

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
    <div id="experiences">
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 lg:border-l-2 sm:border-b-2 border-[#135e4c82] self-start sm:flex-row sm:overflow-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 sm:text-base sm:w-full whitespace-nowrap transition-all duration-700
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary lg:border-l-4 sm:border-b-2 -ml-[3px] bg-[#1a7f5a24] py-4"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        {/* Animated height wrapper */}
        <div
          style={{
            height,
            transition: "height 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className="w-1/2 sm:w-full sm:ml-1 ml-32"
        >
          <div
            ref={contentRef}
            key={fadeKey}
            className="flex flex-col gap-5 text-justify sm:text-xs"
          >
            <h1
              className="text-secondary text-2xl opacity-0 animate-fadeInLeft"
              style={{
                animation: "fadeInLeft 0.7s forwards",
                animationDelay: "0.1s",
              }}
            >
              {experiences[selectedItemIndex].title}
            </h1>
            <h1
              className="text-tertiary text-1xl opacity-0 animate-fadeInLeft"
              style={{
                animation: "fadeInLeft 0.7s forwards",
                animationDelay: "0.4s",
              }}
            >
              {experiences[selectedItemIndex].company}
            </h1>
            <h1
              className="text-white opacity-0 animate-fadeInLeft"
              style={{
                animation: "fadeInLeft 0.7s forwards",
                animationDelay: "0.7s",
              }}
            >
              {experiences[selectedItemIndex].description}
            </h1>
          </div>
        </div>

        <div className="h-[40vh]">
          <dotlottie-player
            src="https://lottie.host/ef26e260-9d13-4f42-97d6-0cd94c6ceea5/zKCvefg7GA.lottie"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
