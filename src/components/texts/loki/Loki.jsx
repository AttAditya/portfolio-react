import LokiChar from "./LokiChar";

function Loki({ text }) {
    let element = (
        <span className="Loki">
            {
                text.split("").map((char, index) => (
                    <LokiChar char={char} key={index} />
                ))
            }
        </span>
    );

    return element
}

export default Loki;
