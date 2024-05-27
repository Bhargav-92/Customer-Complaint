import React, { useEffect, useState } from "react";
import axios_instance from "../../../../endPoints/baseURL";
import { Box } from "@mui/material";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchComplaintsData = async () => {
      try {
        const response = await axios_instance.get('/complaint'); // Replace with your API endpoint
        const complaints = response.data;

        const totalComplaints = complaints.length;
        const solvedComplaints = complaints.filter(complaint => complaint.status === 'Completed').length;
        const pendingComplaints = complaints.filter(complaint => complaint.status === 'Pending').length;
        
        const totalUsers = new Set(complaints.map(complaint => complaint.userId)).size;

        setData([
          { name: "Total Complaints", value: totalComplaints },
          { name: "Solved Complaints", value: solvedComplaints },
          { name: "Pending Complaints", value: pendingComplaints },
          { name: "Total Users", value: totalUsers }
        ]);
      } catch (error) {
        console.error('Error fetching complaints data:', error);
      }
    };

    fetchComplaintsData();
  }, []);

  // Define colors for each segment
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f0e'];

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, p: { xs: 4, md: 1 }, justifyContent: 'center' }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width={400} height={400} margin={{ top: 10, right: 10, bottom: 10, left: 10 }} 
            onMouseEnter={() => console.log("Enter")} onMouseLeave={() => console.log("Leave")}>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              startAngle={0}
              endAngle={360}
              innerRadius={60}
              outerRadius={120}
              paddingAngle={4}
              cornerRadius={3}
              label={true}
            >
              {data.map((entry, index) => (
                <path
                  key={`cell-${index}`}
                  d={entry.d}
                  fill={colors[index % colors.length]}
                />
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
