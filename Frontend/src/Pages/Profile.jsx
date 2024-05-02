import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InputField from '../Components/Input/InputField';
import Button from '@mui/joy/Button';
import Footer from '../Components/Footer/Footer';

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match. Please ensure both passwords are identical.");
            return; // Stop the form submission when passwords do not match
        }

        const data = new FormData();
        data.append('name', formData.firstName);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('password', formData.newPassword);
        data.append('avatar', file);

        try {
            const response = await axios.patch('http://localhost:3001/users/:id', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // Log or handle the response appropriately
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile: ' + error.message);
        }
    };

    return (
        <>
            <Box p={15}>
                <Typography fontSize={'1.3rem'}>
                    <Link to="/home" style={{ textDecoration: 'none', color: '#000' }}>
                        Home
                    </Link>
                    &gt; Profile
                </Typography>
            </Box>
            <Grid container md={12} p={3} spacing={6}>
                <Grid item xs={12} md={4} pl={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}>
                    <Stack spacing={2} >
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
                            <InputField label={'First Name'} placeholder={'Enter First Name'} isRequired={true} name="firstName" value={formData.firstName} onChange={handleChange} />
                            <InputField label={'Email Id'} placeholder={'Enter Email Id'} isRequired={true} name="email" value={formData.email} onChange={handleChange} />
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
