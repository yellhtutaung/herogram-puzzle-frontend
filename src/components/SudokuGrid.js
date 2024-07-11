import React, { useState } from 'react';

const SudokuGrid = ({ puzzle, onComplete }) => {
    const [grid, setGrid] = useState(puzzle);

    const handleChange = (row, col, value) => {
        const newGrid = [...grid];
        newGrid[row][col] = parseInt(value) || 0;
        setGrid(newGrid);

        if (isComplete(newGrid)) {
            onComplete();
        }
    };

    const isComplete = (grid) => {
        // Check if the puzzle is solved correctly
        // Dummy implementation: check if there are no zeros
        return grid.every(row => row.every(cell => cell !== 0));
    };

    return (
        <div className="sudoku-grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cell, colIndex) => (
                        <input
                            key={colIndex}
                            type="number"
                            min="1"
                            max="9"
                            value={cell || ''}
                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SudokuGrid;
