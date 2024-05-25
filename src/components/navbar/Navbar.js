import './Navbar.css';

function Navbar({ nav_sections }) {
    return (
        <nav className="navbar">
            <ul>
                {
                    nav_sections.map((section, index) => (
                        <li key={index} >
                            <a href={`#${section.toLowerCase()}`}>{section}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;
