import pixelAditya from '../../assets/images/PixelAditya.png';

import './Hero.css';

import Loki from '../../components/texts/Loki';

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
                <p>A Developer and a Student</p>
            </div>
        </section>
    );
}

export default Hero;
