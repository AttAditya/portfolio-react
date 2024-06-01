import "./EduCard.css";

function EduCard({ image, school, degree, start, end=null, location, grade=null, ctx=null }) {
    return (
        <div className="edu-card">
            <div className="edu-card-image">
                {image ? <img src={image} alt={school} /> : ""}
            </div>

            <div className="edu-card-text">
                <div className="edu-card-header">
                    <h2 className="edu-school">{school}</h2>
                    <h3 className="edu-degree">{degree}</h3>
                </div>

                <div className="edu-card-content">
                    <ul className="edu-card-datetime">
                        <li className="edu-location">{location}</li>

                        <li className="edu-dates">
                            <span className="edu-start">{start}</span>
                            <span className="edu-end">{end ? end : ""}</span>
                        </li>
                    </ul>

                    {
                        grade ? (
                            <p className="edu-grade">
                                Grade: <strong>{grade}</strong>
                            </p>
                        ) : ""
                    }
                </div>

                <div className="edu-card-footer">
                    {ctx ? ctx : ""}
                </div>
            </div>
        </div>
    );
}

export default EduCard;