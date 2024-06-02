import '../../sections/section.css';

import { Footer, Navbar, ScrollProgress } from '../../components';
import {
    AboutSection,
    CPSection,
    ExperienceSection,
    HeroSection,
    ProjectsSection,
    SkillsSection,
    EducationSection,
    ContactSection
} from '../../sections';

function HomePage() {
    return (
        <div>
            <Navbar nav_sections={[
                "About",
                "Projects",
                "Skills",
                "Experience",
                "Competitive Programming",
                "Education",
                "Contact"
            ]} />

            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <CPSection />
            <EducationSection />
            <ContactSection />

            <ScrollProgress />

            <Footer />
        </div>
    );
}

export default HomePage;
