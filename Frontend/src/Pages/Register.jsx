import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import signupimg from '../assets/signup.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

const ButtonStyle = {
  fontSize: '20px',
  color: '#fff',
  padding: '.6rem 0rem',
  borderRadius: '.3rem',
  border: 'none',
  background: 'rgb(38, 23, 177)',
};

const inputStyles = {
  justifyContent: { md: 'normal', sm: 'center', xs: 'center' },
  marginTop: { md: '0', sm: '8rem', xs: '8rem' },
  boxShadow: { md: 'none', sm: '3px 3px 3rem rgba(0,0,0,0.3)', xs: '3px 3px 3rem rgba(0,0,0,0.3)' },
  borderRadius: { md: 'none', sm: '1rem' },
};

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conPass, setConPass] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/users', { name, email, phone, password })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to create user. Please try again.');
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Grid container p={9} alignItems={'center'} justifyContent={'center'}>
        <Grid item md={6} sx={{ display: { md: 'block', xs: 'none', sm: 'none' } }}>
          <img src={signupimg} alt="Sign Up" height={400} width={550} />
        </Grid>
        <Grid item md={5} xs={12} sx={{ ...inputStyles }}>
          <Box sx={{ padding: { md: 'none', xs: '30px' } }}>
            <Typography variant='h5' fontWeight={700}>
              Sign Up
            </Typography>
            <Typography fontWeight={400} color={'#666'} marginTop={'10px'}>
              to Continue to Complaint System
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack direction={'column'} spacing={2} mt={2}>
                <TextField
                  variant='standard'
                  type='text'
                  label='Name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  variant='standard'
                  type='email'
                  label='Email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  variant='standard'
                  type='text'
                  label='Phone'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Confirm Password'
                  name='conPassword'
                  value={conPass}
                  onChange={(e) => setConPass(e.target.value)}
                />
                <button style={ButtonStyle}>Submit</button>
                <Stack direction={'row'} spacing={4}>
                  <Typography style={{ color: '#444' }}>
                    Do You Have Account??{' '}
                    <Link to='/' style={{ textDecoration: 'none', color: '#222' }}>
                      Sign In
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;