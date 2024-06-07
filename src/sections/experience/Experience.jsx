import "./Experience.css";
import { Gradient, ExpCard } from "../../components";

function Experience() {
    let experienceData = [
        {
            company: "Scaler School of Technology",
            position: "Teaching Assistant",
            location: "Bangalore, India",
            image: "https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/22114541/Scaler_Logo_WhiteBG.jpg",
            start: "April 2024",
            ctx: {
                link: "https://scaler.com/school-of-technology",
                text: "Company Website"
            }
        },
        {
            company: "The World Times",
            position: "Software Developer",
            location: "Remote (Bengaluru, India)",
            image: "https://media.licdn.com/dms/image/D4D0BAQHGMTRCxu948Q/company-logo_200_200/0/1687417549798?e=1725494400&v=beta&t=YBncHL_8koez7Fp5AQgWzEriyyHYI2VVwGEOnYCZUZw",
            start: "March 2024",
            ctx: {
                link: "https://theworldtimes.in/",
                text: "Company Website"
            }
        },
        {
            company: "Zolo Stays",
            position: "Intern (Scaler Innovation Labs)",
            location: "Remote (Bengaluru, India)",
            image: "https://logowik.com/content/uploads/images/zolo-stays3393.jpg",
            start: "March 2024",
            end: "May 2024",
            ctx: {
                link: "https://zolostays.com/",
                text: "Company Website"
            }
        },
        {
            company: "The World Times",
            position: "IT Developer",
            location: "Remote (Faridabad, India)",
            image: "https://media.licdn.com/dms/image/D4D0BAQHGMTRCxu948Q/company-logo_200_200/0/1687417549798?e=1725494400&v=beta&t=YBncHL_8koez7Fp5AQgWzEriyyHYI2VVwGEOnYCZUZw",
            start: "January 2023",
            end: "July 2023",
            ctx: {
                link: "https://theworldtimes.in/",
                text: "Company Website"
            }
        }
    ];

    return (
        <section className="section" id="experience">
            <h1 className="section-title">
                <Gradient text={"Where I've Worked"} />
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <ul className="exp-list">
                        {
                            experienceData.map((exp, index) => {
                                return (
                                    <li key={index}>
                                        <ExpCard
                                            company={exp.company}
                                            position={exp.position}
                                            location={exp.location}
                                            image={exp.image}
                                            start={exp.start}
                                            end={exp.end}
                                            ctx={(
                                                <div className="edu-card-ctx">
                                                    <a href={exp.ctx.link} target="_blank" rel="noreferrer">
                                                        <button className="edu-ctx-button">
                                                            <Gradient text={exp.ctx.text} />
                                                        </button>
                                                    </a>
                                                </div>
                                            )}
                                        />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
