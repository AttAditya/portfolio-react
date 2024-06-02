import "./CompetitiveProgramming.css";
import { Gradient, LeetCodeCard } from "../../components";

function CompetitiveProgramming() {
    return (
        <section className="section competitive-programming" id="competitive-programming">
            <h1 className="section-title">
                <Gradient text="Competitive Programming"/>
            </h1>

            <div className="section-content">
                <div className="main-content">
                    <LeetCodeCard username="attaditya" />
                </div>
            </div>
        </section>
    );
}

export default CompetitiveProgramming;