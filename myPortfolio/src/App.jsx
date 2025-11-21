import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/skill';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      
    </>
     
  );
}

export default App
