import React, { useContext } from 'react';
import { Grid, TextField, Stack, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import signupimg from '../assets/Register.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { axios_instance } from '../endPoints/baseURL';


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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Phone number is not valid'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  conPass: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      conPass: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const result = await axios_instance.post('/users', values);
        console.log(result);
        navigate('/');
        toast.success('User created successfully!');
      } catch (err) {
        console.error(err);
        toast.error(err);
      } 
    }
  });

  // If user is already authenticated, redirect to home page
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
      <Grid container alignItems={'center'} justifyContent={'center'} p={{ xs: 2, md: 9 }} spacing={2}>
        <Grid item md={6} xs={12} sx={{ display: { md: 'block', xs: 'none', sm: 'none' } }}>
          <img src={signupimg} alt="Sign Up" style={{ height: 'auto', width: '100%' }} />
        </Grid>
        <Grid item md={5} xs={12} sx={{ ...inputStyles }}>
          <Box sx={{ padding: { md: 'none', xs: '30px' } }}>
            <Typography variant='h5' fontWeight={700}>
              Sign Up
            </Typography>
            <Typography fontWeight={400} color={'#666'} marginTop={'10px'}>
              Register yourself to file complaints
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Stack direction={'column'} spacing={2} mt={2}>
                <TextField
                  variant='standard'
                  type='text'
                  label='Name'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  fullWidth
                />
                <TextField
                  required
                  variant='standard'
                  type='email'
                  label='Email'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                />
                <TextField
                  required
                  variant='standard'
                  type='text'
                  label='Phone'
                  name='phone'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  fullWidth
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Password'
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Confirm Password'
                  name='conPass'
                  value={formik.values.conPass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.conPass && Boolean(formik.errors.conPass)}
                  helperText={formik.touched.conPass && formik.errors.conPass}
                  fullWidth
                />
                <Button type="submit" style={ButtonStyle} disabled={formik.isSubmitting}>Submit</Button>
                <Stack direction={'row'} spacing={4} justifyContent="center">
                  <Typography style={{ color: '#444' }}>
                    Already Have An Account ?{' '}
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
