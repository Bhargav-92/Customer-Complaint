import React from 'react';
import axios from 'axios';
import { Box, Grid, Typography, FormControl, FormLabel } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputField from '../Components/Input/InputField';
import Button from '@mui/joy/Button';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Complaint = () => {
  const SubmitText = "Submit";

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    area: '',
    complaintType: '',
    sectors: '',
    company: '',
    details: '',
    // document: null
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    area: Yup.string().required('Area is required'),
    complaintType: Yup.string().required('Complaint Type is required'),
    sectors: Yup.string().required('Sector is required'),
    company: Yup.string().required('Company is required'),
    details: Yup.string().required('Complaint Details are required')
  });

  const handleSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:3001/complaints', values)
      .then(result => {
        console.log(result);
        toast.success("Your Complaint Sent Successfully");
        resetForm();
      })
      .catch(err => {
        console.error(err);
        toast.error("Error submitting the form");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Box p={12}>
        <Typography variant='h4' style={{ textAlign: 'center' }}>Register Your Complaint</Typography>
        <hr style={{ width: '100%', height: '2px', backgroundColor: '#34495e', marginTop: '20px' }} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={5} justifyContent="center" alignItems="center" pt={5}>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="First Name"
                    name="firstname"
                    placeholder="Enter First Name"
                    required
                  />
                  <ErrorMessage name="firstname" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Last Name"
                    name="lastname"
                    placeholder="Enter Last Name"
                    required
                  />
                  <ErrorMessage name="lastname" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                  <ErrorMessage name="firstname" component="div" style={{ color: 'red' }} />
                </Grid>
                
                {/* 2nd Row */}
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    required
                  />
                  <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Area"
                    name="area"
                    placeholder="Enter Area Name"
                    required
                  />
                  <ErrorMessage name="area" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Complaint Type"
                    name="complaintType"
                    placeholder="Enter Complaint Type"
                    required
                  />
                  <ErrorMessage name="complaintType" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Sector"
                    name="sectors"
                    placeholder="Enter Complaint Type"
                    required
                  />
                  <ErrorMessage name="sectors" component="div" style={{ color: 'red' }} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Company"
                    name="company"
                    placeholder="Enter Company Name"
                    required
                  />
                  <ErrorMessage name="company" component="div" style={{ color: 'red' }} />
                </Grid>
                
                <Grid item md={4} xs={12}>
                  <InputField
                    label="Details"
                    name="details"
                    placeholder="Enter Details "
                    required
                    multiline
                  />
                  <ErrorMessage name="details" component="div" style={{ color: 'red' }} />
                </Grid>
                
                {/* Add other fields similarly */}
                <Grid item md={12} xs={12} textAlign="center">
                  <Button variant="contained" type="submit" sx={{
                    background: '#F57C00',
                    color: '#fff',
                    width: '50%',
                    fontSize: '1.5rem'
                  }}>
                    {SubmitText}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
      <Footer />
    </>
  );
};

export default Complaint;
