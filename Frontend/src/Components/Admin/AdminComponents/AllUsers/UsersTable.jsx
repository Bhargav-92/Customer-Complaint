import React, { useState, useEffect } from 'react';
import { Resizable } from 'react-resizable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ComplaintModal from '../ComplaintModal/ComplaintModal';
import axios_instance from '../../../../endPoints/baseURL';


const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios_instance.get('/userdata');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

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
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleViewComplaint(user)}>
                    View All Complaints
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ComplaintModal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        complaint={selectedUser ? selectedUser.complaint : 'No user complaint found'}
      />
    </div>
  );
};

export default UsersTable;
