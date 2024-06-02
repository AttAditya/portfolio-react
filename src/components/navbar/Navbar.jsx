import { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { SiLeetcode } from 'react-icons/si';

import pixelAditya from '../../assets/images/PixelAditya.png';
import './Navbar.css';

import Loki from '../texts/loki/Loki';
import Gradient from '../texts/gradient/Gradient';
import ScrollNav from '../texts/scrollnav/ScrollNav';

function Navbar({ nav_sections }) {
    let navbarRef = useRef();
    let [navNotif, setNavNotif] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("navNotif")) {
            setNavNotif(true);
        } else {
            setNavNotif(false);
        }
    }, []);

    function toggleNavbar() {
        navbarRef.current.classList.toggle("active");
        if (navNotif) {
            setNavNotif(false);
            localStorage.setItem("navNotif", "This will prevent the notification from appearing again.");
        }
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


            {
                navNotif ? (
                    <div className={`nav-notif ${navNotif ? "active" : ""}`} onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                        <Gradient text="Click Here!" />
                    </div>
                ) : ""
            }
        </nav>
    );
}

export default Navbar;
