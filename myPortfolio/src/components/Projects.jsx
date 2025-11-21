import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Tilt from "react-parallax-tilt";


// ICONS ============================================
import { IoMdLink } from "react-icons/io";

// PROJECT - IMAGES =================================
import bg1 from "../assets/x-clone.png";
import bg2 from "../assets/wonderlust.png";
import bg3 from "../assets/weather-app.png";

export default function Projects() {

    // CORRECT CONFIG FOR react-multi-carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1200, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 550 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 550, min: 0 },
            items: 1
        }
    };

    const items = [
        { id: 1, title: 'X - Clone', image: bg1, url: "https://github.com/shubhamjaiswar43/xClone" },
        { id: 2, title: 'Wonderlust - Hotel Listing Website', image: bg2, url: "https://github.com/Komalbelge345/wanderlust-project" },
        { id: 3, title: 'Weather App', image: bg3, url: "https://github.com/Komalbelge345/Weather-App" },
    ];

    return (
        <div id='projects'>
            <div className="px-3 sm:px-10 md:px-16 pb-10">

                {/* PROJECTS HEADING */}
                <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className='text-lg font-bold uppercase text-slate-500 text-nowrap'>Projects</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>

                <div className="pt-6 w-full block">
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        arrows={false}
                        swipeable={true}
                        draggable={true}
                        infinite={true}
                        keyBoardControl={true}
                        itemClass="px-2"
                    >
                        {items.map((item, index) => (
                            <div className="card h-full flex-1 rounded-lg relative" key={index}>
                                <div className="h-full border-[2px] border-slate-700 shadow-sm rounded-lg">

                                    {/* IMAGE */}
                                    <div className="h-[400px] w-full">
                                        <Tilt
                                            className="h-full w-full"
                                            tiltMaxAngleX={10}
                                            tiltMaxAngleY={10}
                                            scale={1}
                                            glareEnable={false}
                                        >
                                            <a href={item.url} target="_blank">
                                                <img
                                                    className="object-cover h-full w-full rounded-t-md"
                                                    src={item.image}
                                                    alt={item.title}
                                                    title={item.title}
                                                />
                                            </a>
                                        </Tilt>
                                    </div>

                                    {/* TITLE */}
                                    <div className="flex justify-end p-2">
                                        <h1 className="text-md font-semibold">{item.title}</h1>
                                    </div>
                                </div>

                                {/* LINK ICON */}
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className="cursor-pointer absolute bottom-[11%] left-[5%] h-[40px] w-[40px] bg-white shadow-md rounded-full flex items-center justify-center"
                                >
                                    <IoMdLink />
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </div>

            </div>
        </div>
    );
}
