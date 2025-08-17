import React from "react";

function Header() {
  return (
    <div className=" sticky top-0 z-50 bg-transparent backdrop-blur-lg shadow-lg border-b-2 border-white/20">
      <div className="p-2 flex">
        {/* Logo/Brand */}
        <div className="flex ml-5 sm:text-base text-4xl justify-start">
          <h1 className="text-secondary font-semibold">M</h1>
          <h1 className="text-white font-semibold">C</h1>
          <h1 className="text-white font-semibold">B</h1>
          <h1 className="text-tertiary font-semibold">P</h1>
        </div>
        {/* Navbar */}
        <nav className="flex ml-auto gap-2 text-xl sm:text-xs sm:gap-1">
          <a
            href="#about"
            className="text-white font-medium hover:text-secondary rounded transition-colors duration-300 px-3 py-1"
          >
            About
          </a>
          <a
            href="#experiences"
            className="text-white font-medium hover:text-secondary rounded transition-colors duration-300  px-3 py-1"
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="text-white font-medium hover:text-secondary rounded transition-colors duration-300 px-3 py-1"
          >
            Projects
          </a>
          <a
            href="#courses"
            className="text-white font-medium hover:text-secondary rounded transition-colors duration-300 px-3 py-1"
          >
            Courses
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
