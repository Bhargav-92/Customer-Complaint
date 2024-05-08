import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useCollapse } from 'react-collapsed';
import { Button, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Img from '../../assets/logo/Customer_Complaint.png';
import { complaintsData } from './ComplaintDetails';


export default function PendingRequests() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load complaints data from local JSON file
    const fetchData = async () => {
      try {
        const data = await complaintsData;
  
        // Filter complaints based on status
        const filteredComplaints = data.filter(complaint => complaint.status === 'Completed');
  
        setComplaints(filteredComplaints);
      } catch (error) {
        setError(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300}}>
      {complaints.map(complaint => (
        <div key={complaint.id} style={{marginTop:'1rem'}}>
          <div className="collapsiale">
            <div className="header" {...getToggleProps()}>
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
            {isExpanded && (
              <div {...getCollapseProps()}>
                <div className="content">
                  <Card elevation={6} sx={{ width: { md: '50rem' }, xs: '30rem', border: '2px solid #F57C00', borderRadius: '1rem' }}>
                    <TableContainer component={Paper}>
                      <Table aria-label="complaint table">
                        <TableBody>
                          <TableRow>
                            <TableCell align="left">Customer :-</TableCell>
                            <TableCell align="left">{complaint.customer}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">phone :-</TableCell>
                            <TableCell align="left">{complaint.phone}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Status :-</TableCell>
                            <TableCell align="left">{complaint.status}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Date :-</TableCell>
                            <TableCell align="left">{complaint.date}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">State :-</TableCell>
                            <TableCell align="left">{complaint.state}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">City :-</TableCell>
                            <TableCell align="left">{complaint.city}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Sector :-</TableCell>
                            <TableCell align="left">{complaint.sector}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Complaint Type  :-</TableCell>
                            <TableCell align="left">{complaint.type}</TableCell>
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
