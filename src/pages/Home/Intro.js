import React from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex items-center justify-start z-10">
      <div className="flex flex-col items-start justify-center gap-6 lg:gap-8 w-3/4 lg:w-2/3 text-justify sm:gap-4 sm:w-full h-full p-8 lg:p-16 sm:p-6">
        <h1 className="text-white/90 text-lg lg:text-2xl font-light sm:text-md animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          Hi, I am
        </h1>
        <h1 className="text-4xl lg:text-5xl text-secondary font-bold sm:text-2xl sm:text-nowrap animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Mel Christopher Portanova
        </h1>
        <h1 className="text-3xl lg:text-3xl sm:text-lg sm:text-nowrap text-white font-semibold animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          A Full Stack Developer.
        </h1>
        <p className="text-white/80 text-base lg:text-lg mt-4 lg:mt-6 leading-relaxed max-w-2xl sm:text-sm sm:mt-3 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          I am a Full Stack Developer with a passion for creating dynamic and
          responsive web applications. With experience in both front-end and
          back-end technologies, I enjoy building seamless user experiences and
          robust, scalable solutions. I am always eager to learn new tools and
          frameworks, and I thrive on solving complex problems through code.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="border-2 border-tertiary text-tertiary px-8 lg:px-12 py-3 lg:py-4 rounded-lg hover:bg-tertiary hover:text-primary transition-all duration-300 font-medium shadow-lg shadow-tertiary/20 hover:shadow-tertiary/40 hover:scale-105 active:scale-95 sm:px-6 sm:py-2 sm:text-sm sm:mt-4 animate-fadeIn"
          style={{ animationDelay: "0.5s" }}
          aria-label="Get in touch"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Intro;
