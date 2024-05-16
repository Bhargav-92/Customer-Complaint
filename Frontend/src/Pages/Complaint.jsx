import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, FormLabel, TextareaAutosize } from '@mui/material';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import UploadIcon from '@mui/icons-material/Upload';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Complaint = () => {
  const SubmitText = "Submit";

  // Define the dynamic options for the select fields
  const complaintTypes = ['Type1', 'Type2', 'Type3', 'Type4', 'Type5'];
  const areas = ['Area1', 'Area2', 'Area3', 'Area4', 'Area5'];
  const sectors = ['Sector1', 'Sector2', 'Sector3', 'Sector4', 'Sector5'];

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      area: '',
      complaintType: '',
      sectors: '',
      company: '',
      details: '',
      document: null,
      fileName: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First Name is required'),
      lastname: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone Number is required'),
      area: Yup.string().required('Area is required'),
      complaintType: Yup.string().required('Complaint Type is required'),
      sectors: Yup.string().required('Sector is required'),
      company: Yup.string().required('Company is required'),
      details: Yup.string().required('Complaint Details are required'),
    }),
    onSubmit: (values, { resetForm }) => {
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
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('document', file);
      formik.setFieldValue('fileName', file.name);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Box p={12}>
        <Typography variant='h4' style={{ textAlign: 'center' }}>Register Your Complaint</Typography>
        <hr style={{ width: '100%', height: '2px', backgroundColor: '#34495e', marginTop: '20px' }} />
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} justifyContent="center" alignItems="center" pt={5}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First Name"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="area-label">Area</InputLabel>
                <Select
                  labelId="area-label"
                  id="area"
                  name="area"
                  value={formik.values.area}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.area && Boolean(formik.errors.area)}
                  label="Area"
                >
                  {areas.map((area, index) => (
                    <MenuItem key={index} value={area}>{area}</MenuItem>
                  ))}
                </Select>
                {formik.touched.area && formik.errors.area && (
                  <Typography color="error" variant="body2">{formik.errors.area}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="complaintType-label">Complaint Type</InputLabel>
                <Select
                  labelId="complaintType-label"
                  id="complaintType"
                  name="complaintType"
                  value={formik.values.complaintType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.complaintType && Boolean(formik.errors.complaintType)}
                  label="Complaint Type"
                >
                  {complaintTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>{type}</MenuItem>
                  ))}
                </Select>
                {formik.touched.complaintType && formik.errors.complaintType && (
                  <Typography color="error" variant="body2">{formik.errors.complaintType}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="sectors-label">Sector</InputLabel>
                <Select
                  labelId="sectors-label"
                  id="sectors"
                  name="sectors"
                  value={formik.values.sectors}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.sectors && Boolean(formik.errors.sectors)}
                  label="Sector"
                >
                  {sectors.map((sector, index) => (
                    <MenuItem key={index} value={sector}>{sector}</MenuItem>
                  ))}
                </Select>
                {formik.touched.sectors && formik.errors.sectors && (
                  <Typography color="error" variant="body2">{formik.errors.sectors}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
                required
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth required>
                <FormLabel>Complaint Details</FormLabel>
                <TextareaAutosize
                  minRows={4}
                  name="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Details"
                  style={{ width: '100%', background: '#EAE9E9', border: 'none' }}
                />
                {formik.touched.details && formik.errors.details && (
                  <Typography color="error" variant="body2">{formik.errors.details}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <Button variant="contained" component="label" sx={{ background: '#000', color: "#fff" }}>
                <UploadIcon />
                <Typography pl={1}>Upload File</Typography>
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
              {formik.values.fileName && <Typography p={1} color={'#F57C00'}>{formik.values.fileName}</Typography>}
              <Typography p={1} color={'text.secondary'} fontWeight={'700'}>User can upload a document here</Typography>
            </Grid>
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
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default Complaint;
