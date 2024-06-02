import "./Projects.css";

import { Gradient, ProjectCard } from "../../components";
import projectsData from "./ProjectsData";

function Projects() {
    return (
        <section className="section" id="projects">
            <h1 className="section-title">
                <Gradient text={"Things I've Built"} />
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <ul className="projects-list">
                        {
                            projectsData.map((project, index) => (
                                <li key={index}>
                                    <ProjectCard project={project} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;
