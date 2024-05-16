import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, FormControl, FormLabel, Menu, MenuItem } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputField from '../Components/Input/InputField';
import Button from '@mui/joy/Button';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadIcon from '@mui/icons-material/Upload';
import BasicSelect from '../Components/Select/BasicSelect';
import Sectors from '../Components/Sectors/Sectors';

const Complaint = () => {
  const SubmitText = "Submit";

  // State to hold form data
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [sectors, setSectors] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');
  const [translatedDetails, setTranslatedDetails] = useState('');
  const [document, setDocument] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/translate', { text: details });
      setTranslatedDetails(response.data.translatedText);
      toast.success("Translation successful");
    } catch (error) {
      console.error(error);
      toast.error("Error translating text");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/complaints', { firstname, lastname, email, phone, area, complaintType, sectors, company, details: translatedDetails || details })
      .then(result => {
        console.log(result);
        toast.success("Your Complaint Sent Successfully");
      })
      .catch(err => {
        console.error(err);
        toast.error("Error submitting the form");
      });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setArea('');
    setComplaintType('');
    setSectors('');
    setCompany('');
    setDetails('');
    setTranslatedDetails('');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocument(file);
      setFileName(file.name);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Box p={12}>
        <Typography variant='h4' style={{textAlign: 'center'}}>Register Your Complaint</Typography>
        <hr style={{ width: '100%', height: '2px', backgroundColor: '#34495e', marginTop: '20px' }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5} justifyContent="center" alignItems="center" pt={5}>
            <Grid item md={4} xs={12}>
              <InputField label="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" isRequired={true} required />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" isRequired={true} />
            </Grid>
            <Grid item md={4} xs={12}>
              <BasicSelect />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputField label="Complaint Type" value={complaintType} onChange={(e) => setComplaintType(e.target.value)} placeholder="Enter Complaint Type" isRequired={true} />
            </Grid>
            <Grid item md={6} xs={12}>
              <Sectors/>
            </Grid>
            <Grid item md={8} xs={12}>
              <InputField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company" isRequired={true} />
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
              <Button onClick={handleTranslate} variant="contained" sx={{ marginTop: '10px', background: '#000', color: "#fff" }}>
                Translate to English
              </Button>
              {translatedDetails && (
                <Typography p={1} color={'#F57C00'}>
                  Translated Details: {translatedDetails}
                </Typography>
              )}
            </Grid>
            <Grid item md={12} xs={12}>
              <Button variant="contained" component="label" sx={{ background: '#000', color: "#fff" }}>
                <UploadIcon />
                <Typography pl={1}>Upload File</Typography>
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
              {fileName && <Typography p={1} color={'#F57C00'}>{fileName}</Typography>}
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
