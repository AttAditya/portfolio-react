import "./Contact.css";
import { Gradient } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    let contactLinks = [
        {
            text: "Instagram",
            url: "https://www.instagram.com/attachmentaditya/",
            icon: (<FontAwesomeIcon icon={faInstagram} />)
        },
        {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/attachmentaditya/",
            icon: (<FontAwesomeIcon icon={faLinkedin} />)
        },
        {
            text: "GitHub",
            url: "https://github.com/AttAditya",
            icon: (<FontAwesomeIcon icon={faGithub} />)
        },
        {
            text: "YouTube (Attachment Studios)",
            url: "https://www.youtube.com/@attachmentstudios",
            icon: (<FontAwesomeIcon icon={faYoutube} />)
        },
        {
            text: "YouTube (Attachment Aditya)",
            url: "https://www.youtube.com/@this-is-aditya",
            icon: (<FontAwesomeIcon icon={faYoutube} />)
        },
        {
            text: "Email (Legal Purposes)",
            url: "mailto:adityaprasaddash.official@gmail.com",
            icon: (<FontAwesomeIcon icon={faFileContract} />)
        },
        {
            text: "Email (General)",
            url: "mailto:attachment.aditya@gmail.com",
            icon: (<FontAwesomeIcon icon={faEnvelope} />)
        }
    ];

    return (
        <section className="section" id="contact">
            <h1 className="section-title">
                <Gradient text="Reach Out" />
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <ul className="contact-links">
                        {
                            contactLinks.map((contact, index) => (
                                <li key={index} className="contact">
                                    <a href={contact.url} target="_blank" rel="noreferrer" className="contact-link">
                                        <button className="contact-button">
                                            {contact.icon}
                                            <span className="contact-text">
                                                <Gradient text={contact.text} />
                                            </span>
                                        </button>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;
