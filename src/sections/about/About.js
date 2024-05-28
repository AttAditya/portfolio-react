import "./About.css";

import Gradient from "../../components/texts/Gradient";
import JSONBox from "../../components/jsonbox/JSONBox";

function About() {
    let birthDate = new Date("2005-07-24");
    let today = new Date();
    let age = Math.round((new Date() - birthDate) / 100 / 60 / 60 / 24 / 365.25) / 10;

    let aboutJSON = {
        basic_info: {
            name: "Aditya",
            alias: [
                "AttAditya",
                "Attachment Aditya",
                "Aditya Prasad Dash"
            ],
            gender: "Male",
            pronouns: "He/Him",
            age: {
                years: Math.floor(age),
                months: Math.round((age - Math.floor(age)) * 12)
            }
        },
        interests: [
            "Programming",
            "Robotics",
            "Maths",
            "Aviation",
            "Music"
        ]
    };

    let today_date = `${[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][today.getDay()]} ${today.getDate()} ${
        [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
    ][today.getMonth()]}, ${today.getFullYear()}`;

    return (
        <section className="section about" id="about">
            <h1 className="section-title">
                <Gradient text="Who am I" />
            </h1>

            <div className="section-content">
                <div className="filler-content">
                    <JSONBox content={aboutJSON} />
                </div>

                <div className="main-content">
                    <p>
                        Hi! I'm <Gradient text="Aditya" />.

                        <br /><br />

                        For those who don't understand the content in the box, it is a <Gradient text="JSON object" /> that tells you a bit about me.
                        Don't fret if you don't understand it, I'll explain it to you.

                        <br /><br />

                        You might know me as <Gradient text="AttAditya" />, <Gradient text="Attachment Aditya" /> or <Gradient text="Aditya Prasad Dash" />.
                        As of now({today_date}), I'm {Math.round(age)}({age}) years old.
                        As of creating this website, I'm a college student studying Computer Science.
                        My interests lie in <Gradient text="programming" />, <Gradient text="robotics" />, <Gradient text="maths" />, <Gradient text="aviation" />, and <Gradient text="music" />.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
