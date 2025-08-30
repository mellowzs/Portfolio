import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-transparent backdrop-blur-lg shadow-lg border-b-2 border-white/20">
      <div className="p-2 flex">
        {/* Logo/Brand */}
        <div
          onClick={() => navigate("/")}
          className="flex ml-5 sm:text-base text-4xl justify-start cursor-pointer"
        >
          <h1 className="text-secondary font-semibold">M</h1>
          <h1 className="text-white font-semibold">C</h1>
          <h1 className="text-white font-semibold">B</h1>
          <h1 className="text-tertiary font-semibold">P</h1>
        </div>
        {/* Navbar */}
        <nav className="flex px-5 py-1 ml-auto gap-7 text-xl sm:text-xs sm:gap-1">
          {location.pathname !== "/" && (
            <button
              onClick={() => navigate("/")}
              className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </button>
          )}

          <button
            onClick={() => handleNavigation("about")}
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("experiences")}
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Experiences
          </button>
          <button
            onClick={() => handleNavigation("projects")}
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation("courses")}
            className="text-white font-medium hover:text-secondary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Courses
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
