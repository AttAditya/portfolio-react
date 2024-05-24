import LokiChar from "./LokiChar";

function Loki({ text }) {
    let element = (
        <div className="Loki">
            {
                text.split("").map((char) => (
                    <LokiChar char={char} />
                ))
            }
        </div>
    );

    return element
}

export default Loki;
