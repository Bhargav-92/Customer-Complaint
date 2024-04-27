import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useCollapse } from 'react-collapsed';
import { Button, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Img from '../../assets/logo/Customer_Complaint.png';
import { ComplaintDetailsData } from './ComplaintDetails'; // Import the function to fetch complaint details

export default function PendingRequests() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [complaintId, setComplaintId] = useState(null); // State to store the complaint ID
  const [complaintDetails, setComplaintDetails] = useState(null); // State to store the complaint details

  // Function to fetch complaint details based on ID
  const fetchComplaintDetails = (id) => {
    const details = ComplaintDetailsData(id);
    setComplaintDetails(details);
  };

  useEffect(() => {
    if (isExpanded && complaintId) {
      fetchComplaintDetails(complaintId); // Fetch details when expanded and complaintId is set
    }
  }, [isExpanded, complaintId]);

  // Function to handle toggle and set complaint ID
  const handleToggle = (id) => {
    setComplaintId(id);
  };

  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      {ComplaintDetailsData.map(complaint => (
        <div key={complaint.id} style={{marginTop:'1rem'}}>
          <div className="collapsiale">
            <div className="header" {...getToggleProps()} onClick={() => handleToggle(complaint.id)}>
              <Card elevation={6} sx={{ width: { md: '50rem' }, xs: '30rem', border: '2px solid #F57C00', borderRadius: '1rem' }}>
                <Grid container md={12} p={2} alignItems={'center'}>
                  <Grid item md={2}>
                    <img src={Img} alt="user Profile" height={60} width={80} />
                  </Grid>
                  <Grid item md={8}>
                    {complaint.complaint}
                  </Grid>
                  <Grid item md={2}>
                    <Button variant='contained' color='success'>
                      {complaint.status}
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </div>
            {isExpanded && complaintDetails && complaintDetails.id === complaint.id && (
              <div {...getCollapseProps()}>
                <div className="content">
                  <Card elevation={6} sx={{ width: { md: '50rem' }, xs: '30rem', border: '2px solid #F57C00', borderRadius: '1rem' }}>
                    <TableContainer component={Paper}>
                      <Table aria-label="complaint table">
                        <TableBody>
                          <TableRow>
                            <TableCell align="left">Customer :-</TableCell>
                            <TableCell align="left">{complaintDetails.customer}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">phone :-</TableCell>
                            <TableCell align="left">{complaintDetails.phone}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Status :-</TableCell>
                            <TableCell align="left">{complaintDetails.status}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Date :-</TableCell>
                            <TableCell align="left">{complaintDetails.date}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">State :-</TableCell>
                            <TableCell align="left">{complaintDetails.state}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">City :-</TableCell>
                            <TableCell align="left">{complaintDetails.city}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Sector :-</TableCell>
                            <TableCell align="left">{complaintDetails.sector}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Complaint Type  :-</TableCell>
                            <TableCell align="left">{complaintDetails.type}</TableCell>
                          </TableRow>
                          {/* Add other rows for other data */}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Box>
  );
}
