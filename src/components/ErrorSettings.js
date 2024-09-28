// src/components/ErrorSettings.js
import React from 'react';

const ErrorSettings = ({ errors, setErrors }) => {
    const handleChange = (e) => {
        const value = Math.min(Math.max(parseFloat(e.target.value), 0), 10);
        setErrors(value);
    };

    return (
        <div>
            <input
                type="range"
                min="0"
                max="10"
                step="0.25"
                value={errors}
                onChange={handleChange}
            />
            <input
                type="number"
                min="0"
                max="1000"
                value={errors}
                onChange={handleChange}
            />
        </div>
    );
};

export default ErrorSettings;
