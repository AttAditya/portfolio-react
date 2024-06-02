import "./Projects.css";

import { Gradient, ProjectCard } from "../../components";
import projectsData from "./ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { SiScratch } from "react-icons/si";

function Projects() {
    let accountsData = [
        {
            url: "https://github.com/AttAditya",
            icon: (<FontAwesomeIcon icon={faGithub} className="account-icon" />),
            name: "AttAditya"
        },
        {
            url: "https://github.com/Attachment-Studios",
            icon: (<FontAwesomeIcon icon={faGithub} className="account-icon" />),
            name: "Attachment Studios(GitHub)"
        },
        {
            url: "https://github.com/SyntLang",
            icon: (<FontAwesomeIcon icon={faGithub} className="account-icon" />),
            name: "SyntLang"
        },
        {
            url: "https://github.com/Tullax",
            icon: (<FontAwesomeIcon icon={faGithub} className="account-icon" />),
            name: "Tullax NFTs"
        },
        {
            url: "https://github.com/Berry-Foundations",
            icon: (<FontAwesomeIcon icon={faGithub} className="account-icon" />),
            name: "Berry Foundations"
        },
        {
            url: "https://attachment-studios.itch.io/",
            icon: (<FontAwesomeIcon icon={faItchIo} className="account-icon" />),
            name: "Attachment Studios(itch.io)"
        },
        {
            url: "https://scratch.mit.edu/users/Attachment/",
            icon: (<SiScratch />),
            name: "Attachment Studios(Scratch)"
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
                                                {account.icon}
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

                    <div className="projects">
                        <h2 className="projects-title">
                            All Projects (GitHub)
                        </h2>

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
            </div>
        </section>
    )
}

export default Projects;
