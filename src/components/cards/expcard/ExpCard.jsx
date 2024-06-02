import "./ExpCard.css";

function ExpCard({ image, position, company, start, end=null, location, ctx=null }) {
    return (
        <div className="edu-card">
            <div className="edu-card-image">
                {image ? <img src={image} alt={position} /> : ""}
            </div>

            <div className="edu-card-text">
                <div className="edu-card-header">
                    <h2 className="edu-school">{position}</h2>
                    <h3 className="edu-degree">{company}</h3>
                </div>

                <div className="edu-card-content">
                    <ul className="edu-card-datetime">
                        <li className="edu-location">{location}</li>

                        <li className="edu-dates">
                            <span className="edu-start">{end ? "" : "Joined "} {start}</span>
                            <span className="edu-end">{end ? ` - ${end}` : ""}</span>
                        </li>
                    </ul>
                </div>

                <div className="edu-card-footer">
                    {ctx ? ctx : ""}
                </div>
            </div>
        </div>
    );
}

export default ExpCard;