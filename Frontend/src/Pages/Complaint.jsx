import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, FormControl, FormLabel, Input } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputField from '../Components/Input/InputField';
import Button from '@mui/joy/Button';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

const Complaint = () => {
  const SubmitText = "Submit";

  // State to hold form data
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [sectors, setSectors] = useState('');
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [document, setDocument] = useState('');




  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/complaints', { firstname, lastname, email, phone, state, city, complaintType, sectors, company, date, details })
      .then(result => {
        console.log(result);
        toast.success("Your Complaint Send Successfully");
      })
      .catch(err => {
        console.error(err);
        toast.error("Error submitting the form");
      });
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Box p={12}>
        <Typography variant='h4'>Register Your Complaint</Typography>
        <hr style={{ width: '100%', height: '1px', backgroundColor: '#666', marginTop: '20px' }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5} justifyContent="center" alignItems="center" pt={5}>
            <Grid item md={4} xs={12}>
              <InputField label="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="State" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter State" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="City" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" isRequired={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputField label="Complaint Type" value={complaintType} onChange={(e) => setComplaintType(e.target.value)} placeholder="Enter Complaint Type" isRequired={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputField label="Sectors" value={sectors} onChange={(e) => setSectors(e.target.value)} placeholder="Enter Sector" isRequired={true} />
            </Grid>
            <Grid item md={8} xs={12}>
              <InputField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl fullWidth>
                <FormLabel required>Date</FormLabel>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} sx={{ background: '#EAE9E9' }} />
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth>
                <FormLabel required>Complaint Details</FormLabel>
                <TextareaAutosize
                  minRows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Enter Details"
                  style={{ width: '100%', background: '#EAE9E9', border: 'none' }}
                />
              </FormControl>
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
