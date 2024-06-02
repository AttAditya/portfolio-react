import "./Education.css"

import Gradient from "../../components/texts/gradient/Gradient";
import { EduCard } from "../../components";

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
                                                <Gradient text={"University Website"} />
                                            </button>
                                        </a>
                                    </div>
                                )}
                            />
                        </li>

                        <li>
                            <EduCard
                                school="Birla Institute of Technology and Science, Pilani"
                                degree="Bachelor in Computer Science"
                                location="(Online) Pilani, India"
                                image="https://d2lk14jtvqry1q.cloudfront.net/media/small_BITS_Pilani_7a058e9309_098a202d47_d55a9cc055_b70d67d1ea.png"
                                start="July 2023"
                                ctx={(
                                    <div className="edu-card-ctx">
                                        <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noreferrer">
                                            <button className="edu-ctx-button">
                                                <Gradient text={"University Website"} />
                                            </button>
                                        </a>
                                    </div>
                                )}
                            />
                        </li>

                        <li>
                            <EduCard
                                school="Aravali International School"
                                degree="High School(10th & 12th)"
                                location="Faridabad, India"
                                image="https://play-lh.googleusercontent.com/5KdesYGbDdzTTCbRkJpssvOMMO-xPh8nlt3VM1El5gVOLLJwn5MN_UHgjIsbXXnvfJAv=w1024-h500"
                                start="November 2014"
                                end="April 2023"
                                ctx={(
                                    <div className="edu-card-ctx">
                                        <a href="https://aravali.edu.in/" target="_blank" rel="noreferrer">
                                            <button className="edu-ctx-button">
                                                <Gradient text={"School Website"} />
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
