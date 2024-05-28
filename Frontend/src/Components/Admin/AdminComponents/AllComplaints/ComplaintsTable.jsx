import React, { useEffect, useState } from 'react';
import axios_instance from '../../../../endPoints/baseURL'; // Import your axios instance
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

const ComplaintsTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // Fetch complaints data from the API
  useEffect(() => {
    const fetchComplaintsData = async () => {
      try {
        const response = await axios_instance.get('/complaint'); // Replace with your API endpoint
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints data:', error);
      }
    };

    fetchComplaintsData();
  }, []);

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
            {complaints.map((complaint, index) => (
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
