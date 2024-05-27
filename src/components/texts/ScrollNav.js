import "./ScrollNav.css";

function ScrollNav({ id, text }) {
    function scrollToSection() {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <a className="scroll-nav" onClick={scrollToSection}>
            {text}
        </a>
    );
}

export default ScrollNav;
