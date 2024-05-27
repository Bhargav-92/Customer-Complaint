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

const UsersTable = ({ users }) => {
  // Sample static data for the table
  const staticData = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'user', complaint: 'This complaint is done by me' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', role: 'user', complaint: 'This complaint is done by me for testing purpose' },
    // Add more sample data as needed
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  // Function to handle opening modal and setting selected user
  const handleViewComplaint = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, marginTop: '4rem' }} aria-label="users table">
          <TableHead>
            <TableRow>
              {['Name', 'Email', 'Phone', 'Role', 'Action'].map((header, index) => (
                <React.Fragment key={index}>
                  {renderHeaderCell({ children: header })}
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {staticData.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {/* Action buttons */}
                  <Button variant="contained" color="primary" onClick={() => handleViewComplaint(user)}>View Complaint</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ComplaintModal isOpen={modalOpen} handleClose={() => setModalOpen(false)} complaint={selectedUser ? selectedUser.complaint : 'No user Complaint found'} />
    </div>
  );
};

export default UsersTable;
