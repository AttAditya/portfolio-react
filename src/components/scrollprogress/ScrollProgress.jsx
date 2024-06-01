import { useEffect, useState } from 'react';

import { Progress } from '../progress';

import "./ScrollProgress.css";

function ScrollProgress() {
    let [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            let scrollY = window.scrollY;
            
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;

            let scrollableHeight = scrollHeight - clientHeight;

            let scrollProgress = (scrollY / scrollableHeight) * 100;

            setProgressValue(scrollProgress);
        }, 100);
    }, []);

    return (
        <div className="scroll-progress">
            <Progress value={progressValue} fillColor="linear-gradient(to right, var(--color3), var(--color4))" />
        </div>
    );
}

export default ScrollProgress;

