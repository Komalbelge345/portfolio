import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";

// IMAGES
import bg1 from "../assets/x-clone.png";
import bg2 from "../assets/wonderlust.png";
import bg3 from "../assets/weather-app.png";

export default function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
  };

  const items = [
    {
      id: 1,
      title: "Twix",
      image: bg1,
      url: "https://github.com/Komalbelge345/xClone",
    },
    {
      id: 2,
      title: "Wonderlust - Hotel Listing Website",
      image: bg2,
      url: "https://github.com/Komalbelge345/wanderlust-project",
    },
    {
      id: 3,
      title: "Weather App",
      image: bg3,
      url: "https://github.com/Komalbelge345/Weather-App",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16"
    >
      <div className="px-3 sm:px-10 md:px-16">
        {/* Heading */}
        <div className="mb-10 flex items-center gap-3 px-4 md:px-0">
          <div className="h-[1.5px] w-full bg-slate-700"></div>
          <h1 className="text-lg font-bold uppercase text-slate-400 whitespace-nowrap">
            Projects
          </h1>
          <div className="h-[1.5px] w-full bg-slate-700"></div>
        </div>

        {/* DESKTOP: Carousel */}
        <div className="hidden md:block">
          <Carousel
            responsive={responsive}
            arrows={true}
            infinite={true}
            swipeable={true}
            draggable={true}
            itemClass="px-3"
          >
            {items.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>

        {/* MOBILE: horizontal scroll */}
        <div className="flex md:hidden gap-5 overflow-x-auto pb-4 px-2 no-scrollbar">
          {items.map((item) => (
            <div key={item.id} className="min-w-[85%]">
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 h-[480px] flex flex-col">
      {/* IMAGE SECTION */}
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} className="h-[250px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </Tilt>

      {/* CONTENT SECTION */}
      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h2 className="text-lg font-bold text-cyan-400 ">{item.title}</h2>
        </div>

        {/* GITHUB BUTTON */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:scale-105 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
        >
          <FaGithub className="text-lg" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
