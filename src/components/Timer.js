import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else {
            onComplete();
        }
    }, [timeLeft, onComplete]);

    return (
        <div className="timer">
            Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
        </div>
    );
};

export default Timer;
