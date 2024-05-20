import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import nopageimg from '../assets/nopage.png'
import { Link } from 'react-router-dom'

const btn = {
  color: '#EC5C42',
  border: '2px solid #EC5C42',
  background: '#fff',
  marginTop: '20px',
  transition: '.4s linear',
  padding:'.8rem 0rem',
  width: '15vw',
  ":hover": {
    color: '#fff',
    border: 'none',
    background: '#EC5C42',
  },
};

const Nopage = () => {
  return (
    <>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} p={9}>
        <Grid item md={6}>
          <img src={nopageimg} alt="no page" height={550} width={570} />
        </Grid>
        <Grid item md={6}>
          <Stack direction={'column'} textAlign={'center'} alignItems={'center'}>
            <Typography variant='h1' sx={{ fontFamily: 'rubik', fontWeight: '600', color: '#EC5C42' }}>
              404!!
            </Typography>
            <Typography variant='h4'>
              Page Not Found
            </Typography>
            <Typography paddingTop={5} color="#555">We Can't find the page you're looking for </Typography>
            <Typography color="#555">You can either return the previous page , visit our homepage</Typography>
            <Typography color="#555">Or Contact our support team</Typography>
            {/* <Stack direction={'row'} spacing={2} marginTop={8}>
              <Link to={'/'}>
                <Button sx={{...btn}}>
                  Back to Login
                </Button>
              </Link>             
            </Stack> */}
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default Nopage
