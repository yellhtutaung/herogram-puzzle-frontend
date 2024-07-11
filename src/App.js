import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SudokuGrid from './components/SudokuGrid';
import Timer from './components/Timer';
import Leaderboard from './components/LeaderBoard';
import './App.css';

function App() {
  const [puzzle, setPuzzle] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchPuzzle = async () => {
      const response = await axios.get('http://localhost:4400/generate-puzzle');
      setPuzzle(response.data.puzzle);
    };

    fetchPuzzle();
  }, []);

  const handleCompletion = async (completionTime) => {
    const username = prompt('Enter your username:');
    await axios.post('http://localhost:4400/submit-score', { username, time: completionTime });
    setTime(completionTime);
  };

  return (
      <div className="App">
        <h1>Sudoku Game</h1>
        <SudokuGrid puzzle={puzzle} onComplete={handleCompletion} />
        <Timer initialTime={600} onComplete={handleCompletion} />
        <Leaderboard />
      </div>
  );
}

export default App;
