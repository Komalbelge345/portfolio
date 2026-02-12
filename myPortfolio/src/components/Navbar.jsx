import React, { useRef } from "react";

const Navbar = () => {
  const navList = useRef();

  const handleBurgerClick = () => {
    navList.current.classList.toggle("-translate-x-full");
  };

  return (
    <nav
      className="mt-3 mx-3 h-14 
      bg-slate-900/80 backdrop-blur-md 
      border border-slate-800 
      text-white rounded-xl 
      sticky top-3 z-50 
      flex items-center justify-between px-6"
    >
      {/* LEFT SIDE LOGO (Always Visible) */}
      <a href="#home" className="flex items-center gap-3">
        <div
          className="h-10 w-10 flex items-center justify-center
    bg-gradient-to-br from-cyan-500 to-blue-600
    rounded-lg text-white font-bold text-lg shadow-lg"
        >
          KB
        </div>
      </a>

      {/* Burger Icon (Mobile Only) */}
      <div
        onClick={handleBurgerClick}
        className="cursor-pointer sm:hidden flex flex-col space-y-1"
      >
        <span className="bg-white h-1 w-6 rounded"></span>
        <span className="bg-white h-1 w-6 rounded"></span>
        <span className="bg-white h-1 w-6 rounded"></span>
      </div>

      {/* Nav Links */}
      <ul
        ref={navList}
        className="
        bg-slate-900 sm:bg-transparent
        absolute sm:static
        top-0 left-0
        w-64 sm:w-auto
        h-screen sm:h-auto
        pt-16 sm:pt-0
        px-8 sm:px-0
        flex flex-col sm:flex-row
        sm:justify-end
        sm:items-center
        space-y-6 sm:space-y-0
        sm:space-x-8
        text-lg
        transform -translate-x-full sm:translate-x-0
        transition-transform duration-300
        "
      >
        <a
          href="#home"
          className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
        >
          Home
        </a>

        <a
          href="#about"
          className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
        >
          About
        </a>

        <a
          href="#skills"
          className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
        >
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
