import React, { useState, useRef, useLayoutEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import EmblaCarousel from "../../resources/emblaCarousel";
import ModernDropdown from "../../components/ModernDropdown";

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
    <div id="projects" className="py-12 lg:py-16">
      {/* Section title */}
      <div className="flex justify-end mb-8 lg:mb-12">
        <SectionTitle className="flex flex-row-reverse" title="Projects" />
      </div>

      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Project selection - Desktop: Left sidebar, Mobile: Dropdown */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="lg:border-r-2 lg:border-[#135e4c82] sm:border-b-2 sm:border-[#135e4c82] sm:pb-6 lg:pr-8">
            {/* Mobile Dropdown */}
            <div className="sm:block lg:hidden">
              <ModernDropdown
                options={projects}
                value={selectedItemIndex}
                onChange={handleSelect}
                getOptionLabel={(project) => project.title}
                ariaLabel="Select project"
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col gap-3">
              {projects.map((project, index) => (
                <button
                  key={project._id}
                  onClick={() => handleSelect(index)}
                  className={`project-tab group relative text-left px-4 py-3 rounded-lg transition-all duration-300
                    ${
                      selectedItemIndex === index
                        ? "text-tertiary bg-[#1a7f5a24] border-l-4 border-tertiary shadow-lg shadow-tertiary/20"
                        : "text-white/70 hover:text-white hover:bg-[#1a7f5a12]"
                    }`}
                  aria-label={`Select ${project.title} project`}
                  aria-pressed={selectedItemIndex === index}
                >
                  <span className="text-lg font-medium relative z-10">
                    {project.title}
                  </span>
                  {selectedItemIndex === index && (
                    <span className="absolute inset-0 bg-gradient-to-r from-tertiary/10 to-transparent rounded-lg"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected project content */}
        <div
          key={fadeKey}
          className="flex-1 flex flex-col gap-6 lg:gap-8 min-w-0"
        >
          <h1
            className="text-secondary text-3xl lg:text-4xl font-bold opacity-0 animate-fadeInRight sm:text-xl"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.1s",
            }}
          >
            {projects[selectedItemIndex].title}
          </h1>
          
          <div
            className="w-full opacity-0 animate-fadeInRight"
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
            className="text-white text-justify text-base lg:text-lg leading-relaxed opacity-0 animate-fadeInRight sm:text-sm"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.5s",
            }}
          >
            {projects[selectedItemIndex].description}
          </p>
          
          <div
            ref={contentRef}
            className="flex flex-wrap gap-3 opacity-0 animate-fadeInRight items-center"
            style={{
              animation: "fadeInRight 0.7s forwards",
              animationDelay: "0.7s",
              height: height,
            }}
          >
            {projects[selectedItemIndex].technologies.map((tech, idx) => (
              <span
                key={idx}
                className="border-2 border-tertiary text-tertiary px-4 py-2 rounded-full text-sm font-medium bg-transparent hover:bg-[#1a7f5a24] transition-all duration-200 sm:text-xs sm:px-3 sm:py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() =>
              window.open(projects[selectedItemIndex].link, "_blank")
            }
            className="self-start border-2 border-tertiary text-tertiary px-8 py-3 rounded-lg hover:bg-tertiary hover:text-primary transition-all duration-300 font-medium shadow-lg shadow-tertiary/20 hover:shadow-tertiary/40 hover:scale-105 active:scale-95 opacity-0 animate-fadeInRight sm:px-6 sm:py-2 sm:text-sm"
            style={{
              animation: "fadeInRight 0.5s forwards",
              animationDelay: "0.8s",
            }}
            aria-label={`Visit ${projects[selectedItemIndex].title} project`}
          >
            View Project →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
