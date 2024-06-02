import { Gradient } from "../../texts";
import "./LeetCode.css";
import { SiLeetcode } from "react-icons/si";

function LeetCode({ username }) {
    return (
        <div className="leetcode-card">
            <div className="leetcode-card-image">
                <img src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Baloo%202&ext=contest`} alt={`${username}'s LeetCode Card`} className="leetcode-card-image-content" />
            </div>
            
            <a href={`https://leetcode.com/${username}`} target="_blank" rel="noreferrer noopener" className="leetcode-link">
                <button className="leetcode-button">
                    <SiLeetcode className="leetcode-icon" />
                    <span className="leetcode-text">
                        <Gradient text="LeetCode" />
                    </span>
                </button>
            </a>
        </div>
    );
}

export default LeetCode;