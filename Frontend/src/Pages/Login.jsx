import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the CSS for react-toastify
import axios from 'axios';
import SignImg from '../assets/login.png';

const ButtonStyle = {
  fontSize: '20px',
  color: '#fff',
  padding: '.5rem',
  marginTop: '2rem',
  borderRadius: '.3rem',
  border: 'none',
  background: 'rgb(38, 23, 177)',
};

const inputStyles = {
  justifyContent: { md: 'normal', sm: 'center', xs: 'center' },
  marginTop: { md: '0', sm: '8rem', xs: '8rem' },
  boxShadow: { md: 'none', sm: '3px 3px 3rem rgba(0,0,0,0.3)', xs: '3px 3px 3rem rgba(0,0,0,0.3)' },
  borderRadius: { md: 'none', sm: '1rem' }
};

function Login() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password })
      .then(result => {
        if (result.data === "Success") {
          navigate('/home');
          
          toast.success("Logged in successfully!");
        } else {
          // Assuming the server sends back a non-"Success" response for failed logins
          throw new Error('Invalid username or password.');
        }
      })
      .catch(err => {
        // Handle errors from network issues or the catch block above
        toast.error(err.response?.data || err.message || "An unexpected error occurred.");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Grid container p={12} alignItems={'center'} justifyContent={'center'} sx={{ marginLeft: { md: 'none', xs: '-30px' } }}>
        <Grid item md={5} xs={12} sx={{ ...inputStyles }}>
          <Box sx={{ padding: { md: 'none', xs: '30px' } }}>
            <Typography variant='h4' fontWeight={700}>Sign In</Typography>
            <Typography fontWeight={400} color={'#666'} marginTop={'10px'}>to Continue to Complaint System</Typography>
            <form onSubmit={handleSubmit}>
              <Stack direction={'column'} spacing={3} mt={2}>
               
                <TextField
                  required
                  variant="standard"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <TextField
                  required
                  variant="standard"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
                <Button type="submit" style={ButtonStyle}>Submit</Button>
                <Typography textAlign="center">
                  No Account? <Link to='/register' style={{ textDecoration: 'none', color: '#666' }}>Sign Up</Link>
                </Typography>
              </Stack>
            </form>
          </Box>
        </Grid>
        <Grid item md={5} sx={{ display: { md: 'block', xs: 'none', sm: 'none' } }}>
          <img src={SignImg} alt="Sign In" height={400} width={600} />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
