import React, { useEffect, useRef, useState } from "react";
import axios_instance from "../../../../endPoints/baseURL";
import { Box } from "@mui/material";
import Chart from 'chart.js/auto';

const PieChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Complaint Data',
      data: [],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      hoverOffset: 4
    }]
  });

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchComplaintsData = async () => {
      try {
        const response = await axios_instance.get('/complaint'); // Replace with your API endpoint
        const complaints = response.data;

        const totalComplaints = complaints.length;
        const solvedComplaints = complaints.filter(complaint => complaint.status === 'Completed').length;
        const pendingComplaints = complaints.filter(complaint => complaint.status === 'Pending').length;

        const totalUsers = new Set(complaints.map(complaint => complaint.userId)).size;

        setChartData({
          labels: ['Total Complaints', 'Solved Complaints', 'Pending Complaints', 'Total Users'],
          datasets: [{
            label: 'Complaint Data',
            data: [totalComplaints, solvedComplaints, pendingComplaints, totalUsers],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'green',
              'crimson',
              'rgb(75, 192, 192)'
            ],
            hoverOffset: 4
          }]
        });
      } catch (error) {
        console.error('Error fetching complaints data:', error);
      }
    };

    fetchComplaintsData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }, [chartData]);

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, p: { xs: 4, md: 1 }, justifyContent: 'center' , alignItems: 'center'}} mt={10}>
      <Box sx={{ width: '50%', height: 500 }}>
        <canvas ref={chartRef}></canvas>
      </Box>
    </Box>
  );
};

export default PieChartComponent;
