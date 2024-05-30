import React, { useEffect, useState } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import axios_instance from "../../../../endPoints/baseURL";
import { Box } from "@mui/material";

const PieArcLabel = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchComplaintsData = async () => {
      try {
        const response = await axios_instance.get("/complaint");
        const complaints = response.data;

        const complaint = complaints.length;
        const solved = complaints.filter(
          (complaint) => complaint.status === "Completed"
        ).length;
        const pending = complaints.filter(
          (complaint) => complaint.status === "Pending"
        ).length;
        const Users = new Set(complaints.map((complaint) => complaint.userId))
          .size;

        const formattedData = [
          { value: complaint, label: "Complaints" },
          { value: solved, label: "Solved" },
          { value: pending, label: "Pending" },
          { value: Users, label: "Users" },
        ];

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching complaints data:", error);
      }
    };

    fetchComplaintsData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      p={4}
    >
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.label} (${item.value})`,
            arcLabelMinAngle: 45,
            arcLabelsRadiusOffset: 0.5,
            arcLableMinDistance: 20,
            data: chartData,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        width={800}
        height={500}
      />
    </Box>
  );
};

export default PieArcLabel;
