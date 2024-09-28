// src/components/SeedInput.js
import React from 'react';

const SeedInput = ({ seed, setSeed }) => {
    const generateRandomSeed = () => {
        setSeed(Math.floor(Math.random() * 10000));
    };

    return (
        <div>
            <input
                type="number"
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
            />
            <button onClick={generateRandomSeed}>Random</button>
        </div>
    );
};

export default SeedInput;
