import React, { useState, useRef, useLayoutEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import EmblaCarousel from "../../resources/emblaCarousel";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [fadeKey, setFadeKey] = React.useState(0);
  const [height, setHeight] = useState("auto");
  const contentRef = useRef(null);

  // Measure height after content changes
  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
    }
  }, [selectedItemIndex, fadeKey]);

  const OPTIONS = {};

  const handleSelect = (index) => {
    if (index !== selectedItemIndex) {
      setFadeKey((prev) => prev + 1);
      setSelectedItemIndex(index);
    }
  };

  return (
    <div id="projects" className="py-10">
      {/* Section title */}
      <div className="flex justify-end">
        <SectionTitle className="flex flex-row-reverse" title="Projects" />
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-3 gap-10 py-10 md:grid-cols-1 sm:gap-5 item">
        {/* Selected project */}
        <div
          key={fadeKey}
          className="flex flex-col items-end gap-8 w-full sm:w-full sm:text-xs sm:ml-1 row-span-2 col-span-2 sm:col-span-3 sm:row-span-3"
        >
          <h1
            className="text-secondary text-2xl opacity-0 animate-fadeInRight"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.1s",
            }}
          >
            {projects[selectedItemIndex].title}
          </h1>
          <div
            className="w-full max-w-[800px] opacity-0 animate-fadeInRight"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.3s",
            }}
          >
            <EmblaCarousel
              slides={projects[selectedItemIndex].images}
              options={OPTIONS}
            />
          </div>

          <p
            className="text-white text-justify max-w-[800px] opacity-0 animate-fadeInRight"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.5s",
            }}
          >
            {projects[selectedItemIndex].description}
          </p>
          <div
            ref={contentRef}
            className="w-full max-w-[800px] flex flex-wrap gap-2 opacity-0 animate-fadeInRight"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.7s",
              height: height,
            }}
          >
            {projects[selectedItemIndex].technologies.map((tech, idx) => (
              <span
                key={idx}
                className="border border-tertiary text-tertiary px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() =>
              window.open(projects[selectedItemIndex].link, "_blank")
            }
            className="max-w-[800px] border-2 border-tertiary text-tertiary px-12 py-3 rounded hover:bg-tertiary hover:text-white transition-colors duration-200 sm:px-3 sm:text-xs sm:mt-6 opacity-0 animate-fadeInRight p-3 w-full sm:text-center"
            style={{
              animation: "fadeInRight 0.5s forwards",
              animationDelay: "0.8s",
            }}
          >
            Link
          </button>
        </div>

        {/* Project list */}
        <div className="flex lg:flex-row-reverse py-5 gap-1 sm:flex-col overflow-x-auto sm:col-span-full">
          <div className="flex flex-col gap-10 lg:border-r-2 sm:border-b-2 border-[#135e4c82] sm:flex-row overflow-x-auto">
            {projects.map((project, index) => (
              <div
                key={project._id}
                onClick={() => handleSelect(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-xl px-5 sm:text-base sm:w-full sm:whitespace-nowrap transition-all duration-700
                  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary lg:border-r-4 sm:border-b-2 -ml-[6px] bg-[#1a7f5a24] py-4"
                      : "text-white"
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
