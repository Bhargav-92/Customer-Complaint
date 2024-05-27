import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from 'axios';

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/complaint');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const data = fetchData();
    console.log(data)

  }, []);

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, p: { xs: 4, md: 5 }, justifyContent: 'center', mt: 5 }}>
      <Box sx={{ width: '90%', height: 500 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default LineChartComponent;
