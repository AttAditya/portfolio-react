import "./ScrollNav.css";

function ScrollNav({ id, text }) {
    function scrollToSection(event) {
        event.preventDefault();
        
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <a className="scroll-nav" onClick={scrollToSection} href={`#${id}`}>
            {text}
        </a>
    );
}

export default ScrollNav;
