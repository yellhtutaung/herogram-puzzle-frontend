// frontend/src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            onComplete(initialTime);
        }
    }, [timeLeft, onComplete, initialTime]);

    return (
        <div className="timer">
            <h2>Timer: {timeLeft} seconds</h2>
        </div>
    );
};

export default Timer;
