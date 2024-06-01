import "./Progress.css";

function Progress({ value=0, max=100, backgroundColor="transparent", fillColor="var(--color2)" }) {
    return (
        <div className="progress-bar" style={{ background: backgroundColor }}>
            <div className="progress-bar-fill" style={{ background: fillColor, width: `${(value / max) * 100}%` }}></div>
        </div>
    );
}

export default Progress;

