import React from "react";
import SectionTitle from "../../components/SectionTitle";
import portrait from "../../assets/Portrait.png";

// Data extracted to keep the JSX clean
const technologies = [
  { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", className: "bg-white rounded p-1" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "GODOT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/prisma.svg", className: "bg-white rounded p-1" },
  { name: "PostgreSQL", src: "https://static.cdnlogo.com/logos/p/12/postgresql_800.png" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg", className: "bg-white rounded p-1" },
  { name: "Supabase", src: "https://static.cdnlogo.com/logos/s/59/supabase-icon.svg" },
  { name: "TypeScript", src: "https://static.cdnlogo.com/logos/t/14/typescript.svg" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg", className: "bg-white rounded p-1" },
  { name: "Postman", src: "https://static.cdnlogo.com/logos/p/20/postman.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

function About() {
  return (
    <section id="about" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-16">
          <SectionTitle title="About me" />
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-24">
            {/* Removed 'group' class as hover state is no longer needed here */}
            <div className="relative w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[28rem] xl:w-96 xl:h-[34rem]">
              {/* Glow Effect - Removed group-hover:blur-3xl and transitions */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-tertiary/30 rounded-3xl blur-2xl"></div>
              
              {/* Image - Removed group-hover:scale and transitions */}
              <img
                src={portrait}
                alt="Mel Christopher Portanoova"
                className="relative w-full h-full object-cover shadow-2xl rounded-3xl border-2 border-white/10"
                loading="eager"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6 text-white/90">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-left">
              Hello! My name is <span className="text-tertiary font-medium">Mel Christopher Portanoova</span>. 
              I am a passionate software developer with a strong background in building modern web
              applications using JavaScript, React, and other cutting-edge
              technologies. I enjoy solving complex problems, learning new tools,
              and collaborating with others to create impactful digital
              experiences.
            </p>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-left">
              When I'm not coding, I love exploring new tech trends and working on 
              personal projects to sharpen my skills. My journey in web development began in high school, 
              where I discovered my enthusiasm for creating interactive websites.
            </p>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-left">
              I graduated from Camarines Sur Polytechnic Colleges with a Bachelor of
              Science in Computer Science. During my studies, I gained a solid
              foundation in programming, algorithms, and software engineering
              principles, which I continue to build upon in my professional and
              personal projects.
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-tertiary text-lg sm:text-xl lg:text-2xl font-semibold mb-8 lg:mb-12 text-center">
            Here are a few technologies I've been working with recently:
          </h3>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12 lg:gap-x-16 lg:gap-y-16 max-w-5xl">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative flex items-center justify-center">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(84,214,187,0.6)] ${tech.className || ''}`}
                  />
                </div>
                <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;