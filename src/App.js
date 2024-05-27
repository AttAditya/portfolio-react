import { useEffect } from 'react';

import './App.css';
import './sections/section.css';

import Navbar from './components/navbar/Navbar';

import About from './sections/about/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Hero from './sections/hero/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  useEffect(() => {
    document.title = "AttAditya";
  }, []);

  return (
    <div className="App">
      <Navbar nav_sections={[
        "About",
        "Projects",
        "Skills",
        "Experience",
        "Education",
        "Contact"
      ]} />
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
