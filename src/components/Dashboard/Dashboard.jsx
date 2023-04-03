import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch('marks.json')
            .then(res => res.json())
            .then(data => setMarks(data))
    }, [])

    return (
        <div className='my-10'>
            <LineChart
                width={1000}
                height={300}
                data={marks}
            >
                <Line
                    dataKey="physics"
                    stroke="#8884d8"
                ></Line>
                <Line
                    dataKey="mathematics"
                    stroke="#82ca9d"
                ></Line>

                <Line
                    dataKey="chemistry"
                    stroke="#82ca1d"
                ></Line>

                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>

        </div>
    );
};

export default Dashboard;