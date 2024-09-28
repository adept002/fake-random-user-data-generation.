import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegionSelector from './RegionSelector';
import ErrorSettings from './ErrorSettings';
import SeedInput from './SeedInput';
import DataTable from './DataTable';
import ExportButton from './ExportButton';

const MainComponent = () => {
    const [region, setRegion] = useState('USA');
    const [errors, setErrors] = useState(0);
    const [seed, setSeed] = useState('');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData();
    }, [region, errors, seed, page]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/generate-data`, {
            params: { region, errors, seed, page }
        });
        setData(prevData => [...prevData, ...response.data]);
    };

    return (
        <div className="container">
            <RegionSelector region={region} setRegion={setRegion} />
            <ErrorSettings errors={errors} setErrors={setErrors} />
            <SeedInput seed={seed} setSeed={setSeed} />
            <DataTable data={data} />
            <ExportButton data={data} />
            <button onClick={() => setPage(prev => prev + 1)}>Load More</button>
        </div>
    );
};

export default MainComponent;
