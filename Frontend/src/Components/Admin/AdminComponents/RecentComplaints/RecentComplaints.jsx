import React, { useEffect, useState } from 'react';
import axios_instance from '../../../../endPoints/baseURL'; // Import your axios instance
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Tooltip, IconButton, Collapse, Box, Grid, TablePagination
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, Check as CheckIcon } from '@mui/icons-material';
import ComplaintModal from '../ComplaintModal/ComplaintModal'; // Import ComplaintModal component

const ComplaintsTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Fetch complaints data from the API
  useEffect(() => {
    const fetchComplaintsData = async () => {
      try {
        const response = await axios_instance.get('/complaint');

        const ResentPending = response.data.filter(
            (complaint) => complaint.status === "Pending"
          );
        setComplaints(ResentPending);
        
        const fetchedComplaints = ResentPending;
        console.log(fetchedComplaints)

        // Sort complaints by date in descending order
        const sortedComplaints = fetchedComplaints.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Get only the latest 10 complaints
        const latestComplaints = sortedComplaints.slice(0, 10);

        setComplaints(latestComplaints);
      } catch (error) {
        console.error('Error fetching complaints data:', error);
      }
    };

    fetchComplaintsData();
  }, []);

  // Function to handle opening modal and setting selected complaint
  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setModalOpen(true);
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate the complaints to be displayed based on the current page and rows per page
  const displayedComplaints = complaints.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <TableContainer component={Paper} sx={{ marginTop: '4rem' }}>
        <Table aria-label="complaints table">
          <TableHead>
            <TableRow>
              {['First Name', 'Last Name', 'Email', 'Phone', 'Area', 'Complaint Type', 'Sectors', 'Company', 'Date', 'Status', 'Action'].map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedComplaints.map((complaint, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{complaint.firstname}</TableCell>
                  <TableCell>{complaint.lastname}</TableCell>
                  <TableCell>{complaint.email}</TableCell>
                  <TableCell>{complaint.phone}</TableCell>
                  <TableCell>{complaint.area}</TableCell>
                  <TableCell>{complaint.complaintType}</TableCell>
                  <TableCell>{complaint.sectors}</TableCell>
                  <TableCell>{complaint.company}</TableCell>
                  <TableCell>{new Date(complaint.date).toLocaleDateString()}</TableCell>
                  <TableCell>{complaint.status}</TableCell>
                  <TableCell>
                    <Tooltip title="View Complaint">
                      <IconButton color="primary" onClick={() => handleViewComplaint(complaint)}>
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setComplaints(complaints.map((c, i) => i === index ? { ...c, open: !c.open } : c))}
                    >
                      {complaint.open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={complaint.open} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            {complaint.details}
                          </Grid>
                        </Grid>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{marginBottom: '0rem', marginTop: '1rem', alignItems: 'center', justifyContent: 'center', width: '70%'}}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={complaints.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ComplaintModal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        complaint={selectedComplaint ? selectedComplaint.details : 'No complaint details found'}
      />
    </div>
  );
};

export default ComplaintsTable;
