import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tilt from "react-parallax-tilt";
import { IoMdLink } from "react-icons/io";

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
        { id: 1, title: "X - Clone", image: bg1, url: "https://github.com/Komalbelge345/xClone" },
        { id: 2, title: "Wonderlust - Hotel Listing Website", image: bg2, url: "https://github.com/Komalbelge345/wanderlust-project" },
        { id: 3, title: "Weather App", image: bg3, url: "https://github.com/Komalbelge345/Weather-App" },
    ];

    return (
        <div id="projects">
            <div className="px-3 sm:px-10 md:px-16 pb-10">

                {/* Heading */}
                <div className="mb-5 flex items-center gap-3 px-4 md:px-0">
                    <div className="h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className="text-lg font-bold uppercase text-slate-500">Projects</h1>
                    <div className="h-[1.5px] w-full bg-slate-300"></div>
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
        <div className="border-2 border-slate-700 rounded-xl shadow-md relative bg-white w-full h-[480px]">
            <div className="h-[380px] w-full">
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                    <a href={item.url} target="_blank">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover h-full w-full rounded-t-xl"
                        />
                    </a>
                </Tilt>
            </div>

            <div className="p-3 flex justify-between items-center">
                <h1 className="text-md font-semibold">{item.title}</h1>
            </div>

            {/* Link Icon */}
            <a
                href={item.url}
                target="_blank"
                className="absolute bottom-4 left-4 h-[40px] w-[40px] bg-white rounded-full shadow flex items-center justify-center"
            >
                <IoMdLink />
            </a>
        </div>
    );
}
