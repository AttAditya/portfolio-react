import LokiChar from "./LokiChar";

function Loki({ text }) {
    let element = (
        <div className="Loki">
            {
                text.split("").map((char, index) => (
                    <LokiChar char={char} key={index} />
                ))
            }
        </div>
    );

    return element
}

export default Loki;
