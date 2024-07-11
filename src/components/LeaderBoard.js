import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeaderBoard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            const response = await axios.get('http://localhost:5000/leaderboard');
            setScores(response.data);
        };

        fetchScores();
    }, []);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>{score.username}: {score.time} seconds</li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderBoard;
