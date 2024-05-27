import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiLeetcode } from 'react-icons/si';

import pixelAditya from '../../assets/images/PixelAditya.png';
import './Navbar.css';

import Loki from '../texts/Loki';
import Gradient from '../texts/Gradient';
import ScrollNav from '../texts/ScrollNav';

function Navbar({ nav_sections }) {
    let navbarRef = useRef();

    function toggleNavbar() {
        navbarRef.current.classList.toggle("active");
    }

    return (
        <nav className="navbar" ref={navbarRef}>
            <button className="navbar-logo" onClick={toggleNavbar}>
                <img src={pixelAditya} alt="Pixel Aditya" />
            </button>

            <div className="nav-container">
                <div className='navbar-left'>
                    <ScrollNav id="hero" text={
                        <Gradient text={
                            (<Loki text="ADITYA" />)
                        } />
                    } />

                    <ul className="navbar-links">
                        {
                            nav_sections.map((section, index) => (
                                <li key={index} >
                                    <ScrollNav id={section.toLowerCase()} text={section} />
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <ul className="navbar-social">
                    <li>
                        <a href="https://instagram.com/attachmentaditya" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </a>
                    </li>

                    <li>
                        <a href="https://linkedin.com/in/attachment-aditya" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/AttachmentStudios" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size='xl' />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/AttAditya" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='xl' />
                        </a>
                    </li>

                    <li>
                        <a href="https://leetcode.com/AttAditya" target="_blank" rel="noreferrer">
                            <SiLeetcode size='2.5vh' />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
