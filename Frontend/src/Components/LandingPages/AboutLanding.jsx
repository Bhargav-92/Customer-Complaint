import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Counter from '../CounterUpPage/Counter';
import { Link } from 'react-router-dom';

const AboutLanding = () => {
    return (
        <>
            <Grid container md={12} justifyContent={'center'} alignItems={'center'} p={15}>
                <Grid item md={4}>
                    <Stack direction={'column'} spacing={2}>
                        {/* <Typography variant="h5" >
                            Work progress
                        </Typography> */}
                        <Typography variant='h2' fontWeight={600} color={'#F57C00'} paddingTop={4}>
                            How it Works
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={6} spacing={10}>
                    <Typography marginLeft={8} marginTop={5}>
                         Register yourself on the platform using register form. 
                         Login With Credentails and on the dashboard click on the file "Complaint" button. 
                         Fill the complaint form and submit it.  
                         You will get a confirmation email and your complaint will be registered. <br />
                    </Typography>
                </Grid>
                <Grid item md={2} p={10}>
                    <Button variant='contained' sx={{
                        marginTop: '40px',
                        background: '#F57C00',
                        color: '#fff',
                        ":hover": {
                            opacity: 0.8,
                            border: '1px solid #F57C00',
                            color: '#000'
                        }
                    }}>
                        <Link to={'/complaint'} style={{ outline: 'none', textDecoration: 'none', color: '#fff', fontWeight: '400', verticalAlign: 'text-bottom' }}>
                            Complaint
                        </Link>
                    </Button>
                </Grid>
            </Grid>

            {/* Counter Up animation page */}
            <Box pt={16}>
                <Counter />
            </Box>
        </>
    )
}

export default AboutLanding
