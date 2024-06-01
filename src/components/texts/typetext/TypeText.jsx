import { useEffect, useState } from "react";
import "./TypeText.css";

function TypeText({ texts=[""], writeSpeed=150, deleteSpeed=100, switchDelay=1000 }) {
    let [textIndex, setTextIndex] = useState(0);
    let [typedText, setTypedText] = useState("");
    let [typeMode, setTypeMode] = useState("write");

    useEffect(() => {
        let writeText = () => {
            if (typeMode === "write") {
                if (typedText.length === texts[textIndex].length) {
                    let timeout = setTimeout(() => {
                        setTypeMode("delete");
                    }, switchDelay);
    
                    return timeout;
                }
    
                let nextChar = texts[textIndex].charAt(typedText.length);
                let timeout = setTimeout(() => {
                    setTypedText(typedText + nextChar);
                }, writeSpeed);
    
                return timeout;
            } else {
                if (typedText.length === 0) {
                    let timeout = setTimeout(() => {
                        setTypeMode("write");
                        setTextIndex((textIndex + 1) % texts.length);
                    }, switchDelay);
    
                    return timeout;
                }
    
                let timeout = setTimeout(() => {
                    setTypedText(typedText.slice(0, -1));
                }, deleteSpeed);
    
                return timeout;
            }
        }

        let timeout = writeText();

        return () => {
            clearTimeout(timeout);
        }
    }, [textIndex, typedText, typeMode, texts, writeSpeed, deleteSpeed, switchDelay]);

    return (
        <span className="type-text">
            {typedText}
        </span>
    );
}

export default TypeText;

