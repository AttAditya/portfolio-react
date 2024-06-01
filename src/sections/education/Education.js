import "./Education.css"

import Gradient from "../../components/texts/gradient/Gradient";
import EduCard from "../../components/cards/educard/EduCard";

function Education() {
    return (
        <section className="section education" id="education">
            <h1 className="section-title">
                <Gradient text="My Education" />
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <ul className="edu-list">
                        <li>
                            <EduCard
                                school="Scaler School of Technology"
                                degree="Bachelor in Computer Science"
                                location="Bangalore, India"
                                image="https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/22114541/Scaler_Logo_WhiteBG.jpg"
                                start="July 2023"
                                ctx={(
                                    <div className="edu-card-ctx">
                                        <a href="https://scaler.com/school-of-technology" target="_blank" rel="noreferrer">
                                            <button className="edu-ctx-button">
                                                <Gradient text={"More about University"} />
                                            </button>
                                        </a>
                                    </div>
                                )}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Education;
