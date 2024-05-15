import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
  Card,
  CardContent,
} from '@mui/material';

const ComplaintsDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const cardStyle = {
    minWidth: 200,
    marginRight: 10,
    color: '#000',
    '&:hover': {
      color: '#fff',
      background: '#27293C',
    },
  };

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
            complaint._id === id ? { ...complaint, status: 'Completed' } : complaint
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

  // Calculate pending complaints
  const pendingComplaints = complaints.filter(complaint => complaint.status !== 'Completed').length;

  // Calculate accepted complaints
  const acceptedComplaints = complaints.filter(complaint => complaint.status === 'Completed').length;

  // Find the state with the highest number of complaints
  const stateWithHighestComplaints = complaints.reduce((acc, curr) => {
    acc[curr.city] = (acc[curr.city] || 0) + 1;
    return acc;
  }, {});

  const stateWithMaxComplaints = Object.keys(stateWithHighestComplaints).reduce((a, b) => stateWithHighestComplaints[a] > stateWithHighestComplaints[b] ? a : b);

  // Find the company with the most complaints
  const companyWithMostComplaints = complaints.reduce((acc, curr) => {
    acc[curr.company] = (acc[curr.company] || 0) + 1;
    return acc;
  }, {});

  const companyWithMaxComplaints = Object.keys(companyWithMostComplaints).reduce((a, b) => companyWithMostComplaints[a] > companyWithMostComplaints[b] ? a : b);

  return (
    <Box p={5}>
      <Box display="flex" justifyContent="space-between">
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h6">Pending Complaints</Typography>
            <Typography variant="h4">{pendingComplaints}</Typography>
          </CardContent>
        </Card>
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h6">Accepted Complaints</Typography>
            <Typography variant="h4">{acceptedComplaints}</Typography>
          </CardContent>
        </Card>
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h6">State with Most Complaints</Typography>
            <Typography variant="h5">{stateWithMaxComplaints}</Typography>
          </CardContent>
        </Card>
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h6">Company with Most Complaints</Typography>
            <Typography variant="h5">{companyWithMaxComplaints}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }} p={2}>Complaints</Typography>
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
                <TableCell>{complaint.lastname}</TableCell
                ><TableCell>{complaint.email}</TableCell>
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
                    disabled={complaint.status === 'Completed' || complaint.isUpdating}
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

export default ComplaintsDashboard;
