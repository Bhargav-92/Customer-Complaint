import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography, Container, Divider, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate if you're using react-router
import { ToastContainer, toast } from 'react-toastify';
import InputField from '../../../Input/InputField';
import axios from 'axios';

const AdminProfile = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    newPassword: '',
    confirmPassword: '',
    avatar: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const getUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/admin/profile', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('adminToken'), // Using adminToken for admin profile
        },
      });
      setFormData({
        ...formData,
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
      });
    } catch (error) {
      console.error("Error fetching user profile", error);
      toast.error('Error fetching user profile.');
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      if (formData.newPassword) {
        data.append('password', formData.newPassword);
      }
      if (formData.avatar) {
        data.append('avatar', formData.avatar);
      }

      await axios.patch('http://localhost:4000/api/admin/profile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + localStorage.getItem('adminToken'),
        },
      });

      toast.success('Profile updated successfully.');
      setFormData(initialFormData);

      // Refetch profile data to update the UI with the latest changes
      await getUserProfile();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating profile.');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box p={6} mt={8} sx={{
        borderRadius: '10px',
        boxShadow: '-2px 8px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <Typography sx={{
          fontSize: '30px',
        }}>
          Profile Details
        </Typography>
        <Divider />
        <Grid container md={12} p={6}>
          <Divider />
          <Grid item xs={12}>
            <form onSubmit={handleUpdate}>
              <Stack direction="column" spacing={4} >
                <InputField
                  label="Name"
                  name="name"
                  value={formData.name}
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  readOnly
                />
                <InputField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                />
                <InputField
                  label="New Password"
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                />
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                />
                <TextField
                  type='file'
                  variant='outlined'
                  onChange={handleFileChange}
                />
                <Button type='submit' variant="contained" color="primary"
                  sx={{
                    width: '100%',
                    fontSize: '1.2rem'
                  }}
                  >
                  Save
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminProfile;
