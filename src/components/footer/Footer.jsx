import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gradient, Loki } from "../texts";
import "./Footer.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <hr className="footer-line" />

            <div className="footer-content">
                <div className="footer-text">
                    <p>
                        Made with <FontAwesomeIcon icon={faHeart} /> by <a href="/">
                            <Gradient text="Aditya" />
                        </a>
                    </p>
                </div>
                
                <div className="footer-branding">
                    <Gradient text={<Loki text="ADITYA" />}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;