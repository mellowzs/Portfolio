import React from "react";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-transparent backdrop-blur-lg shadow-lg border-b-2 border-white/20">
      <div className="p-2 flex">
        {/* Logo/Brand */}
        <div className="flex ml-5 sm:text-base text-4xl justify-start">
          <h1 className="text-secondary font-semibold">M</h1>
          <h1 className="text-white font-semibold">C</h1>
          <h1 className="text-white font-semibold">B</h1>
          <h1 className="text-tertiary font-semibold">P</h1>
        </div>
        {/* Navbar */}
        <nav className="flex px-5 py-1 ml-auto gap-7 text-xl sm:text-xs sm:gap-1">
          <a
            href="#about"
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#experiences"
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </a>
          <a
            href="#courses"
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Courses
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
