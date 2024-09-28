// src/components/RegionSelector.js
import React from 'react';

const regions = ['USA', 'Ukraine', 'Russia'];

const RegionSelector = ({ region, setRegion }) => {
    return (
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
            {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
            ))}
        </select>
    );
};

export default RegionSelector;
