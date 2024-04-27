import { Button, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@mui/joy'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import InputField from '../Components/Input/InputField'
import data from '../Components/Input/data.json'
import DropDown from '../Components/Input/DropDown'
import CustomButton from '../Components/Button/Button'
import Footer from '../Components/Footer/Footer'

const Complaint = () => {
  const SubmitText = "Submit"
  return (
    <>
      {/* Header */}
      <Box p={12}>
        <Typography variant='h4'>
          Register Your Complaint
        </Typography>
        <hr style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#666',
          marginTop: '20px'
        }} />
        {/* Form Starts */}
        <Grid container md={12} spacing={5} justifyContent={'center'} alignItems={'center'} pt={5}>
          <Grid item md={4} xs={12}>
            <InputField label={'First Name'} placeholder={'Enter First Name'} isRequired={true} />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputField label={'Last Name'} placeholder={'Enter First Name'} isRequired={true} />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputField label={'Gmail Id'} placeholder={'Enter Gmail Id'} isRequired={true} />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputField label={'Phone Number'} placeholder={'Enter Phone Number'} isRequired={true} />
          </Grid>

          {/* DropDown Starts */}
          <Grid item md={4} xs={12}>
            <DropDown label={'State'} optionsData={data.states} isRequired={true} placeholder={'Select State ...'} />
          </Grid>
          <Grid item md={4} xs={12}>
            <DropDown label={'City'} optionsData={data.city} isRequired={true} placeholder={'Select city ...'} />
          </Grid>
          <Grid item md={6} xs={12}>
            <DropDown label={'Complaint type'} optionsData={data.complaintTypes} isRequired={true} placeholder={'Select type ...'} />
          </Grid>
          <Grid item md={6} xs={12}>
            <DropDown label={'Sectors'} optionsData={data.sectors} isRequired={true} placeholder={'Select Sector ...'} />
          </Grid>
          <Grid item md={8} xs={12}>
            <InputField label={'Company'} placeholder={'Enter Company'} isRequired={true} />
            {/* helper Text For USer */}
            <FormHelperText>Company = Unilever Group </FormHelperText>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl>
              <FormLabel required>Date</FormLabel>

              {/* Date Format Is yy/mm/dd */}
              <Input type='date'
                slotProps={{
                  input: {
                    min: '2018-01-01',
                    max: '2024-12-31'
                  }
                }}
                sx={{ background: '#EAE9E9' }} />

              {/* helper Text For USer */}
              <FormHelperText sx={{ color: 'crimson' }}>ex :- Date = 03/06/2020</FormHelperText>
            </FormControl>
          </Grid>


          <Grid item md={12} xs={12}>
            <FormControl>
              <FormLabel required>Complaint Detials</FormLabel>
              <Textarea placeholder="Enter Details" minRows={4} sx={{ background: '#EAE9E9', border: 'none' }} />
              <FormHelperText sx={{ color: 'crimson' }}>You Can raise your Complaint in Your Native Language</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item md={12} xs={12}>
            <FormControl>
              <FormLabel required>Document</FormLabel>
              <Input type='file' sx={{ border: 'none', width: '30%' }} />
              <FormHelperText sx={{ color: 'crimson' }}>(only jpg, jpeg, png, doc ,audio file ,  pdf file and mp4 allowed
                Files with double extentions are not allowed (ex:- 1.file1.doc))</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12} textAlign={'center'} >
            <CustomButton title={SubmitText} sx={{
              background: '#F57C00',
              width: '50%',
              fontSize: '1.5rem'
            }}>
              {SubmitText}
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
      
      <Box>
        <Footer />
      </Box>
    </>
  )
}
export default Complaint
