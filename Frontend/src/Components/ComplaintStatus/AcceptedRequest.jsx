import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Img from '../../assets/logo/Customer_Complaint.png';
import axios_instance from '../../endPoints/baseURL';

export default function AcceptedRequest() {
  const [complaints, setComplaints] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const AxiosConfig = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        const user = JSON.parse(localStorage.getItem('user'));

        try {
          const response = await axios_instance.get(`/user/${user._id}/complaints`, AxiosConfig);
          const completedComplaints = response.data.filter(complaint => complaint.status === 'Completed');
          setComplaints(completedComplaints);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchComplaints();
  }, []);

  const toggleExpand = (id) => {
    setExpandedIds((prevExpandedIds) => {
      if (prevExpandedIds.includes(id)) {
        return prevExpandedIds.filter(expandedId => expandedId !== id);
      } else {
        return [...prevExpandedIds, id];
      }
    });
  };

  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      {complaints.map(complaint => {
        const isExpanded = expandedIds.includes(complaint._id);
        return (
          <div key={complaint._id} style={{ marginTop: '1rem' }}>
            <div className="collapsible">
              <div className="header" onClick={() => toggleExpand(complaint._id)}>
                <Card elevation={6} sx={{ width: { md: '50rem', xs: '30rem' }, border: '2px solid #F57C00', borderRadius: '1rem' }}>
                  <Grid container spacing={2} alignItems="center" p={2}>
                    <Grid item md={2}>
                      <img src={Img} alt="user Profile" height={60} width={80} />
                    </Grid>
                    <Grid item md={8}>
                      {complaint.details}
                    </Grid>
                    <Grid item md={2}>
                      <Button variant='contained' color='success'>
                        {complaint.status}
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </div>
              {isExpanded && (
                <div>
                  <div className="content">
                    <Card elevation={6} sx={{ width: { md: '50rem', xs: '30rem' }, border: '2px solid #F57C00', borderRadius: '1rem' }}>
                      <TableContainer component={Paper}>
                        <Table aria-label="complaint table">
                          <TableBody>
                            <TableRow>
                              <TableCell align="left">Customer:</TableCell>
                              <TableCell align="left">{complaint.firstname}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">Phone:</TableCell>
                              <TableCell align="left">{complaint.phone}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">Email:</TableCell>
                              <TableCell align="left">{complaint.status}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">Date:</TableCell>
                              <TableCell align="left">{complaint.date}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">State:</TableCell>
                              <TableCell align="left">{complaint.email}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">City:</TableCell>
                              <TableCell align="left">{complaint.area}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">Sector:</TableCell>
                              <TableCell align="left">{complaint.sectors}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">Complaint Type:</TableCell>
                              <TableCell align="left">{complaint.complaintType}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {error && <div>Error: {error.message}</div>}
    </Box>
  );
}
