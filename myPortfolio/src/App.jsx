import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/skill";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
