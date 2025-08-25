import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const handleSelect = (index) => {
    if (index !== selectedItemIndex) {
      setFadeKey((prev) => prev + 1);
      setSelectedItemIndex(index);
    }
  };

  return (
    <div id="courses">
      <SectionTitle title="Courses" />

      <div className="relative flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 lg:border-l-4 sm:border-b-2 border-[#135e4c82] self-start sm:flex-row sm:overflow-scroll sm:w-full">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 sm:text-base sm:w-full whitespace-nowrap transition-all duration-700
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary lg:border-l-2 sm:border-b-2 -ml-[3px] bg-[#1a7f5a24] py-4"
                    : "text-white"
                }`}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div
          key={fadeKey}
          className="flex flex-col gap-5 w-1/2 text-justify sm:w-full sm:text-xs ml-32 sm:ml-1"
        >
          <h1
            className="text-secondary text-2xl opacity-0 animate-fadeInLeft"
            style={{
              animation: "fadeInLeft 0.7s forwards",
              animationDelay: "0.1s",
            }}
          >
            {courses[selectedItemIndex].title}
          </h1>
          <h1
            className="text-white opacity-0 animate-fadeInLeft"
            style={{
              animation: "fadeInLeft 0.7s forwards",
              animationDelay: "0.4s",
            }}
          >
            {courses[selectedItemIndex].description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Courses;
