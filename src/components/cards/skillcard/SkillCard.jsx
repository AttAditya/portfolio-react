import "./SkillCard.css";

import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfStroke as starHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCard({ icon, name, rating }) {
    return (
        <div className="skill-card">
            <div className="skill-card-icon">
                {icon}
            </div>

            <div className="skill-card-body">
                <h3 className="skill-card-name">
                    {name}
                </h3>

                <div className="skill-card-rating">
                    {
                        rating > 0.5 ? (<FontAwesomeIcon icon={starFilled} />) : (rating > 0 ? <FontAwesomeIcon icon={starHalf} /> : <FontAwesomeIcon icon={starRegular} />)
                    }

                    {
                        rating > 1.5 ? (<FontAwesomeIcon icon={starFilled} />) : (rating > 1 ? <FontAwesomeIcon icon={starHalf} /> : <FontAwesomeIcon icon={starRegular} />)
                    }

                    {
                        rating > 2.5 ? (<FontAwesomeIcon icon={starFilled} />) : (rating > 2 ? <FontAwesomeIcon icon={starHalf} /> : <FontAwesomeIcon icon={starRegular} />)
                    }

                    {
                        rating > 3.5 ? (<FontAwesomeIcon icon={starFilled} />) : (rating > 3 ? <FontAwesomeIcon icon={starHalf} /> : <FontAwesomeIcon icon={starRegular} />)
                    }

                    {
                        rating > 4.5 ? (<FontAwesomeIcon icon={starFilled} />) : (rating > 4 ? <FontAwesomeIcon icon={starHalf} /> : <FontAwesomeIcon icon={starRegular} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default SkillCard;