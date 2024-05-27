import React from "react";
import { Box } from "@mui/material";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PieChartComponent = () => {
  // Sample data for the pie chart
  const data = [
    { name: "Total Complaints", value: 70 },
    { name: "Solved Complaints", value: 50 },
    { name: "Pending Complaints", value: 50 },
    { name: "Total Users", value: 100 }
  ];

  // Define colors for each segment
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f0e'];

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, p: { xs: 4, md: 1 }, justifyContent: 'center' }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={120} fillRule="evenodd" label={true}>
              {data.map((entry, index) => (
                <Pie key={`pie-${index}`} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill={colors[index % colors.length]} label />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PieChartComponent;
