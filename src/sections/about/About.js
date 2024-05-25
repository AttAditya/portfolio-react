import { useRef } from "react";
import "./About.css";

import Gradient from "../../components/texts/Gradient";

function About() {
    let birthDate = new Date("2005-07-24");
    let age = Math.round((new Date() - birthDate) / 100 / 60 / 60 / 24 / 365.25) / 10;

    return (
        <section className="section about" id="about">
            <h1 className="section-title">
                <Gradient text="Who am I" />
            </h1>

            <div className="section-content">
                <div className="filler-content">
                    {/* This is filler content. I will add more content here later. */}
                </div>

                <div className="main-content">
                    <p>
                        I'm Attachment Aditya, and I'm {age} years old.
                        I like coding and I also own a YouTube channel known as "Attachment Studios". I've made many projects and videos.
                        Other than that, I personally like Cubing. Although no world records but I have solved many cubes. I have a decent collection of cube, decent because I have a few types of cubes, no repeats but many types of cubes. Another thing I've also been into many other activites. These include robotics, writing, mathematics, arts, music, animations and much more.
                        You know, I'm pretty talented if you ask me... I mean... Yeah, if we ignore some laziness...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
