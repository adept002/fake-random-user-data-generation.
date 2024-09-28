// src/components/ExportButton.js
import React from 'react';

const ExportButton = ({ data }) => {
    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + data.map(e => `${e.id},${e.name},${e.address},${e.phone}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
    };

    return <button onClick={handleExport}>Export to CSV</button>;
};

export default ExportButton;
