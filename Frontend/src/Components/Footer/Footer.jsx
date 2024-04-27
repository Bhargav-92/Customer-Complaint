import React from 'react'
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import footerLogo from '../../assets/logo/Customer_Complaint.png'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Digi from '../../assets/logo/Digilocker.png'
import Mygov from '../../assets/logo/myGov.png'
import Negd from '../../assets/logo/negd.png'
import DataGov from '../../assets/logo/dataGov.png'
import HistoryIcon from '@mui/icons-material/History';



export default function Footer() {
  return (
    <>

      <Grid container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          background: '#fff',
          color: '#000',
          minHeight: '80vh',
          padding: ' 10px',
          marginTop: '3rem'
        }}
        md={12} p={8} pl={10}>
        <Grid item md={3} xs={12}>
          <Stack direction={'row'} alignItems={'center'} pb={2} spacing={1}>
            <img src={footerLogo} alt='Footer' height={40} width={50} />
            <Typography variant='h5' fontWeight={600} color={'#FF6B00'}>Customer - <span style={{ color: '#000' }}>Complaint </span></Typography>
          </Stack>
          <Stack direction={'column'} spacing={3}>
            <Typography textAlign={'justify'} width={'80%'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio praesentium mollitia accusamus odit itaque. Quibusdam ipsum ad sed iusto?</Typography>
            <Typography variant='h5' fontWeight={500}>Contact Details</Typography>
            <Stack direction={'row'} spacing={2}>
              <LocationOnIcon style={{ color: '#0E292E' }} />
              <Typography>National e-Governance Division, Electronics Niketan CGO Complex, Lodhi Road, New Delhi: 110003</Typography>
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <HeadsetMicIcon style={{ color: '#0E292E' }} />
              <Typography>+91 92659 35647</Typography>
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <EmailIcon style={{ color: '#0E292E' }} />
              <Typography>complainthub@gmail.com</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} mt={3} sx={{ paddingLeft: { md: '3rem', xs: '0rem' } }}>
          <Stack spacing={1.5} direction={'column'}>
            <Typography variant='h5' fontWeight={500}>Get To Know</Typography>
            <Link to='/faq' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Privacy Policy</Typography>
            </Link>
            <Link to='/faq' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Faq</Typography>
            </Link>
            <Link to='/faq' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Help</Typography>
            </Link>
            <Link to='/faq' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Customer Guidelines</Typography>
            </Link>
            <Link to='/faq' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Terms And Services</Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} mt={3}>
          <Stack spacing={1.5} direction={'column'}>
            <Typography variant='h5' fontWeight={500}>Quick Links</Typography>
            <Link to='/about' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; About us</Typography>
            </Link>
            <Link to='/home' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Dashboard</Typography>
            </Link>
            <Link to='/Complaint' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Submit Complaint</Typography>
            </Link>
            <Link to='/faq' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Emergency Numbers</Typography>
            </Link>
            <Link to='/profile' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Profile</Typography>
            </Link>
            <Link to='/myComplaint' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; My Complaints</Typography>
            </Link>
            <Link to='/contact' style={{ color: "#000", textDecoration: 'none' }}>
              <Typography>&bull; Contact Us</Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} mt={3}>
          <Stack spacing={2}>
            <Typography variant='h5' fontWeight={500}>Follow Us</Typography>
            <Stack spacing={2} direction={'row'}>
              <FacebookIcon style={{ color: 'blue', cursor: 'pointer' }} />
              <InstagramIcon style={{ color: 'crimson', cursor: 'pointer' }} />
              <TwitterIcon style={{ color: '#00bfff', cursor: 'pointer' }} />
            </Stack>
            <Typography variant='h5' fontWeight={500}>Working Hours</Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <HistoryIcon style={{ color: 'blue', cursor: 'pointer' }} />
              <Typography variant='h6'>24 x 7</Typography>
            </Stack>
            <Typography variant='h5' fontWeight={500}>Important Links</Typography>
            <Grid container md={12} spacing={2}>
              <Grid md={6} xs={12} mt={2}>
                <Link to={'https://www.digilocker.gov.in/'} target='_blank'>
                  <img src={Digi} alt="DigiLocker" height={80} width={70} />
                </Link>
              </Grid>
              <Grid md={6} xs={12} mt={2}>
                <Link to={'https://www.mygov.in/'} target='_blank'>
                  <img src={Mygov} alt="DigiLocker" height={80} width={80} />
                </Link>
              </Grid>
              <Grid md={6} xs={12} mt={3}>
                <Link to={'https://negd.gov.in/'} target='_blank'>
                  <img src={Negd} alt="DigiLocker" height={40} width={140} />
                </Link>
              </Grid>
              <Grid md={6} xs={12} mt={2}>
                <Link to={'https://data.gov.in/'} target='_blank'>
                  <img src={DataGov} alt="DigiLocker" height={60} width={120} />
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Stack direction="row"
        sx={{
          padding: '1rem',
          background: '#3B3B3B',
          color: '#fff',
          width: '100%',
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        <Typography>
          &#169; 2024 Indian Consumer Complaints Forum
        </Typography>
      </Stack>
    </>
  )
}

