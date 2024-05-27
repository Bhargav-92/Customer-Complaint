import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ComplaintModal from '../ComplaintModal/ComplaintModal'; // Import ComplaintModal component

const ComplaintsTable = ({ complaints }) => {
  // Sample static data for the table
  const staticData = [
    { 
      firstname: 'John', 
      lastname: 'Doe', 
      email: 'john@example.com', 
      phone: '123-456-7890', 
      area: 'Area 1', 
      complaintType: 'Type A', 
      sectors: 'Sector 1', 
      company: 'Company A', 
      date: '2023-05-27', 
      details: 'This is a complaint by John Doe', 
      document: 'document1.pdf', 
      status: 'Pending', 
      userId: '1' 
    },
    { 
      firstname: 'Jane', 
      lastname: 'Smith', 
      email: 'jane@example.com', 
      phone: '987-654-3210', 
      area: 'Area 2', 
      complaintType: 'Type B', 
      sectors: 'Sector 2', 
      company: 'Company B', 
      date: '2023-05-28', 
      details: 'This is another complaint by Jane Smith', 
      document: 'document2.pdf', 
      status: 'Resolved', 
      userId: '2' 
    },
    // Add more sample data as needed
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // Function to render resizable table header cell
  const renderHeaderCell = ({ children, ...rest }) => {
    return (
      <Resizable
        height={0}
        width={100}
        draggableOpts={{ enableUserSelectHack: false }}
        {...rest}
      >
        <TableCell>{children}</TableCell>
      </Resizable>
    );
  };

  // Function to handle opening modal and setting selected complaint
  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setModalOpen(true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, marginTop: '4rem' }} aria-label="complaints table">
          <TableHead>
            <TableRow>
              {['First Name', 'Last Name', 'Email', 'Phone', 'Area', 'Complaint Type', 'Sectors', 'Company', 'Date', 'Status', 'Action'].map((header, index) => (
                <React.Fragment key={index}>
                  {renderHeaderCell({ children: header })}
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {staticData.map((complaint, index) => (
              <TableRow key={index}>
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
                  <Button variant="contained" color="primary" onClick={() => handleViewComplaint(complaint)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ComplaintModal isOpen={modalOpen} handleClose={() => setModalOpen(false)} complaint={selectedComplaint ? selectedComplaint.details : 'No complaint details found'} />
    </div>
  );
};

export default ComplaintsTable;
