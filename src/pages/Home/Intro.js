import React from "react";

function Intro() {
  return (
    <div className="absolute inset-0 flex items-center justify-start z-10">
      <div className="bg-opacity-80 flex flex-col items-start justify-center gap-8 w-3/4 text-justify sm:gap-2 sm:w-full h-full p-8">
        <h1 className="text-white sm:text-xs">Hi, I am </h1>
        <h1 className="text-6xl text-secondary font-semibold sm:text-2xl sm:text-nowrap">
          Mel Christopher Portanova
        </h1>
        <h1 className="text-4xl sm:text-lg sm:text-nowrap text-white font-semibold">
          A Full Stack Developer.
        </h1>
        <p className="text-white text-base mt-5 sm:text-xs">
          I am a Full Stack Developer with a passion for creating dynamic and
          responsive web applications. With experience in both front-end and
          back-end technologies, I enjoy building seamless user experiences and
          robust, scalable solutions. I am always eager to learn new tools and
          frameworks, and I thrive on solving complex problems through code.
        </p>
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded hover:bg-tertiary hover:text-white transition-colors duration-200 sm:px-3 sm:text-xs sm:mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;
