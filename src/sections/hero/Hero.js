import './Hero.css';

import Loki from '../../components/texts/Loki';

function Hero() {
    return (
        <section className="Hero">
            <div className="hero-image">
                <img src="/Pixel Aditya 512.png" alt="profile" />
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
