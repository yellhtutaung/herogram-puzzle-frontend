// frontend/src/components/LeaderBoard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get('http://localhost:4400/leaderboard');
                setLeaderboard(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
                // Handle error: setLeaderboard([]) or show an error message
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ol>
                {leaderboard.map((score, index) => (
                    <li key={index}>
                        {score.username}: {score.time} seconds
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Leaderboard;
