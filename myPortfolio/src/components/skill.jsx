import React from "react";
import Tilt from "react-parallax-tilt";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { TbBrandJavascript } from "react-icons/tb";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSocketdotio,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

export default function Skill() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-20"
    >
      <div className="px-6 sm:px-10 md:px-16 pb-16">
        {/* Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-[1.5px] w-full bg-slate-700"></div>
          <h1 className="text-lg font-bold uppercase text-slate-400 whitespace-nowrap">
            Skills
          </h1>
          <div className="h-[1.5px] w-full bg-slate-700"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Component */}
          {[
            {
              title: "Frontend",
              items: [
                { icon: <FaHtml5 />, name: "HTML" },
                { icon: <FaCss3Alt />, name: "CSS" },
                { icon: <TbBrandJavascript />, name: "JavaScript" },
                { icon: <FaBootstrap />, name: "Bootstrap" },
                { icon: <SiTailwindcss />, name: "Tailwind" },
                { icon: <FaReact />, name: "React" },
              ],
            },
            {
              title: "Backend",
              items: [
                { icon: <FaNodeJs />, name: "Node JS" },
                { icon: <SiExpress />, name: "Express JS" },
                { icon: <SiSocketdotio />, name: "Socket IO" },
              ],
            },
            {
              title: "Database & Tools",
              items: [
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiPostman />, name: "Postman" },
                { icon: <FaGitAlt />, name: "Git" },
                { icon: <BiLogoVisualStudio />, name: "VS Code" },
              ],
            },
          ].map((section, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              className="rounded-2xl"
            >
              <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-6 text-cyan-400">
                  {section.title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {section.items.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/20 transition"
                    >
                      {skill.icon}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
