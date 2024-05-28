import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InputField from '../Components/Input/InputField';
import Button from '@mui/joy/Button';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        newPassword: '',
        confirmPassword: '',
        avatar: null,
    });

    const getUserProfile = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/profile', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
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

            await axios.patch('http://localhost:4000/api/profile', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            });

            toast.success('Profile updated successfully.');
            setFormData("")

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
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Box p={15}>
                <Typography fontSize={'1.3rem'}>
                    <Link to="/home" style={{ textDecoration: 'none', color: '#000' }}>
                        Home
                    </Link>
                    &gt; Profile
                </Typography>
            </Box>
            <Grid container md={12} p={3} spacing={6}>
                <Grid item xs={12} md={4} pl={2} sx={{ display: { md: 'block', xs: 'none' } }}>
                    <Stack spacing={2}>
                        <Link to="/home" style={{ textDecoration: 'none', color: '#000' }}>
                            <Typography>Dashboard</Typography>
                        </Link>
                        <hr />
                        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                            <Typography>Logout</Typography>
                        </Link>
                        <hr />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={8} width={14} justifyContent="center" alignItems="center">
                    <form onSubmit={handleUpdate}>
                        <Stack direction={'column'} spacing={5}>
                            <InputField label={'Name'} placeholder={'Enter First Name'} isRequired={true} name="name" value={formData.name} onChange={handleChange} />
                            <InputField label={'Email Id'} placeholder={'Enter Email Id'} isRequired={true} name="email" value={formData.email} onChange={handleChange} readOnly={true} />
                            <InputField label={'Phone'} placeholder={'Enter Phone'} isRequired={true} name="phone" value={formData.phone} onChange={handleChange} />
                            <InputField label={'New Password'} placeholder={'Enter New Password'} isRequired={true} name="newPassword" value={formData.newPassword} onChange={handleChange} />
                            <InputField label={'Confirm Password'} placeholder={'Confirm New Password'} isRequired={true} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                            <TextField
                                type='file'
                                variant='outlined'
                                onChange={handleFileChange}
                            />
                            <Button title='Submit' type="submit" sx={{ background: '#F57C00', fontSize: '1.2rem' }}>
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Grid>
            </Grid>
            <Box>
                <Footer />
            </Box>
        </>
    );
}

export default Profile;
