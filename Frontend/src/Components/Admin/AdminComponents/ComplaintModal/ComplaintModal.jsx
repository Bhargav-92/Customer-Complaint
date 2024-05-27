import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const ComplaintModal = ({ isOpen, handleClose, complaint }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxWidth: '80%',
          minWidth: 300,
          borderRadius: 4,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Complaint Details
        </Typography>
        <Typography variant="body1" align="center">
          {complaint}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ComplaintModal;
