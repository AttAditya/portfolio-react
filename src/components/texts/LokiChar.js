import { useRef, useEffect } from "react";

let character_alts = {
    "a": [
        "5039", "8704", "506", "945", "5609",
        "64", "570", "8371", "170", "197", "194", "478"
    ],
    "d": [
        "5611", "394", "270", "271", "272",
        "273", "208", "8706", "8363", "545", "5798", "5799"
    ],
    "i": [
        "8464", "912", "302", "300", "205",
        "943", "906", "204", "5029", "205", "298", "304"
    ],
    "t": [
        "8224", "964", "354", "24178", "12490",
        "5055", "5062", "12486", "8366", "357", "7786"
    ],
    "y": [
        "611", "5033", "5053", "7822", "7823",
        "978", "612", "65509", "1506", "3062", "4280"
    ],
    " ": "160"
}

function getCharAlt(ch) {
    let char = ch.toLowerCase();

    let length = character_alts[char].length;
    let random_index = Math.floor(Math.random() * length);
    let switch_char = character_alts[char][random_index];

    let alt = String.fromCharCode(switch_char);

    return alt;
}

function LokiChar({ char }) {
    let lokiCharRef = useRef();

    useEffect(() => {
        let interval = setInterval(() => {
            lokiCharRef.current.innerText = getCharAlt(char);
        }, 1000);
    
        return () => clearInterval(interval);
    });

    return (
        <span className="LokiChar" value={char} ref={lokiCharRef}>
            {
                getCharAlt(char)
            }
        </span>
    );
}

export default LokiChar;
