import React from "react";
import SectionTitle from "../../components/SectionTitle";
import portrait from "../../assets/Portrait.png"; // Adjust the path as necessary

function About() {
  return (
    <div id="about">
      <SectionTitle title="About me" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="flex items-center justify-center h-[70vh] w-1/3 sm:w-full sm:h-[40vh]">
          <img
            src={portrait}
            alt="Mel Christopher Portanoova"
            className="h-5/6 object-cover rounded-full shadow-lg border-2 border-secondary"
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 text-justify sm:w-full">
          <p className="text-white text-lg sm:text-xs">
            Hello! My name is Mel Christopher Portanoova. I am a passionate
            software developer with a strong background in building modern web
            applications using JavaScript, React, and other cutting-edge
            technologies. I enjoy solving complex problems, learning new tools,
            and collaborating with others to create impactful digital
            experiences. When I'm not coding, I love exploring new tech trends
            and working on personal projects to sharpen my skills.
          </p>
          <p className="text-white text-lg sm:text-xs">
            My journey in web development began in high school, where I
            discovered my enthusiasm for creating interactive websites. I
            graduated from Camarines Sur Polytechnic Colleges with a Bachelor of
            Science in Computer Science. During my studies, I gained a solid
            foundation in programming, algorithms, and software engineering
            principles, which I continue to build upon in my professional and
            personal projects.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-2xl sm:text-xs">
          Here are a few technologies I've been working with recently:
        </h1>
        <div
          className="flex flex-wrap gap-16 mt-10 justify-center sm:gap-12
            [&>div]:flex [&>div]:flex-col [&>div]:items-center 
            [&>div>img]:w-12 [&>div>img]:h-12 sm:[&>div>img]:w-6 sm:[&>div>img]:h-6
            [&>div>span]:text-white [&>div>span]:text-xs [&>div>span]:mt-2"
        >
          {/* React */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <span>React.js</span>
          </div>
          {/* HTML */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
            />
            <span>HTML5</span>
          </div>
          {/* CSS */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
            />
            <span>CSS3</span>
          </div>
          {/* TailwindCSS */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="TailwindCSS"
            />
            <span>TailwindCSS</span>
          </div>
          {/* JavaScript */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <span>JavaScript</span>
          </div>
          {/* MongoDB */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
            <span>MongoDB</span>
          </div>
          {/* Express */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="Express"
              className="bg-white rounded"
            />
            <span>Express</span>
          </div>
          {/* MySQL */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
            />
            <span>MySQL</span>
          </div>
          {/* PHP */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
            />
            <span>PHP</span>
          </div>
          {/* Python */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
            <span>Python</span>
          </div>
          {/* Godot */}
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"
              alt="Godot"
            />
            <span>GODOT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
