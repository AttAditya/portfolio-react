import "./Skills.css";

import { Gradient, SkillCard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs, faNodeJs, faPython, faReact, faJava, faGit } from "@fortawesome/free-brands-svg-icons";
import { SiFlask, SiFastapi, SiSpringboot, SiMysql, SiArduino, SiRaspberrypi } from "react-icons/si";
import { faCode, faDatabase, faGlobe, faPalette } from "@fortawesome/free-solid-svg-icons";
import { TbApi } from "react-icons/tb";
import { PiGraph } from "react-icons/pi";

function Skills() {
    let skills = [
        {
            name: "Python",
            icon: <FontAwesomeIcon icon={faPython} />,
            rating: 4.5
        },
        {
            name: "Flask",
            icon: <SiFlask />,
            rating: 4
        },
        {
            name: "FastAPI",
            icon: <SiFastapi />,
            rating: 3.5
        },
        {
            name: "HTML",
            icon: <FontAwesomeIcon icon={faHtml5} />,
            rating: 4.5
        },
        {
            name: "CSS",
            icon: <FontAwesomeIcon icon={faCss3} />,
            rating: 4
        },
        {
            name: "JavaScript",
            icon: <FontAwesomeIcon icon={faJs} />,
            rating: 4
        },
        {
            name: "React",
            icon: <FontAwesomeIcon icon={faReact} />,
            rating: 3
        },
        {
            name: "Node.js",
            icon: <FontAwesomeIcon icon={faNodeJs} />,
            rating: 2.5
        },
        {
            name: "Java",
            icon: <FontAwesomeIcon icon={faJava} />,
            rating: 4
        },
        {
            name: "Spring Boot",
            icon: <SiSpringboot />,
            rating: 4
        },
        {
            name: "SQL",
            icon: <SiMysql />,
            rating: 3
        },
        {
            name: "NoSQL",
            icon: <FontAwesomeIcon icon={faDatabase} />,
            rating: 4
        },
        {
            name: "Arduino",
            icon: <SiArduino />,
            rating: 3.5
        },
        {
            name: "Raspberry Pi",
            icon: <SiRaspberrypi />,
            rating: 3
        },
        {
            name: "Git",
            icon: <FontAwesomeIcon icon={faGit} />,
            rating: 3
        },
        {
            name: "REST API",
            icon: <TbApi />,
            rating: 4
        },
        {
            name: "Web Dev",
            icon: <FontAwesomeIcon icon={faGlobe} />,
            rating: 4
        },
        {
            name: "Designing",
            icon: <FontAwesomeIcon icon={faPalette} />,
            rating: 3.5
        },
        {
            name: "DSA",
            icon: <PiGraph />,
            rating: 4.5
        },
        {
            name: "OOP",
            icon: <FontAwesomeIcon icon={faCode} />,
            rating: 4
        }
    ];

    return (
        <section className="section" id="skills">
            <h1 className="section-name">
                <Gradient text="Technologies I Use"/>
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <ul className="skill-list">
                        {
                            skills.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} name={skill.name} rating={skill.rating} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
