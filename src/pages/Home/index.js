import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import VantaBackground from "../../resources/VantaBackground";
import Footer from "../../components/Footer";

function Home() {
  const [gradientOpacity, setGradientOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 600;
      const scroll = Math.min(window.scrollY, maxScroll);
      const opacity = (scroll / maxScroll) * 1;
      setGradientOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />

      {/* Hero Section with Vanta + Intro */}
      <div className="w-full h-screen">
        <VantaBackground />
        <Intro />
      </div>

      {/* Rest of the page */}
      <div className="relative px-6 sm:px-6">
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A192F] via-[#0A192F] to-[#0A192F] z-0"
          style={{ opacity: gradientOpacity }}
        />
        <div className="relative z-10">
          <About />
          <Experiences />
          <Projects />
          <Courses />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
