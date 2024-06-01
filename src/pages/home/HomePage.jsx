import '../../sections/section.css';

import About from '../../sections/about/About';
import Contact from '../../sections/Contact';
import Education from '../../sections/education/Education';
import CompetitiveProgramming from '../../sections/cp/CompetitiveProgramming';
import Experience from '../../sections/Experience';
import Hero from '../../sections/hero/Hero';
import Projects from '../../sections/Projects';
import Skills from '../../sections/Skills';

import { Navbar, ScrollProgress } from '../../components';

function HomePage() {
    return (
        <div>
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
            <CompetitiveProgramming />
            <Education />
            <Contact />

            <ScrollProgress />
        </div>
    );
}

export default HomePage;
