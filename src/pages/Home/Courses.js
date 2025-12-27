import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";
import ModernDropdown from "../../components/ModernDropdown";

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
    <div id="courses" className="py-12 lg:py-16 pb-20 lg:pb-24">
      <div className="mb-8 lg:mb-12">
        <SectionTitle title="Courses" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Course selection - Desktop: Left sidebar, Mobile: Dropdown */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="lg:border-l-2 lg:border-[#135e4c82] sm:border-b-2 sm:border-[#135e4c82] sm:pb-6 lg:pl-8">
            {/* Mobile Dropdown */}
            <div className="sm:block lg:hidden">
              <ModernDropdown
                options={courses}
                value={selectedItemIndex}
                onChange={handleSelect}
                getOptionLabel={(course) => course.title}
                ariaLabel="Select course"
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col gap-3">
              {courses.map((course, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`course-tab group relative text-left px-4 py-3 rounded-lg transition-all duration-300
                    ${
                      selectedItemIndex === index
                        ? "text-tertiary bg-[#1a7f5a24] border-l-4 border-tertiary shadow-lg shadow-tertiary/20"
                        : "text-white/70 hover:text-white hover:bg-[#1a7f5a12]"
                    }`}
                  aria-label={`Select ${course.title} course`}
                  aria-pressed={selectedItemIndex === index}
                >
                  <span className="text-lg font-medium relative z-10">
                    {course.title}
                  </span>
                  {selectedItemIndex === index && (
                    <span className="absolute inset-0 bg-gradient-to-r from-tertiary/10 to-transparent rounded-lg"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course content */}
        <div
          key={fadeKey}
          className="flex-1 flex flex-col gap-4 lg:gap-6 min-w-0"
        >
          <h1
            className="text-secondary text-2xl lg:text-3xl font-bold opacity-0 animate-fadeInLeft sm:text-xl"
            style={{
              animation: "fadeInLeft 0.7s forwards",
              animationDelay: "0.1s",
            }}
          >
            {courses[selectedItemIndex].title}
          </h1>
          <p
            className="text-white text-base lg:text-lg leading-relaxed opacity-0 animate-fadeInLeft sm:text-sm"
            style={{
              animation: "fadeInLeft 0.7s forwards",
              animationDelay: "0.4s",
            }}
          >
            {courses[selectedItemIndex].description}
          </p>
          {courses[selectedItemIndex].link && (
            <a
              href={courses[selectedItemIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-32 items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-tertiary text-black font-medium hover:opacity-95 transition"
            >
              Visit course
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
