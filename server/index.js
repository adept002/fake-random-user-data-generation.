const express = require('express');
const cors = require('cors');
const { generateFakeData } = require('./dataGenerator');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/generate-data', (req, res) => {
    const { region, errors, seed, page } = req.query;

    const generatedData = generateFakeData(region, errors, seed, page);
    res.json(generatedData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
