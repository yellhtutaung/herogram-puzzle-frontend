// frontend/src/components/SudokuGrid.js
import React from 'react';

const SudokuGrid = ({ puzzle, onComplete }) => {
    const handleCompletion = () => {
        const completionTime = 600; // Example completion time, you may use a timer to calculate actual time
        onComplete(completionTime);
    };

    return (
        <div className="sudoku-grid">
            <h2>Sudoku Puzzle</h2>
            {puzzle.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} className="sudoku-cell">
                            {cell !== 0 ? cell : ''}
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleCompletion}>Complete</button>
        </div>
    );
};

export default SudokuGrid;
