import React from "react";
import { FaCircle, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import komalBelge from "../assets/KomalImg1.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-20"
    >
      <div className="px-4 sm:px-10 md:px-16 pb-16">
        {/* Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-[1.5px] w-full bg-slate-600"></div>
          <h1 className="text-lg font-bold uppercase text-slate-400 whitespace-nowrap">
            About Me
          </h1>
          <div className="h-[1.5px] w-full bg-slate-600"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT SIDE — TEXT */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hey <span className="text-blue-500">There!</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Hello, I'm{" "}
              <span className="font-semibold text-white">Komal Belge</span>, a
              dedicated third-year student pursuing{" "}
              <span className="font-semibold text-white">
                Artificial Intelligence & Data Science
              </span>
              . I am passionate about building impactful digital solutions and
              creating meaningful user experiences.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              My primary focus is{" "}
              <span className="font-semibold text-white">
                MERN Stack Development
              </span>{" "}
              and problem-solving.
            </p>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              I also have a strong interest in{" "}
              <span className="font-semibold text-white">
                Artificial Intelligence and Machine Learning
              </span>
              , and I am continuously learning how to build intelligent systems
              that solve real-world problems.
            </p>

            {/* Connect Section */}
            <h2 className="mt-8 mb-4 text-md font-bold text-white">
              Connect With Me
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/komal-belge-159636336/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-sm rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="https://github.com/Komalbelge345"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-gray-600 to-black font-semibold text-sm rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="mailto:shridevi929292@gmail.com?subject=Message%20From%20Portfolio"
                className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 font-semibold text-sm rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <MdMarkEmailUnread /> Email
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center">
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
            >
              <div className="border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
                {/* Top bar design */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800">
                  <FaCircle className="text-blue-500 text-xs" />
                  <FaCircle className="text-purple-500 text-xs" />
                  <FaCircle className="text-pink-500 text-xs" />
                </div>

                <img
                  src={komalBelge}
                  alt="Komal Belge"
                  className="w-full h-[320px] sm:h-[360px] md:h-[380px] lg:h-[420px] object-cover object-top"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
