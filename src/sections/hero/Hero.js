import pixelAditya from '../../assets/images/PixelAditya.png';

import './Hero.css';

import Loki from '../../components/texts/loki/Loki';
import TypeText from '../../components/texts/typetext/TypeText';

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-image">
                <img src={pixelAditya} alt="Pixel Aditya" />
            </div>

            <div className="hero-text">
                <h1>
                    <Loki text="ADITYA" />
                </h1>
                
                <p>
                    I'm a <TypeText texts={[
                        "Student",
                        "Software Developer",
                        "Web Developer",
                        "Game Developer"
                    ]} />
                </p>
            </div>
        </section>
    );
}

export default Hero;
