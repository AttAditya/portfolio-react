import "./JSONBox.css";

function JSONBox({ content }) {
    return (
        <div className="json-box">
            <pre>
                {JSON.stringify(content, null, 4)}
            </pre>
        </div>
    );
}

export default JSONBox;
