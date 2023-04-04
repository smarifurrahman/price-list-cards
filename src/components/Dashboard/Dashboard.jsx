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
                width={800}
                height={300}
                data={marks}
            >
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                
                <Line
                    dataKey="physics"
                    stroke="#8884d8"
                    type="monotone"
                ></Line>

                <Line
                    dataKey="mathematics"
                    stroke="#82ca9d"
                    type="monotone"
                ></Line>

                <Line
                    dataKey="chemistry"
                    stroke="#82ca1d"
                    type="monotone"
                ></Line>
            </LineChart>

        </div>
    );
};

export default Dashboard;