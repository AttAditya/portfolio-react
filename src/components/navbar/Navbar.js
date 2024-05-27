import { useRef } from 'react';

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

            <ul className="navbar-social">
                <li>
                    <a href="https://instagram.com/attachment-aditya" target="_blank" rel="noreferrer">
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;