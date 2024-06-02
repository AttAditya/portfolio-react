import "./Projects.css";

import { Gradient, ProjectCard } from "../../components";
import projectsData from "./ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";

function Projects() {
    let accountsData = [
        {
            url: "https://github.com/AttAditya",
            icon: faGithub,
            name: "AttAditya"
        },
        {
            url: "https://github.com/Attachment-Studios",
            icon: faGithub,
            name: "Attachment Studios(GitHub)"
        },
        {
            url: "https://attachment-studios.itch.io/",
            icon: faItchIo,
            name: "Attachment Studios(itch.io)"
        }
    ];

    return (
        <section className="section" id="projects">
            <h1 className="section-title">
                <Gradient text={"Things I've Built"} />
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <div className="accounts">
                        <h2 className="accounts-title">
                            Find my projects on
                        </h2>

                        <ul className="accounts-list">
                            {
                                accountsData.map((account, index) => (
                                    <li key={index} className="account">
                                        <a href={account.url} target="_blank" rel="noopener noreferrer" className="account-link">
                                            <button className="account-button">
                                                <FontAwesomeIcon icon={account.icon} className="account-icon" />
                                                <span className="account-name">
                                                    <Gradient text={account.name} />
                                                </span>
                                            </button>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

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
