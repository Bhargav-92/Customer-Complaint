import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Divider, Grid } from '@mui/material';

const AdminProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    // Logic to save profile details
    console.log('Profile details saved');
  };

  const handleLogout = () => {
    // Logic to handle logout
    console.log('Logged out');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mt:4 }}>
              Admin <br /> Profile
            </Typography>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: 3, mb: 0, ml: -8 }} />
        <Grid item xs={6} md={8} lg={8}>
          <Box sx={{ mt: 1 }}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button variant="contained" color="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminProfile;
