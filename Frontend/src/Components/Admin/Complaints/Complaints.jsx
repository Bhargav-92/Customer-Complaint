import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button, CircularProgress } from '@mui/material';


const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = () => {
    const complaintsUrl = 'http://localhost:3001/complaints';
    axios.get(complaintsUrl)
      .then(response => {
        const updatedComplaints = response.data.map(complaint => ({
          ...complaint,
          isUpdating: false
        }));
        setComplaints(updatedComplaints);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
        setLoading(false);
      });
  };

  const handleStatusChange = (id) => {
    const updateUrl = `http://localhost:3001/complaints/${id}`;
    axios.patch(updateUrl, { status: 'Completed' })
      .then(response => {
        setComplaints(prevComplaints => {
          return prevComplaints.map(complaint =>
            complaint._id === id ? { ...complaint, Status: 'Completed' } : complaint
          );
        });
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };
  
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box p={5}>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>Complaints</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Sector</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Complaint Details</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow key={complaint._id}>
                <TableCell>{complaint.firstname}</TableCell>
                <TableCell>{complaint.lastname}</TableCell>
                <TableCell>{complaint.email}</TableCell>
                <TableCell>{complaint.phone || 'N/A'}</TableCell>
                <TableCell>{complaint.city}</TableCell>
                <TableCell>{complaint.sectors}</TableCell>
                <TableCell>{complaint.company}</TableCell>
                <TableCell>{new Date(complaint.date).toLocaleDateString()}</TableCell>
                <TableCell>{complaint.details}</TableCell>
                <TableCell>{complaint.status}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    disabled={complaint.Status === 'Completed' || complaint.isUpdating}
                    onClick={() => handleStatusChange(complaint._id)}
                  >
                    Mark as Completed
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Complaints;
