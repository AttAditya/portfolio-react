import "./ExpCard.css";

function ExpCard({ image, position, company, start, end=null, location, ctx=null }) {
    return (
        <div className="exp-card">
            <div className="exp-card-image">
                {image ? <img src={image} alt={position} /> : ""}
            </div>

            <div className="exp-card-text">
                <div className="exp-card-header">
                    <h2 className="exp-school">{position}</h2>
                    <h3 className="exp-degree">{company}</h3>
                </div>

                <div className="exp-card-content">
                    <ul className="exp-card-datetime">
                        <li className="exp-location">{location}</li>

                        <li className="exp-dates">
                            <span className="exp-start">{end ? "" : "Joined "} {start}</span>
                            <span className="exp-end">{end ? ` - ${end}` : ""}</span>
                        </li>
                    </ul>
                </div>

                <div className="exp-card-footer">
                    {ctx ? ctx : ""}
                </div>
            </div>
        </div>
    );
}

export default ExpCard;