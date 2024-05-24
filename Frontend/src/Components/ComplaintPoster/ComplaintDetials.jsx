import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import './detailsStyle.css';

const ComplaintDetails = () => {
    return (
        <Box justifyContent='center' alignItems={'center'}  display='flex' >
            <Stack direction='column' alignItems='center' width='100%'>
                <Box 
                    className='BackgroundImage'
                    sx={{
                        width: '100wh',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundAttachment: { xs: 'scroll', md: 'fixed' }
                    }}
                >
                    <Typography 
                        variant='h3' 
                        fontWeight={600} 
                        letterSpacing={1} 
                        color='#fff'  
                        px={{ xs: 2, md: 6 }} 
                        width={{ xs: '90%', sm: '80%', md: '46rem' }}
                        textAlign='center'
                    >
                        One Website, One Platform,
                        <Typography component='p' variant='h3' sx={{ marginTop: '10px' }}>
                            Many Government Services
                        </Typography>
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default ComplaintDetails;
