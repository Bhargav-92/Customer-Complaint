import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SignImg from '../assets/login.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const result = await axios.post('http://localhost:4000/api/login', values);
        if (result.data === "Success") {
          localStorage.setItem('user', result.data);
          navigate('/home');
          toast.success("Logged in successfully!");
        } else {
          throw new Error('Invalid username or password.');
        }
      } catch (err) {
        toast.error(err.response?.data || err.message || "An unexpected error occurred.");
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Grid container p={12} alignItems={'center'} justifyContent={'center'} sx={{ marginLeft: { md: 'none', xs: '-30px' } }}>
        <Grid item md={5} xs={12} sx={{ ...inputStyles }}>
          <Box sx={{ padding: { md: 'none', xs: '30px' } }}>
            <Typography variant='h4' fontWeight={700}>Sign In</Typography>
            <Typography fontWeight={400} color={'#666'} marginTop={'10px'}>We Provide Seamless Complaint Register Portal</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack direction={'column'} spacing={3} mt={2}>
                <TextField
                  required
                  variant="standard"
                  type="email"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                />
                <TextField
                  required
                  variant="standard"
                  type="password"
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                />
                <Button type="submit" style={ButtonStyle} disabled={formik.isSubmitting}>Submit</Button>
                <Typography textAlign="center">
                 Don't Have an Account? <Link to='/register' style={{ textDecoration: 'none', color: '#666' }}>Sign Up</Link>
                </Typography>
              </Stack>
            </form>
          </Box>
        </Grid>
        <Grid item md={5} sx={{ display: { md: 'block', xs: 'none', sm: 'none' } }}>
          <img src={SignImg} alt="Sign In" style={{height: 'auto', width: '600px'}} />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
