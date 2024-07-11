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
          try {
              const response = await axios.get('http://localhost:4400/generate-puzzle');
              setPuzzle(response.data.puzzle);
          } catch (error) {
              console.error('Error fetching puzzle:', error);
              // Handle error: setPuzzle([]) or show an error message
          }
      };
      fetchPuzzle();
  }, []);

  const handleCompletion = async (completionTime) => {
    const username = prompt('Enter your username:');
      if (username) {
          try {
              await axios.post('http://localhost:4400/submit-score', { username, time: completionTime });
              setTime(completionTime);
          } catch (error) {
              console.error('Error submitting score:', error);
              // Handle error: notify user or retry
          }
      }
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
